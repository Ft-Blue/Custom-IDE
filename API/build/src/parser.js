"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokens = void 0;
const antlr4ts_1 = require("antlr4ts");
const helloLexer_1 = require("./hello/helloLexer");
function createLexer(input) {
    const chars = new antlr4ts_1.ANTLRInputStream(input);
    const lexer = new helloLexer_1.helloLexer(chars);
    return lexer;
}
function getTokens(input) {
    return createLexer(input).getAllTokens();
}
exports.getTokens = getTokens;
