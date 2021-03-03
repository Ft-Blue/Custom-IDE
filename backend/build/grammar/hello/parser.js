"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helloParser_1 = require("./helloParser");
const helloLexer_1 = require("./helloLexer");
const antlr4ts_1 = require("antlr4ts");
function parseAndGetASTRoot(code) {
    const inputStream = new antlr4ts_1.ANTLRInputStream(code);
    const lexer = new helloLexer_1.helloLexer(inputStream);
    const tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    const parser = new helloParser_1.helloParser(tokenStream);
    return parser.root();
}
exports.default = parseAndGetASTRoot;
