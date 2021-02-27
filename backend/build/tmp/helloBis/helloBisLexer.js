"use strict";
// Generated from tmp/helloBis/helloBis.g4 by ANTLR 4.9.0-SNAPSHOT
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
exports.helloBisLexer = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const Lexer_1 = require("antlr4ts/Lexer");
const LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class helloBisLexer extends Lexer_1.Lexer {
    // tslint:enable:no-trailing-whitespace
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator_1.LexerATNSimulator(helloBisLexer._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return helloBisLexer.VOCABULARY;
    }
    // @Override
    get grammarFileName() { return "helloBis.g4"; }
    // @Override
    get ruleNames() { return helloBisLexer.ruleNames; }
    // @Override
    get serializedATN() { return helloBisLexer._serializedATN; }
    // @Override
    get channelNames() { return helloBisLexer.channelNames; }
    // @Override
    get modeNames() { return helloBisLexer.modeNames; }
    static get _ATN() {
        if (!helloBisLexer.__ATN) {
            helloBisLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(helloBisLexer._serializedATN));
        }
        return helloBisLexer.__ATN;
    }
}
exports.helloBisLexer = helloBisLexer;
helloBisLexer.HELLO = 1;
helloBisLexer.ID = 2;
helloBisLexer.WS = 3;
// tslint:disable:no-trailing-whitespace
helloBisLexer.channelNames = [
    "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
];
// tslint:disable:no-trailing-whitespace
helloBisLexer.modeNames = [
    "DEFAULT_MODE",
];
helloBisLexer.ruleNames = [
    "HELLO", "ID", "WS",
];
helloBisLexer._LITERAL_NAMES = [
    undefined, "'hello'",
];
helloBisLexer._SYMBOLIC_NAMES = [
    undefined, "HELLO", "ID", "WS",
];
helloBisLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(helloBisLexer._LITERAL_NAMES, helloBisLexer._SYMBOLIC_NAMES, []);
helloBisLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x05\x18\b\x01" +
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
