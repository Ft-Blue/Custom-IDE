// Generated from tmp/hello/hello.g4 by ANTLR 4.9.0-SNAPSHOT


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


export class helloParser extends Parser {
	public static readonly HELLO = 1;
	public static readonly ID = 2;
	public static readonly WS = 3;
	public static readonly RULE_root = 0;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"root",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'hello'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "HELLO", "ID", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(helloParser._LITERAL_NAMES, helloParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return helloParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "hello.g4"; }

	// @Override
	public get ruleNames(): string[] { return helloParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return helloParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(helloParser._ATN, this);
	}
	// @RuleVersion(0)
	public root(): RootContext {
		let _localctx: RootContext = new RootContext(this._ctx, this.state);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x05\b\x04\x02" +
		"\t\x02\x03\x02\x03\x02\x03\x02\x03\x02\x02\x02\x02\x03\x02\x02\x02\x02" +
		"\x02\x06\x02\x04\x03\x02\x02\x02\x04\x05\x07\x03\x02\x02\x05\x06\x07\x04" +
		"\x02\x02\x06\x03\x03\x02\x02\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!helloParser.__ATN) {
			helloParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(helloParser._serializedATN));
		}

		return helloParser.__ATN;
	}

}

export class RootContext extends ParserRuleContext {
	public HELLO(): TerminalNode { return this.getToken(helloParser.HELLO, 0); }
	public ID(): TerminalNode { return this.getToken(helloParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return helloParser.RULE_root; }
}


