import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";
import fs from "fs";
import path from "path";
import { spawn } from "child_process";
import Handlebars from "handlebars";
import session from "express-session";
import redis from "redis";
import connectRedis from "connect-redis";
let RedisStore = connectRedis(session);
let redisClient = redis.createClient();

const app = express();
app.use(cors());
app.use(
  session({
    secret: ['veryimportantsecret', 'notsoimportantsecret', 'highlyprobablysecret'],
    saveUninitialized: true,
    name: "secretname",
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: true,
      maxAge: 3600000
    },
    store: new RedisStore({ client: redisClient, ttl: 86400 }),
    resave: false
  })
)
app.use(bodyParser.json());
const PORT = 5000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {

    const sessionID = req['sessionID'];
    console.log(sessionID);

    const grammarName = file.originalname.split(".")[0];
    const _path = path.join("grammar", sessionID, grammarName);
    fs.mkdirSync(_path, { recursive: true });
    cb(null, _path);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage }).single("file");

const runAntlr = (filename: string, path_to_grammar, grammarRoot) => {
  const grammarDir = path.dirname(path_to_grammar);
  const grammarName = filename.split(".")[0];
  var child = spawn("node_modules/antlr4ts-cli/antlr4ts", [
    "-no-listener",
    path_to_grammar,
  ]);
  /*
  child.stdout.on("data", (data) => console.log(data.toString()));
  child.stderr.on("data", (data) => console.log(data.toString()));
  */
  child.on("exit", (data) => {
    const parserTemplateFile = fs.readFileSync("assets/parser.hbs").toString();
    const parserTemplate = Handlebars.compile(parserTemplateFile);
    Handlebars.registerHelper("toTitleCase", (str: string) => {
      return str[0].toUpperCase() + str.slice(1);
    });
    const source = parserTemplate({
      grammarName: grammarName,
      grammarRoot: grammarRoot,
    });
    fs.writeFileSync(path.join(grammarDir, "parser.ts"), source);
  });
};


app.post("/generate", (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json(err);
    }
    runAntlr(req.file.filename, req.file.path, req.body.grammarRoot);
    return res.status(200).send(req.file);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
