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
exports.InstContext = exports.RootContext = exports.basicParser = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class basicParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(basicParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return basicParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "basic.g4"; }
    // @Override
    get ruleNames() { return basicParser.ruleNames; }
    // @Override
    get serializedATN() { return basicParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    root() {
        let _localctx = new RootContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, basicParser.RULE_root);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 4;
                this.match(basicParser.YARN);
                this.state = 5;
                this.inst();
                this.state = 6;
                this.match(basicParser.ID);
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
    inst() {
        let _localctx = new InstContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, basicParser.RULE_inst);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 8;
                _la = this._input.LA(1);
                if (!(_la === basicParser.ADD || _la === basicParser.DELETE)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
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
        if (!basicParser.__ATN) {
            basicParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(basicParser._serializedATN));
        }
        return basicParser.__ATN;
    }
}
exports.basicParser = basicParser;
basicParser.YARN = 1;
basicParser.ADD = 2;
basicParser.DELETE = 3;
basicParser.ID = 4;
basicParser.WS = 5;
basicParser.RULE_root = 0;
basicParser.RULE_inst = 1;
// tslint:disable:no-trailing-whitespace
basicParser.ruleNames = [
    "root", "inst",
];
basicParser._LITERAL_NAMES = [
    undefined, "'yarn'", "'add'", "'delete'",
];
basicParser._SYMBOLIC_NAMES = [
    undefined, "YARN", "ADD", "DELETE", "ID", "WS",
];
basicParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(basicParser._LITERAL_NAMES, basicParser._SYMBOLIC_NAMES, []);
basicParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x07\r\x04\x02" +
    "\t\x02\x04\x03\t\x03\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
    "\x03\x02\x02\x02\x04\x02\x02\x04\x02\x02\x03\x03\x02\x04\x05\x02\n\x02" +
    "\x06\x03\x02\x02\x02\x04\n\x03\x02\x02\x02\x06\x07\x07\x03\x02\x02\x07" +
    "\b\x05\x04\x03\x02\b\t\x07\x06\x02\x02\t\x03\x03\x02\x02\x02\n\v\t\x02" +
    "\x02\x02\v\x05\x03\x02\x02\x02\x02";
class RootContext extends ParserRuleContext_1.ParserRuleContext {
    YARN() { return this.getToken(basicParser.YARN, 0); }
    inst() {
        return this.getRuleContext(0, InstContext);
    }
    ID() { return this.getToken(basicParser.ID, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return basicParser.RULE_root; }
}
exports.RootContext = RootContext;
class InstContext extends ParserRuleContext_1.ParserRuleContext {
    ADD() { return this.tryGetToken(basicParser.ADD, 0); }
    DELETE() { return this.tryGetToken(basicParser.DELETE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return basicParser.RULE_inst; }
}
exports.InstContext = InstContext;
