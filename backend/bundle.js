'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
const TodoLangGrammarParser_1 = require("./TodoLangGrammarParser");
const TodoLangGrammarLexer_1 = require("./TodoLangGrammarLexer");
const antlr4ts_1 = require("antlr4ts");
function parseAndGetASTRoot(code) {
    const inputStream = new antlr4ts_1.ANTLRInputStream(code);
    const lexer = new TodoLangGrammarLexer_1.TodoLangGrammarLexer(inputStream);
    const tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    const parser = new TodoLangGrammarParser_1.TodoLangGrammarParser(tokenStream);
    return parser.todoExpressions();
}
exports.default = parseAndGetASTRoot;
