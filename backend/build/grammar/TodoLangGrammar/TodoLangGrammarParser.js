"use strict";
// Generated from grammar/TodoLangGrammar/TodoLangGrammar.g4 by ANTLR 4.9.0-SNAPSHOT
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
exports.CompleteExpressionContext = exports.AddExpressionContext = exports.TodoExpressionsContext = exports.TodoLangGrammarParser = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class TodoLangGrammarParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(TodoLangGrammarParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return TodoLangGrammarParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "TodoLangGrammar.g4"; }
    // @Override
    get ruleNames() { return TodoLangGrammarParser.ruleNames; }
    // @Override
    get serializedATN() { return TodoLangGrammarParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    todoExpressions() {
        let _localctx = new TodoExpressionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, TodoLangGrammarParser.RULE_todoExpressions);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 9;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TodoLangGrammarParser.ADD) {
                    {
                        {
                            this.state = 6;
                            this.addExpression();
                        }
                    }
                    this.state = 11;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 15;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TodoLangGrammarParser.COMPLETE) {
                    {
                        {
                            this.state = 12;
                            this.completeExpression();
                        }
                    }
                    this.state = 17;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
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
    // @RuleVersion(0)
    addExpression() {
        let _localctx = new AddExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, TodoLangGrammarParser.RULE_addExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 18;
                this.match(TodoLangGrammarParser.ADD);
                this.state = 19;
                this.match(TodoLangGrammarParser.TODO);
                this.state = 20;
                this.match(TodoLangGrammarParser.STRING);
                this.state = 21;
                this.match(TodoLangGrammarParser.EOL);
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
    completeExpression() {
        let _localctx = new CompleteExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, TodoLangGrammarParser.RULE_completeExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 23;
                this.match(TodoLangGrammarParser.COMPLETE);
                this.state = 24;
                this.match(TodoLangGrammarParser.TODO);
                this.state = 25;
                this.match(TodoLangGrammarParser.STRING);
                this.state = 26;
                this.match(TodoLangGrammarParser.EOL);
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
        if (!TodoLangGrammarParser.__ATN) {
            TodoLangGrammarParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(TodoLangGrammarParser._serializedATN));
        }
        return TodoLangGrammarParser.__ATN;
    }
}
exports.TodoLangGrammarParser = TodoLangGrammarParser;
TodoLangGrammarParser.ADD = 1;
TodoLangGrammarParser.TODO = 2;
TodoLangGrammarParser.COMPLETE = 3;
TodoLangGrammarParser.STRING = 4;
TodoLangGrammarParser.EOL = 5;
TodoLangGrammarParser.WS = 6;
TodoLangGrammarParser.RULE_todoExpressions = 0;
TodoLangGrammarParser.RULE_addExpression = 1;
TodoLangGrammarParser.RULE_completeExpression = 2;
// tslint:disable:no-trailing-whitespace
TodoLangGrammarParser.ruleNames = [
    "todoExpressions", "addExpression", "completeExpression",
];
TodoLangGrammarParser._LITERAL_NAMES = [
    undefined, "'ADD'", "'TODO'", "'COMPLETE'",
];
TodoLangGrammarParser._SYMBOLIC_NAMES = [
    undefined, "ADD", "TODO", "COMPLETE", "STRING", "EOL", "WS",
];
TodoLangGrammarParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(TodoLangGrammarParser._LITERAL_NAMES, TodoLangGrammarParser._SYMBOLIC_NAMES, []);
TodoLangGrammarParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\b\x1F\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x07\x02\n\n\x02\f\x02\x0E\x02" +
    "\r\v\x02\x03\x02\x07\x02\x10\n\x02\f\x02\x0E\x02\x13\v\x02\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
    "\x04\x02\x02\x02\x05\x02\x02\x04\x02\x06\x02\x02\x02\x02\x1D\x02\v\x03" +
    "\x02\x02\x02\x04\x14\x03\x02\x02\x02\x06\x19\x03\x02\x02\x02\b\n\x05\x04" +
    "\x03\x02\t\b\x03\x02\x02\x02\n\r\x03\x02\x02\x02\v\t\x03\x02\x02\x02\v" +
    "\f\x03\x02\x02\x02\f\x11\x03\x02\x02\x02\r\v\x03\x02\x02\x02\x0E\x10\x05" +
    "\x06\x04\x02\x0F\x0E\x03\x02\x02\x02\x10\x13\x03\x02\x02\x02\x11\x0F\x03" +
    "\x02\x02\x02\x11\x12\x03\x02\x02\x02\x12\x03\x03\x02\x02\x02\x13\x11\x03" +
    "\x02\x02\x02\x14\x15\x07\x03\x02\x02\x15\x16\x07\x04\x02\x02\x16\x17\x07" +
    "\x06\x02\x02\x17\x18\x07\x07\x02\x02\x18\x05\x03\x02\x02\x02\x19\x1A\x07" +
    "\x05\x02\x02\x1A\x1B\x07\x04\x02\x02\x1B\x1C\x07\x06\x02\x02\x1C\x1D\x07" +
    "\x07\x02\x02\x1D\x07\x03\x02\x02\x02\x04\v\x11";
class TodoExpressionsContext extends ParserRuleContext_1.ParserRuleContext {
    addExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(AddExpressionContext);
        }
        else {
            return this.getRuleContext(i, AddExpressionContext);
        }
    }
    completeExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(CompleteExpressionContext);
        }
        else {
            return this.getRuleContext(i, CompleteExpressionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TodoLangGrammarParser.RULE_todoExpressions; }
}
exports.TodoExpressionsContext = TodoExpressionsContext;
class AddExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    ADD() { return this.getToken(TodoLangGrammarParser.ADD, 0); }
    TODO() { return this.getToken(TodoLangGrammarParser.TODO, 0); }
    STRING() { return this.getToken(TodoLangGrammarParser.STRING, 0); }
    EOL() { return this.getToken(TodoLangGrammarParser.EOL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TodoLangGrammarParser.RULE_addExpression; }
}
exports.AddExpressionContext = AddExpressionContext;
class CompleteExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    COMPLETE() { return this.getToken(TodoLangGrammarParser.COMPLETE, 0); }
    TODO() { return this.getToken(TodoLangGrammarParser.TODO, 0); }
    STRING() { return this.getToken(TodoLangGrammarParser.STRING, 0); }
    EOL() { return this.getToken(TodoLangGrammarParser.EOL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TodoLangGrammarParser.RULE_completeExpression; }
}
exports.CompleteExpressionContext = CompleteExpressionContext;
