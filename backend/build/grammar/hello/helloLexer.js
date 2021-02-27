"use strict";
// Generated from grammar/hello/hello.g4 by ANTLR 4.9.0-SNAPSHOT
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloLexer = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const Lexer_1 = require("antlr4ts/Lexer");
const LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class helloLexer extends Lexer_1.Lexer {
    // tslint:enable:no-trailing-whitespace
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator_1.LexerATNSimulator(helloLexer._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return helloLexer.VOCABULARY;
    }
    // @Override
    get grammarFileName() { return "hello.g4"; }
    // @Override
    get ruleNames() { return helloLexer.ruleNames; }
    // @Override
    get serializedATN() { return helloLexer._serializedATN; }
    // @Override
    get channelNames() { return helloLexer.channelNames; }
    // @Override
    get modeNames() { return helloLexer.modeNames; }
    static get _ATN() {
        if (!helloLexer.__ATN) {
            helloLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(helloLexer._serializedATN));
        }
        return helloLexer.__ATN;
    }
}
exports.helloLexer = helloLexer;
helloLexer.HELLO = 1;
helloLexer.ID = 2;
helloLexer.WS = 3;
// tslint:disable:no-trailing-whitespace
helloLexer.channelNames = [
    "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
];
// tslint:disable:no-trailing-whitespace
helloLexer.modeNames = [
    "DEFAULT_MODE",
];
helloLexer.ruleNames = [
    "HELLO", "ID", "WS",
];
helloLexer._LITERAL_NAMES = [
    undefined, "'hello'",
];
helloLexer._SYMBOLIC_NAMES = [
    undefined, "HELLO", "ID", "WS",
];
helloLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(helloLexer._LITERAL_NAMES, helloLexer._SYMBOLIC_NAMES, []);
helloLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x05\x18\b\x01" +
    "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x03\x02\x03\x02\x03" +
    "\x02\x03\x02\x03\x02\x03\x03\x06\x03\x11\n\x03\r\x03\x0E\x03\x12\x03\x04" +
    "\x03\x04\x03\x04\x03\x04\x02\x02\x02\x05\x03\x02\x03\x05\x02\x04\x07\x02" +
    "\x05\x03\x02\x04\x03\x02C|\x05\x02\v\f\x0F\x0F\"\"\x02\x18\x02\x03\x03" +
    "\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x03\t\x03" +
    "\x02\x02\x02\x05\x10\x03\x02\x02\x02\x07\x14\x03\x02\x02\x02\t\n\x07j" +
    "\x02\x02\n\v\x07g\x02\x02\v\f\x07n\x02\x02\f\r\x07n\x02\x02\r\x0E\x07" +
    "q\x02\x02\x0E\x04\x03\x02\x02\x02\x0F\x11\t\x02\x02\x02\x10\x0F\x03\x02" +
    "\x02\x02\x11\x12\x03\x02\x02\x02\x12\x10\x03\x02\x02\x02\x12\x13\x03\x02" +
    "\x02\x02\x13\x06\x03\x02\x02\x02\x14\x15\t\x03\x02\x02\x15\x16\x03\x02" +
    "\x02\x02\x16\x17\b\x04\x02\x02\x17\b\x03\x02\x02\x02\x04\x02\x12\x03\b" +
    "\x02\x02";
