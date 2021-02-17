import { ANTLRInputStream } from "antlr4ts";
import { helloLexer } from "./helloLexer";

function createLexer(input: string) {
  const chars = new ANTLRInputStream(input);
  const lexer = new helloLexer(chars);

  return lexer;
}
export function getTokens(input: string) {
  return createLexer(input).getAllTokens();
}
