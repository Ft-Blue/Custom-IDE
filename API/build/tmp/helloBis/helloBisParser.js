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
exports.GreetingsContext = exports.RootContext = exports.helloBisParser = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class helloBisParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(helloBisParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return helloBisParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "helloBis.g4"; }
    // @Override
    get ruleNames() { return helloBisParser.ruleNames; }
    // @Override
    get serializedATN() { return helloBisParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    root() {
        let _localctx = new RootContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, helloBisParser.RULE_root);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 5;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 4;
                            this.greetings();
                        }
                    }
                    this.state = 7;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === helloBisParser.HELLO);
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
    // @RuleVersion(0)
    greetings() {
        let _localctx = new GreetingsContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, helloBisParser.RULE_greetings);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 9;
                this.match(helloBisParser.HELLO);
                this.state = 10;
                this.match(helloBisParser.ID);
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
        if (!helloBisParser.__ATN) {
            helloBisParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(helloBisParser._serializedATN));
        }
        return helloBisParser.__ATN;
    }
}
exports.helloBisParser = helloBisParser;
helloBisParser.HELLO = 1;
helloBisParser.ID = 2;
helloBisParser.WS = 3;
helloBisParser.RULE_root = 0;
helloBisParser.RULE_greetings = 1;
// tslint:disable:no-trailing-whitespace
helloBisParser.ruleNames = [
    "root", "greetings",
];
helloBisParser._LITERAL_NAMES = [
    undefined, "'hello'",
];
helloBisParser._SYMBOLIC_NAMES = [
    undefined, "HELLO", "ID", "WS",
];
helloBisParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(helloBisParser._LITERAL_NAMES, helloBisParser._SYMBOLIC_NAMES, []);
helloBisParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x05\x0F\x04\x02" +
    "\t\x02\x04\x03\t\x03\x03\x02\x06\x02\b\n\x02\r\x02\x0E\x02\t\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x02\x02\x02\x04\x02\x02\x04\x02\x02\x02\x02\r\x02" +
    "\x07\x03\x02\x02\x02\x04\v\x03\x02\x02\x02\x06\b\x05\x04\x03\x02\x07\x06" +
    "\x03\x02\x02\x02\b\t\x03\x02\x02\x02\t\x07\x03\x02\x02\x02\t\n\x03\x02" +
    "\x02\x02\n\x03\x03\x02\x02\x02\v\f\x07\x03\x02\x02\f\r\x07\x04\x02\x02" +
    "\r\x05\x03\x02\x02\x02\x03\t";
class RootContext extends ParserRuleContext_1.ParserRuleContext {
    greetings(i) {
        if (i === undefined) {
            return this.getRuleContexts(GreetingsContext);
        }
        else {
            return this.getRuleContext(i, GreetingsContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return helloBisParser.RULE_root; }
}
exports.RootContext = RootContext;
class GreetingsContext extends ParserRuleContext_1.ParserRuleContext {
    HELLO() { return this.getToken(helloBisParser.HELLO, 0); }
    ID() { return this.getToken(helloBisParser.ID, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return helloBisParser.RULE_greetings; }
}
exports.GreetingsContext = GreetingsContext;
