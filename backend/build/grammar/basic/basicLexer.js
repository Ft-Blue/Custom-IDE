"use strict";
// Generated from grammar/basic/basic.g4 by ANTLR 4.9.0-SNAPSHOT
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
exports.basicLexer = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const Lexer_1 = require("antlr4ts/Lexer");
const LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class basicLexer extends Lexer_1.Lexer {
    // tslint:enable:no-trailing-whitespace
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator_1.LexerATNSimulator(basicLexer._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return basicLexer.VOCABULARY;
    }
    // @Override
    get grammarFileName() { return "basic.g4"; }
    // @Override
    get ruleNames() { return basicLexer.ruleNames; }
    // @Override
    get serializedATN() { return basicLexer._serializedATN; }
    // @Override
    get channelNames() { return basicLexer.channelNames; }
    // @Override
    get modeNames() { return basicLexer.modeNames; }
    static get _ATN() {
        if (!basicLexer.__ATN) {
            basicLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(basicLexer._serializedATN));
        }
        return basicLexer.__ATN;
    }
}
exports.basicLexer = basicLexer;
basicLexer.YARN = 1;
basicLexer.ADD = 2;
basicLexer.DELETE = 3;
basicLexer.ID = 4;
basicLexer.WS = 5;
// tslint:disable:no-trailing-whitespace
basicLexer.channelNames = [
    "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
];
// tslint:disable:no-trailing-whitespace
basicLexer.modeNames = [
    "DEFAULT_MODE",
];
basicLexer.ruleNames = [
    "YARN", "ADD", "DELETE", "ID", "WS",
];
basicLexer._LITERAL_NAMES = [
    undefined, "'yarn'", "'add'", "'delete'",
];
basicLexer._SYMBOLIC_NAMES = [
    undefined, "YARN", "ADD", "DELETE", "ID", "WS",
];
basicLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(basicLexer._LITERAL_NAMES, basicLexer._SYMBOLIC_NAMES, []);
basicLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x07(\b\x01\x04" +
    "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03" +
    "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x07" +
    "\x05 \n\x05\f\x05\x0E\x05#\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x02\x02" +
    "\x02\x07\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\x03\x02" +
    "\x05\x04\x02aac|\x05\x022;aac|\x05\x02\v\f\x0F\x0F\"\"\x02(\x02\x03\x03" +
    "\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03" +
    "\x02\x02\x02\x02\v\x03\x02\x02\x02\x03\r\x03\x02\x02\x02\x05\x12\x03\x02" +
    "\x02\x02\x07\x16\x03\x02\x02\x02\t\x1D\x03\x02\x02\x02\v$\x03\x02\x02" +
    "\x02\r\x0E\x07{\x02\x02\x0E\x0F\x07c\x02\x02\x0F\x10\x07t\x02\x02\x10" +
    "\x11\x07p\x02\x02\x11\x04\x03\x02\x02\x02\x12\x13\x07c\x02\x02\x13\x14" +
    "\x07f\x02\x02\x14\x15\x07f\x02\x02\x15\x06\x03\x02\x02\x02\x16\x17\x07" +
    "f\x02\x02\x17\x18\x07g\x02\x02\x18\x19\x07n\x02\x02\x19\x1A\x07g\x02\x02" +
    "\x1A\x1B\x07v\x02\x02\x1B\x1C\x07g\x02\x02\x1C\b\x03\x02\x02\x02\x1D!" +
    "\t\x02\x02\x02\x1E \t\x03\x02\x02\x1F\x1E\x03\x02\x02\x02 #\x03\x02\x02" +
    "\x02!\x1F\x03\x02\x02\x02!\"\x03\x02\x02\x02\"\n\x03\x02\x02\x02#!\x03" +
    "\x02\x02\x02$%\t\x04\x02\x02%&\x03\x02\x02\x02&\'\b\x06\x02\x02\'\f\x03" +
    "\x02\x02\x02\x04\x02!\x03\b\x02\x02";
