import { TodoLangGrammarParser, TodoExpressionsContext } from "./TodoLangGrammarParser";
import { TodoLangGrammarLexer } from "./TodoLangGrammarLexer";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";

export default function parseAndGetASTRoot(code: string): TodoExpressionsContext {
    const inputStream = new ANTLRInputStream(code);
    const lexer = new TodoLangGrammarLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new TodoLangGrammarParser(tokenStream);

    return parser.todoExpressions();
}