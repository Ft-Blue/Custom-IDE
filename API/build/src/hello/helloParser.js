"use strict";
// Generated from tmp/hello/hello.g4 by ANTLR 4.9.0-SNAPSHOT
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
exports.RootContext = exports.helloParser = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class helloParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(helloParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return helloParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "hello.g4"; }
    // @Override
    get ruleNames() { return helloParser.ruleNames; }
    // @Override
    get serializedATN() { return helloParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    root() {
        let _localctx = new RootContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, helloParser.RULE_root);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2;
                this.match(helloParser.HELLO);
                this.state = 3;
                this.match(helloParser.ID);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static get _ATN() {
        if (!helloParser.__ATN) {
            helloParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(helloParser._serializedATN));
        }
        return helloParser.__ATN;
    }
}
exports.helloParser = helloParser;
helloParser.HELLO = 1;
helloParser.ID = 2;
helloParser.WS = 3;
helloParser.RULE_root = 0;
// tslint:disable:no-trailing-whitespace
helloParser.ruleNames = [
    "root",
];
helloParser._LITERAL_NAMES = [
    undefined, "'hello'",
];
helloParser._SYMBOLIC_NAMES = [
    undefined, "HELLO", "ID", "WS",
];
helloParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(helloParser._LITERAL_NAMES, helloParser._SYMBOLIC_NAMES, []);
helloParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x05\b\x04\x02" +
    "\t\x02\x03\x02\x03\x02\x03\x02\x03\x02\x02\x02\x02\x03\x02\x02\x02\x02" +
    "\x02\x06\x02\x04\x03\x02\x02\x02\x04\x05\x07\x03\x02\x02\x05\x06\x07\x04" +
    "\x02\x02\x06\x03\x03\x02\x02\x02\x02";
class RootContext extends ParserRuleContext_1.ParserRuleContext {
    HELLO() { return this.getToken(helloParser.HELLO, 0); }
    ID() { return this.getToken(helloParser.ID, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return helloParser.RULE_root; }
}
exports.RootContext = RootContext;
