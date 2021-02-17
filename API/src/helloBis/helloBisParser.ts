// Generated from tmp/helloBis/helloBis.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class helloBisParser extends Parser {
	public static readonly HELLO = 1;
	public static readonly ID = 2;
	public static readonly WS = 3;
	public static readonly RULE_root = 0;
	public static readonly RULE_greetings = 1;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"root", "greetings",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'hello'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "HELLO", "ID", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(helloBisParser._LITERAL_NAMES, helloBisParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return helloBisParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "helloBis.g4"; }

	// @Override
	public get ruleNames(): string[] { return helloBisParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return helloBisParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(helloBisParser._ATN, this);
	}
	// @RuleVersion(0)
	public root(): RootContext {
		let _localctx: RootContext = new RootContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, helloBisParser.RULE_root);
		let _la: number;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public greetings(): GreetingsContext {
		let _localctx: GreetingsContext = new GreetingsContext(this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x05\x0F\x04\x02" +
		"\t\x02\x04\x03\t\x03\x03\x02\x06\x02\b\n\x02\r\x02\x0E\x02\t\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x02\x02\x02\x04\x02\x02\x04\x02\x02\x02\x02\r\x02" +
		"\x07\x03\x02\x02\x02\x04\v\x03\x02\x02\x02\x06\b\x05\x04\x03\x02\x07\x06" +
		"\x03\x02\x02\x02\b\t\x03\x02\x02\x02\t\x07\x03\x02\x02\x02\t\n\x03\x02" +
		"\x02\x02\n\x03\x03\x02\x02\x02\v\f\x07\x03\x02\x02\f\r\x07\x04\x02\x02" +
		"\r\x05\x03\x02\x02\x02\x03\t";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!helloBisParser.__ATN) {
			helloBisParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(helloBisParser._serializedATN));
		}

		return helloBisParser.__ATN;
	}

}

export class RootContext extends ParserRuleContext {
	public greetings(): GreetingsContext[];
	public greetings(i: number): GreetingsContext;
	public greetings(i?: number): GreetingsContext | GreetingsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GreetingsContext);
		} else {
			return this.getRuleContext(i, GreetingsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return helloBisParser.RULE_root; }
}


export class GreetingsContext extends ParserRuleContext {
	public HELLO(): TerminalNode { return this.getToken(helloBisParser.HELLO, 0); }
	public ID(): TerminalNode { return this.getToken(helloBisParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return helloBisParser.RULE_greetings; }
}


