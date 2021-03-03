"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const child_process_1 = require("child_process");
const handlebars_1 = __importDefault(require("handlebars"));
const express_session_1 = __importDefault(require("express-session"));
const redis_1 = __importDefault(require("redis"));
const connect_redis_1 = __importDefault(require("connect-redis"));
let RedisStore = connect_redis_1.default(express_session_1.default);
let redisClient = redis_1.default.createClient();
const app = express_1.default();
app.use(cors_1.default());
app.use(express_session_1.default({
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
}));
app.use(body_parser_1.default.json());
const PORT = 5000;
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        const sessionID = req['sessionID'];
        console.log(sessionID);
        const grammarName = file.originalname.split(".")[0];
        const _path = path_1.default.join("grammar", sessionID, grammarName);
        fs_1.default.mkdirSync(_path, { recursive: true });
        cb(null, _path);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
var upload = multer_1.default({ storage: storage }).single("file");
const runAntlr = (filename, path_to_grammar, grammarRoot) => {
    const grammarDir = path_1.default.dirname(path_to_grammar);
    const grammarName = filename.split(".")[0];
    var child = child_process_1.spawn("node_modules/antlr4ts-cli/antlr4ts", [
        "-no-listener",
        path_to_grammar,
    ]);
    /*
    child.stdout.on("data", (data) => console.log(data.toString()));
    child.stderr.on("data", (data) => console.log(data.toString()));
    */
    child.on("exit", (data) => {
        const parserTemplateFile = fs_1.default.readFileSync("assets/parser.hbs").toString();
        const parserTemplate = handlebars_1.default.compile(parserTemplateFile);
        handlebars_1.default.registerHelper("toTitleCase", (str) => {
            return str[0].toUpperCase() + str.slice(1);
        });
        const source = parserTemplate({
            grammarName: grammarName,
            grammarRoot: grammarRoot,
        });
        fs_1.default.writeFileSync(path_1.default.join(grammarDir, "parser.ts"), source);
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
