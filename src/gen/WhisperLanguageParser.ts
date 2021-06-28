// Generated from ./grammar/WhisperLanguage.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { WhisperLanguageListener } from "./WhisperLanguageListener";

export class WhisperLanguageParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly Println = 2;
	public static readonly Print = 3;
	public static readonly Input = 4;
	public static readonly Assert = 5;
	public static readonly Size = 6;
	public static readonly Def = 7;
	public static readonly If = 8;
	public static readonly Else = 9;
	public static readonly Return = 10;
	public static readonly For = 11;
	public static readonly While = 12;
	public static readonly To = 13;
	public static readonly Do = 14;
	public static readonly End = 15;
	public static readonly In = 16;
	public static readonly Null = 17;
	public static readonly LABEL_Alias = 18;
	public static readonly GOTO_Alias = 19;
	public static readonly JUMP_Alias = 20;
	public static readonly IMPORT_Alias = 21;
	public static readonly INCLUDE_Alias = 22;
	public static readonly Modulus_Alias = 23;
	public static readonly Class_Alias = 24;
	public static readonly INTERFACE_Alias = 25;
	public static readonly EXTEND_Alias = 26;
	public static readonly BitwiseAnd = 27;
	public static readonly BitwiseOr = 28;
	public static readonly BitwiseNot = 29;
	public static readonly BitwiseNegationOperator = 30;
	public static readonly LeftShiftOperator = 31;
	public static readonly RightShiftOperator = 32;
	public static readonly Or = 33;
	public static readonly And = 34;
	public static readonly Equals = 35;
	public static readonly NEquals = 36;
	public static readonly GTEquals = 37;
	public static readonly LTEquals = 38;
	public static readonly Excl = 39;
	public static readonly GT = 40;
	public static readonly LT = 41;
	public static readonly Add = 42;
	public static readonly Subtract = 43;
	public static readonly Multiply = 44;
	public static readonly Divide = 45;
	public static readonly Modulus = 46;
	public static readonly OBrace = 47;
	public static readonly CBrace = 48;
	public static readonly OBracket = 49;
	public static readonly CBracket = 50;
	public static readonly OParen = 51;
	public static readonly CParen = 52;
	public static readonly SColon = 53;
	public static readonly Assign = 54;
	public static readonly Comma = 55;
	public static readonly QMark = 56;
	public static readonly Colon = 57;
	public static readonly Bool = 58;
	public static readonly Number = 59;
	public static readonly BuildIdentifier = 60;
	public static readonly Identifier = 61;
	public static readonly String_Alias = 62;
	public static readonly Comment = 63;
	public static readonly Space = 64;
	public static readonly RULE_parse = 0;
	public static readonly RULE_block = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_assignment = 3;
	public static readonly RULE_functionCall = 4;
	public static readonly RULE_ifStatement = 5;
	public static readonly RULE_ifStat = 6;
	public static readonly RULE_elseIfStat = 7;
	public static readonly RULE_elseStat = 8;
	public static readonly RULE_functionDecl = 9;
	public static readonly RULE_forStatement = 10;
	public static readonly RULE_whileStatement = 11;
	public static readonly RULE_idList = 12;
	public static readonly RULE_exprList = 13;
	public static readonly RULE_expression = 14;
	public static readonly RULE_list_Alias = 15;
	public static readonly RULE_indexes = 16;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"parse", "block", "statement", "assignment", "functionCall", "ifStatement", 
		"ifStat", "elseIfStat", "elseStat", "functionDecl", "forStatement", "whileStatement", 
		"idList", "exprList", "expression", "list_Alias", "indexes",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'**'", "'println'", "'print'", "'input'", "'assert'", "'size'", 
		"'func'", "'if'", "'else'", "'return'", "'for'", "'while'", "'to'", "'do'", 
		"'end'", "'in'", "'null'", "'label'", "'goto'", "'jump'", "'import'", 
		"'include'", "'modulue'", "'class'", "'interface'", "'extend'", "'&'", 
		"'|'", "'^'", "'~'", "'>>'", "'<<'", "'||'", "'&&'", "'=='", "'!='", "'>='", 
		"'<='", "'!'", "'>'", "'<'", "'+'", "'-'", "'*'", "'/'", "'%'", "'{'", 
		"'}'", "'['", "']'", "'('", "')'", "';'", "'='", "','", "'?'", "':'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "Println", "Print", "Input", "Assert", "Size", "Def", 
		"If", "Else", "Return", "For", "While", "To", "Do", "End", "In", "Null", 
		"LABEL_Alias", "GOTO_Alias", "JUMP_Alias", "IMPORT_Alias", "INCLUDE_Alias", 
		"Modulus_Alias", "Class_Alias", "INTERFACE_Alias", "EXTEND_Alias", "BitwiseAnd", 
		"BitwiseOr", "BitwiseNot", "BitwiseNegationOperator", "LeftShiftOperator", 
		"RightShiftOperator", "Or", "And", "Equals", "NEquals", "GTEquals", "LTEquals", 
		"Excl", "GT", "LT", "Add", "Subtract", "Multiply", "Divide", "Modulus", 
		"OBrace", "CBrace", "OBracket", "CBracket", "OParen", "CParen", "SColon", 
		"Assign", "Comma", "QMark", "Colon", "Bool", "Number", "BuildIdentifier", 
		"Identifier", "String_Alias", "Comment", "Space",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(WhisperLanguageParser._LITERAL_NAMES, WhisperLanguageParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return WhisperLanguageParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "WhisperLanguage.g4"; }

	// @Override
	public get ruleNames(): string[] { return WhisperLanguageParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return WhisperLanguageParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(WhisperLanguageParser._ATN, this);
	}
	// @RuleVersion(0)
	public parse(): ParseContext {
		let _localctx: ParseContext = new ParseContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, WhisperLanguageParser.RULE_parse);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 36;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 34;
				this.block();
				}
				break;

			case 2:
				{
				this.state = 35;
				this.statement();
				}
				break;
			}
			this.state = 38;
			this.match(WhisperLanguageParser.EOF);
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, WhisperLanguageParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << WhisperLanguageParser.Println) | (1 << WhisperLanguageParser.Print) | (1 << WhisperLanguageParser.Assert) | (1 << WhisperLanguageParser.Size) | (1 << WhisperLanguageParser.Def) | (1 << WhisperLanguageParser.If) | (1 << WhisperLanguageParser.For) | (1 << WhisperLanguageParser.While))) !== 0) || _la === WhisperLanguageParser.BuildIdentifier || _la === WhisperLanguageParser.Identifier) {
				{
				this.state = 42;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case WhisperLanguageParser.Println:
				case WhisperLanguageParser.Print:
				case WhisperLanguageParser.Assert:
				case WhisperLanguageParser.Size:
				case WhisperLanguageParser.If:
				case WhisperLanguageParser.For:
				case WhisperLanguageParser.While:
				case WhisperLanguageParser.BuildIdentifier:
				case WhisperLanguageParser.Identifier:
					{
					this.state = 40;
					this.statement();
					}
					break;
				case WhisperLanguageParser.Def:
					{
					this.state = 41;
					this.functionDecl();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 46;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 51;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WhisperLanguageParser.Return) {
				{
				this.state = 47;
				this.match(WhisperLanguageParser.Return);
				this.state = 48;
				this.expression(0);
				this.state = 49;
				this.match(WhisperLanguageParser.SColon);
				}
			}

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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, WhisperLanguageParser.RULE_statement);
		try {
			this.state = 62;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 53;
				this.assignment();
				this.state = 54;
				this.match(WhisperLanguageParser.SColon);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 56;
				this.functionCall();
				this.state = 57;
				this.match(WhisperLanguageParser.SColon);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 59;
				this.ifStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 60;
				this.forStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 61;
				this.whileStatement();
				}
				break;
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, WhisperLanguageParser.RULE_assignment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			this.match(WhisperLanguageParser.Identifier);
			this.state = 66;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WhisperLanguageParser.OBracket) {
				{
				this.state = 65;
				this.indexes();
				}
			}

			this.state = 68;
			this.match(WhisperLanguageParser.Assign);
			this.state = 69;
			this.expression(0);
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
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, WhisperLanguageParser.RULE_functionCall);
		let _la: number;
		try {
			this.state = 104;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WhisperLanguageParser.BuildIdentifier:
				_localctx = new BuildInIdentifierFunctionCallContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 71;
				this.match(WhisperLanguageParser.BuildIdentifier);
				this.state = 72;
				this.match(WhisperLanguageParser.OParen);
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << WhisperLanguageParser.Println) | (1 << WhisperLanguageParser.Print) | (1 << WhisperLanguageParser.Input) | (1 << WhisperLanguageParser.Assert) | (1 << WhisperLanguageParser.Size) | (1 << WhisperLanguageParser.Null))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (WhisperLanguageParser.Excl - 39)) | (1 << (WhisperLanguageParser.Subtract - 39)) | (1 << (WhisperLanguageParser.OBracket - 39)) | (1 << (WhisperLanguageParser.OParen - 39)) | (1 << (WhisperLanguageParser.Bool - 39)) | (1 << (WhisperLanguageParser.Number - 39)) | (1 << (WhisperLanguageParser.BuildIdentifier - 39)) | (1 << (WhisperLanguageParser.Identifier - 39)) | (1 << (WhisperLanguageParser.String_Alias - 39)))) !== 0)) {
					{
					this.state = 73;
					this.exprList();
					}
				}

				this.state = 76;
				this.match(WhisperLanguageParser.CParen);
				}
				break;
			case WhisperLanguageParser.Identifier:
				_localctx = new IdentifierFunctionCallContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 77;
				this.match(WhisperLanguageParser.Identifier);
				this.state = 78;
				this.match(WhisperLanguageParser.OParen);
				this.state = 80;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << WhisperLanguageParser.Println) | (1 << WhisperLanguageParser.Print) | (1 << WhisperLanguageParser.Input) | (1 << WhisperLanguageParser.Assert) | (1 << WhisperLanguageParser.Size) | (1 << WhisperLanguageParser.Null))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (WhisperLanguageParser.Excl - 39)) | (1 << (WhisperLanguageParser.Subtract - 39)) | (1 << (WhisperLanguageParser.OBracket - 39)) | (1 << (WhisperLanguageParser.OParen - 39)) | (1 << (WhisperLanguageParser.Bool - 39)) | (1 << (WhisperLanguageParser.Number - 39)) | (1 << (WhisperLanguageParser.BuildIdentifier - 39)) | (1 << (WhisperLanguageParser.Identifier - 39)) | (1 << (WhisperLanguageParser.String_Alias - 39)))) !== 0)) {
					{
					this.state = 79;
					this.exprList();
					}
				}

				this.state = 82;
				this.match(WhisperLanguageParser.CParen);
				}
				break;
			case WhisperLanguageParser.Println:
				_localctx = new PrintlnFunctionCallContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 83;
				this.match(WhisperLanguageParser.Println);
				this.state = 84;
				this.match(WhisperLanguageParser.OParen);
				this.state = 86;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << WhisperLanguageParser.Println) | (1 << WhisperLanguageParser.Print) | (1 << WhisperLanguageParser.Input) | (1 << WhisperLanguageParser.Assert) | (1 << WhisperLanguageParser.Size) | (1 << WhisperLanguageParser.Null))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (WhisperLanguageParser.Excl - 39)) | (1 << (WhisperLanguageParser.Subtract - 39)) | (1 << (WhisperLanguageParser.OBracket - 39)) | (1 << (WhisperLanguageParser.OParen - 39)) | (1 << (WhisperLanguageParser.Bool - 39)) | (1 << (WhisperLanguageParser.Number - 39)) | (1 << (WhisperLanguageParser.BuildIdentifier - 39)) | (1 << (WhisperLanguageParser.Identifier - 39)) | (1 << (WhisperLanguageParser.String_Alias - 39)))) !== 0)) {
					{
					this.state = 85;
					this.expression(0);
					}
				}

				this.state = 88;
				this.match(WhisperLanguageParser.CParen);
				}
				break;
			case WhisperLanguageParser.Print:
				_localctx = new PrintFunctionCallContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 89;
				this.match(WhisperLanguageParser.Print);
				this.state = 90;
				this.match(WhisperLanguageParser.OParen);
				this.state = 91;
				this.expression(0);
				this.state = 92;
				this.match(WhisperLanguageParser.CParen);
				}
				break;
			case WhisperLanguageParser.Assert:
				_localctx = new AssertFunctionCallContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 94;
				this.match(WhisperLanguageParser.Assert);
				this.state = 95;
				this.match(WhisperLanguageParser.OParen);
				this.state = 96;
				this.expression(0);
				this.state = 97;
				this.match(WhisperLanguageParser.CParen);
				}
				break;
			case WhisperLanguageParser.Size:
				_localctx = new SizeFunctionCallContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 99;
				this.match(WhisperLanguageParser.Size);
				this.state = 100;
				this.match(WhisperLanguageParser.OParen);
				this.state = 101;
				this.expression(0);
				this.state = 102;
				this.match(WhisperLanguageParser.CParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, WhisperLanguageParser.RULE_ifStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this.ifStat();
			this.state = 110;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 107;
					this.elseIfStat();
					}
					}
				}
				this.state = 112;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WhisperLanguageParser.Else) {
				{
				this.state = 113;
				this.elseStat();
				}
			}

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
	public ifStat(): IfStatContext {
		let _localctx: IfStatContext = new IfStatContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, WhisperLanguageParser.RULE_ifStat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 116;
			this.match(WhisperLanguageParser.If);
			this.state = 117;
			this.expression(0);
			this.state = 118;
			this.match(WhisperLanguageParser.OBrace);
			this.state = 119;
			this.block();
			this.state = 120;
			this.match(WhisperLanguageParser.CBrace);
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
	public elseIfStat(): ElseIfStatContext {
		let _localctx: ElseIfStatContext = new ElseIfStatContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, WhisperLanguageParser.RULE_elseIfStat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this.match(WhisperLanguageParser.Else);
			this.state = 123;
			this.match(WhisperLanguageParser.If);
			this.state = 124;
			this.expression(0);
			this.state = 125;
			this.match(WhisperLanguageParser.OBrace);
			this.state = 126;
			this.block();
			this.state = 127;
			this.match(WhisperLanguageParser.CBrace);
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
	public elseStat(): ElseStatContext {
		let _localctx: ElseStatContext = new ElseStatContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, WhisperLanguageParser.RULE_elseStat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this.match(WhisperLanguageParser.Else);
			this.state = 130;
			this.match(WhisperLanguageParser.OBrace);
			this.state = 131;
			this.block();
			this.state = 132;
			this.match(WhisperLanguageParser.CBrace);
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
	public functionDecl(): FunctionDeclContext {
		let _localctx: FunctionDeclContext = new FunctionDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, WhisperLanguageParser.RULE_functionDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.match(WhisperLanguageParser.Def);
			this.state = 135;
			this.match(WhisperLanguageParser.Identifier);
			this.state = 136;
			this.match(WhisperLanguageParser.OParen);
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WhisperLanguageParser.Identifier) {
				{
				this.state = 137;
				this.idList();
				}
			}

			this.state = 140;
			this.match(WhisperLanguageParser.CParen);
			this.state = 141;
			this.match(WhisperLanguageParser.OBrace);
			this.state = 142;
			this.block();
			this.state = 143;
			this.match(WhisperLanguageParser.CBrace);
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
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, WhisperLanguageParser.RULE_forStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.match(WhisperLanguageParser.For);
			this.state = 146;
			this.match(WhisperLanguageParser.Identifier);
			this.state = 147;
			this.match(WhisperLanguageParser.Assign);
			this.state = 148;
			this.expression(0);
			this.state = 149;
			this.match(WhisperLanguageParser.To);
			this.state = 150;
			this.expression(0);
			this.state = 151;
			this.match(WhisperLanguageParser.OBrace);
			this.state = 152;
			this.block();
			this.state = 153;
			this.match(WhisperLanguageParser.CBrace);
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
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, WhisperLanguageParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			this.match(WhisperLanguageParser.While);
			this.state = 156;
			this.expression(0);
			this.state = 157;
			this.match(WhisperLanguageParser.OBrace);
			this.state = 158;
			this.block();
			this.state = 159;
			this.match(WhisperLanguageParser.CBrace);
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
	public idList(): IdListContext {
		let _localctx: IdListContext = new IdListContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, WhisperLanguageParser.RULE_idList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this.match(WhisperLanguageParser.Identifier);
			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WhisperLanguageParser.Comma) {
				{
				{
				this.state = 162;
				this.match(WhisperLanguageParser.Comma);
				this.state = 163;
				this.match(WhisperLanguageParser.Identifier);
				}
				}
				this.state = 168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
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
	public exprList(): ExprListContext {
		let _localctx: ExprListContext = new ExprListContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, WhisperLanguageParser.RULE_exprList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this.expression(0);
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WhisperLanguageParser.Comma) {
				{
				{
				this.state = 170;
				this.match(WhisperLanguageParser.Comma);
				this.state = 171;
				this.expression(0);
				}
				}
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
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

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 28;
		this.enterRecursionRule(_localctx, 28, WhisperLanguageParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 178;
				this.match(WhisperLanguageParser.Subtract);
				this.state = 179;
				this.expression(20);
				}
				break;

			case 2:
				{
				_localctx = new NotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 180;
				this.match(WhisperLanguageParser.Excl);
				this.state = 181;
				this.expression(19);
				}
				break;

			case 3:
				{
				_localctx = new NumberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 182;
				this.match(WhisperLanguageParser.Number);
				}
				break;

			case 4:
				{
				_localctx = new BoolExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 183;
				this.match(WhisperLanguageParser.Bool);
				}
				break;

			case 5:
				{
				_localctx = new NullExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 184;
				this.match(WhisperLanguageParser.Null);
				}
				break;

			case 6:
				{
				_localctx = new FunctionCallExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 185;
				this.functionCall();
				this.state = 187;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 186;
					this.indexes();
					}
					break;
				}
				}
				break;

			case 7:
				{
				_localctx = new ListExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 189;
				this.list_Alias();
				this.state = 191;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 190;
					this.indexes();
					}
					break;
				}
				}
				break;

			case 8:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 193;
				this.match(WhisperLanguageParser.Identifier);
				this.state = 195;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 194;
					this.indexes();
					}
					break;
				}
				}
				break;

			case 9:
				{
				_localctx = new StringExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 197;
				this.match(WhisperLanguageParser.String_Alias);
				this.state = 199;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 198;
					this.indexes();
					}
					break;
				}
				}
				break;

			case 10:
				{
				_localctx = new ExpressionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 201;
				this.match(WhisperLanguageParser.OParen);
				this.state = 202;
				this.expression(0);
				this.state = 203;
				this.match(WhisperLanguageParser.CParen);
				this.state = 205;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 204;
					this.indexes();
					}
					break;
				}
				}
				break;

			case 11:
				{
				_localctx = new InputExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 207;
				this.match(WhisperLanguageParser.Input);
				this.state = 208;
				this.match(WhisperLanguageParser.OParen);
				this.state = 210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WhisperLanguageParser.String_Alias) {
					{
					this.state = 209;
					this.match(WhisperLanguageParser.String_Alias);
					}
				}

				this.state = 212;
				this.match(WhisperLanguageParser.CParen);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 247;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 245;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
					case 1:
						{
						_localctx = new PowerExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, WhisperLanguageParser.RULE_expression);
						this.state = 215;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 216;
						this.match(WhisperLanguageParser.T__0);
						this.state = 217;
						this.expression(18);
						}
						break;

					case 2:
						{
						_localctx = new MultExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, WhisperLanguageParser.RULE_expression);
						this.state = 218;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 219;
						(_localctx as MultExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (WhisperLanguageParser.Multiply - 44)) | (1 << (WhisperLanguageParser.Divide - 44)) | (1 << (WhisperLanguageParser.Modulus - 44)))) !== 0))) {
							(_localctx as MultExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 220;
						this.expression(18);
						}
						break;

					case 3:
						{
						_localctx = new AddExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, WhisperLanguageParser.RULE_expression);
						this.state = 221;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 222;
						(_localctx as AddExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === WhisperLanguageParser.Add || _la === WhisperLanguageParser.Subtract)) {
							(_localctx as AddExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 223;
						this.expression(17);
						}
						break;

					case 4:
						{
						_localctx = new CompExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, WhisperLanguageParser.RULE_expression);
						this.state = 224;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 225;
						(_localctx as CompExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (WhisperLanguageParser.GTEquals - 37)) | (1 << (WhisperLanguageParser.LTEquals - 37)) | (1 << (WhisperLanguageParser.GT - 37)) | (1 << (WhisperLanguageParser.LT - 37)))) !== 0))) {
							(_localctx as CompExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 226;
						this.expression(16);
						}
						break;

					case 5:
						{
						_localctx = new EqExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, WhisperLanguageParser.RULE_expression);
						this.state = 227;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 228;
						(_localctx as EqExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === WhisperLanguageParser.Equals || _la === WhisperLanguageParser.NEquals)) {
							(_localctx as EqExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 229;
						this.expression(15);
						}
						break;

					case 6:
						{
						_localctx = new AndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, WhisperLanguageParser.RULE_expression);
						this.state = 230;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 231;
						this.match(WhisperLanguageParser.And);
						this.state = 232;
						this.expression(14);
						}
						break;

					case 7:
						{
						_localctx = new OrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, WhisperLanguageParser.RULE_expression);
						this.state = 233;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 234;
						this.match(WhisperLanguageParser.Or);
						this.state = 235;
						this.expression(13);
						}
						break;

					case 8:
						{
						_localctx = new TernaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, WhisperLanguageParser.RULE_expression);
						this.state = 236;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 237;
						this.match(WhisperLanguageParser.QMark);
						this.state = 238;
						this.expression(0);
						this.state = 239;
						this.match(WhisperLanguageParser.Colon);
						this.state = 240;
						this.expression(12);
						}
						break;

					case 9:
						{
						_localctx = new InExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, WhisperLanguageParser.RULE_expression);
						this.state = 242;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 243;
						this.match(WhisperLanguageParser.In);
						this.state = 244;
						this.expression(11);
						}
						break;
					}
					}
				}
				this.state = 249;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			}
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list_Alias(): List_AliasContext {
		let _localctx: List_AliasContext = new List_AliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, WhisperLanguageParser.RULE_list_Alias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
			this.match(WhisperLanguageParser.OBracket);
			this.state = 252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << WhisperLanguageParser.Println) | (1 << WhisperLanguageParser.Print) | (1 << WhisperLanguageParser.Input) | (1 << WhisperLanguageParser.Assert) | (1 << WhisperLanguageParser.Size) | (1 << WhisperLanguageParser.Null))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (WhisperLanguageParser.Excl - 39)) | (1 << (WhisperLanguageParser.Subtract - 39)) | (1 << (WhisperLanguageParser.OBracket - 39)) | (1 << (WhisperLanguageParser.OParen - 39)) | (1 << (WhisperLanguageParser.Bool - 39)) | (1 << (WhisperLanguageParser.Number - 39)) | (1 << (WhisperLanguageParser.BuildIdentifier - 39)) | (1 << (WhisperLanguageParser.Identifier - 39)) | (1 << (WhisperLanguageParser.String_Alias - 39)))) !== 0)) {
				{
				this.state = 251;
				this.exprList();
				}
			}

			this.state = 254;
			this.match(WhisperLanguageParser.CBracket);
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
	public indexes(): IndexesContext {
		let _localctx: IndexesContext = new IndexesContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, WhisperLanguageParser.RULE_indexes);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 260;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 256;
					this.match(WhisperLanguageParser.OBracket);
					this.state = 257;
					this.expression(0);
					this.state = 258;
					this.match(WhisperLanguageParser.CBracket);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 262;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 14:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 18);

		case 1:
			return this.precpred(this._ctx, 17);

		case 2:
			return this.precpred(this._ctx, 16);

		case 3:
			return this.precpred(this._ctx, 15);

		case 4:
			return this.precpred(this._ctx, 14);

		case 5:
			return this.precpred(this._ctx, 13);

		case 6:
			return this.precpred(this._ctx, 12);

		case 7:
			return this.precpred(this._ctx, 11);

		case 8:
			return this.precpred(this._ctx, 10);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03B\u010B\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x03" +
		"\x02\x03\x02\x05\x02\'\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x07\x03-" +
		"\n\x03\f\x03\x0E\x030\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x036\n" +
		"\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x05\x04A\n\x04\x03\x05\x03\x05\x05\x05E\n\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x06\x05\x06M\n\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x05\x06S\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06Y\n\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06k\n\x06\x03" +
		"\x07\x03\x07\x07\x07o\n\x07\f\x07\x0E\x07r\v\x07\x03\x07\x05\x07u\n\x07" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x05\v\x8D" +
		"\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03" +
		"\x0E\x03\x0E\x07\x0E\xA7\n\x0E\f\x0E\x0E\x0E\xAA\v\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x07\x0F\xAF\n\x0F\f\x0F\x0E\x0F\xB2\v\x0F\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xBE" +
		"\n\x10\x03\x10\x03\x10\x05\x10\xC2\n\x10\x03\x10\x03\x10\x05\x10\xC6\n" +
		"\x10\x03\x10\x03\x10\x05\x10\xCA\n\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x05\x10\xD0\n\x10\x03\x10\x03\x10\x03\x10\x05\x10\xD5\n\x10\x03\x10\x05" +
		"\x10\xD8\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xF8\n\x10\f\x10\x0E\x10" +
		"\xFB\v\x10\x03\x11\x03\x11\x05\x11\xFF\n\x11\x03\x11\x03\x11\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x06\x12\u0107\n\x12\r\x12\x0E\x12\u0108\x03\x12\x02" +
		"\x02\x03\x1E\x13\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"\x02\x06\x03\x02.0\x03\x02,-\x04\x02\'(*+\x03\x02%&\x02\u012A\x02&\x03" +
		"\x02\x02\x02\x04.\x03\x02\x02\x02\x06@\x03\x02\x02\x02\bB\x03\x02\x02" +
		"\x02\nj\x03\x02\x02\x02\fl\x03\x02\x02\x02\x0Ev\x03\x02\x02\x02\x10|\x03" +
		"\x02\x02\x02\x12\x83\x03\x02\x02\x02\x14\x88\x03\x02\x02\x02\x16\x93\x03" +
		"\x02\x02\x02\x18\x9D\x03\x02\x02\x02\x1A\xA3\x03\x02\x02\x02\x1C\xAB\x03" +
		"\x02\x02\x02\x1E\xD7\x03\x02\x02\x02 \xFC\x03\x02\x02\x02\"\u0106\x03" +
		"\x02\x02\x02$\'\x05\x04\x03\x02%\'\x05\x06\x04\x02&$\x03\x02\x02\x02&" +
		"%\x03\x02\x02\x02\'(\x03\x02\x02\x02()\x07\x02\x02\x03)\x03\x03\x02\x02" +
		"\x02*-\x05\x06\x04\x02+-\x05\x14\v\x02,*\x03\x02\x02\x02,+\x03\x02\x02" +
		"\x02-0\x03\x02\x02\x02.,\x03\x02\x02\x02./\x03\x02\x02\x02/5\x03\x02\x02" +
		"\x020.\x03\x02\x02\x0212\x07\f\x02\x0223\x05\x1E\x10\x0234\x077\x02\x02" +
		"46\x03\x02\x02\x0251\x03\x02\x02\x0256\x03\x02\x02\x026\x05\x03\x02\x02" +
		"\x0278\x05\b\x05\x0289\x077\x02\x029A\x03\x02\x02\x02:;\x05\n\x06\x02" +
		";<\x077\x02\x02<A\x03\x02\x02\x02=A\x05\f\x07\x02>A\x05\x16\f\x02?A\x05" +
		"\x18\r\x02@7\x03\x02\x02\x02@:\x03\x02\x02\x02@=\x03\x02\x02\x02@>\x03" +
		"\x02\x02\x02@?\x03\x02\x02\x02A\x07\x03\x02\x02\x02BD\x07?\x02\x02CE\x05" +
		"\"\x12\x02DC\x03\x02\x02\x02DE\x03\x02\x02\x02EF\x03\x02\x02\x02FG\x07" +
		"8\x02\x02GH\x05\x1E\x10\x02H\t\x03\x02\x02\x02IJ\x07>\x02\x02JL\x075\x02" +
		"\x02KM\x05\x1C\x0F\x02LK\x03\x02\x02\x02LM\x03\x02\x02\x02MN\x03\x02\x02" +
		"\x02Nk\x076\x02\x02OP\x07?\x02\x02PR\x075\x02\x02QS\x05\x1C\x0F\x02RQ" +
		"\x03\x02\x02\x02RS\x03\x02\x02\x02ST\x03\x02\x02\x02Tk\x076\x02\x02UV" +
		"\x07\x04\x02\x02VX\x075\x02\x02WY\x05\x1E\x10\x02XW\x03\x02\x02\x02XY" +
		"\x03\x02\x02\x02YZ\x03\x02\x02\x02Zk\x076\x02\x02[\\\x07\x05\x02\x02\\" +
		"]\x075\x02\x02]^\x05\x1E\x10\x02^_\x076\x02\x02_k\x03\x02\x02\x02`a\x07" +
		"\x07\x02\x02ab\x075\x02\x02bc\x05\x1E\x10\x02cd\x076\x02\x02dk\x03\x02" +
		"\x02\x02ef\x07\b\x02\x02fg\x075\x02\x02gh\x05\x1E\x10\x02hi\x076\x02\x02" +
		"ik\x03\x02\x02\x02jI\x03\x02\x02\x02jO\x03\x02\x02\x02jU\x03\x02\x02\x02" +
		"j[\x03\x02\x02\x02j`\x03\x02\x02\x02je\x03\x02\x02\x02k\v\x03\x02\x02" +
		"\x02lp\x05\x0E\b\x02mo\x05\x10\t\x02nm\x03\x02\x02\x02or\x03\x02\x02\x02" +
		"pn\x03\x02\x02\x02pq\x03\x02\x02\x02qt\x03\x02\x02\x02rp\x03\x02\x02\x02" +
		"su\x05\x12\n\x02ts\x03\x02\x02\x02tu\x03\x02\x02\x02u\r\x03\x02\x02\x02" +
		"vw\x07\n\x02\x02wx\x05\x1E\x10\x02xy\x071\x02\x02yz\x05\x04\x03\x02z{" +
		"\x072\x02\x02{\x0F\x03\x02\x02\x02|}\x07\v\x02\x02}~\x07\n\x02\x02~\x7F" +
		"\x05\x1E\x10\x02\x7F\x80\x071\x02\x02\x80\x81\x05\x04\x03\x02\x81\x82" +
		"\x072\x02\x02\x82\x11\x03\x02\x02\x02\x83\x84\x07\v\x02\x02\x84\x85\x07" +
		"1\x02\x02\x85\x86\x05\x04\x03\x02\x86\x87\x072\x02\x02\x87\x13\x03\x02" +
		"\x02\x02\x88\x89\x07\t\x02\x02\x89\x8A\x07?\x02\x02\x8A\x8C\x075\x02\x02" +
		"\x8B\x8D\x05\x1A\x0E\x02\x8C\x8B\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02" +
		"\x8D\x8E\x03\x02\x02\x02\x8E\x8F\x076\x02\x02\x8F\x90\x071\x02\x02\x90" +
		"\x91\x05\x04\x03\x02\x91\x92\x072\x02\x02\x92\x15\x03\x02\x02\x02\x93" +
		"\x94\x07\r\x02\x02\x94\x95\x07?\x02\x02\x95\x96\x078\x02\x02\x96\x97\x05" +
		"\x1E\x10\x02\x97\x98\x07\x0F\x02\x02\x98\x99\x05\x1E\x10\x02\x99\x9A\x07" +
		"1\x02\x02\x9A\x9B\x05\x04\x03\x02\x9B\x9C\x072\x02\x02\x9C\x17\x03\x02" +
		"\x02\x02\x9D\x9E\x07\x0E\x02\x02\x9E\x9F\x05\x1E\x10\x02\x9F\xA0\x071" +
		"\x02\x02\xA0\xA1\x05\x04\x03\x02\xA1\xA2\x072\x02\x02\xA2\x19\x03\x02" +
		"\x02\x02\xA3\xA8\x07?\x02\x02\xA4\xA5\x079\x02\x02\xA5\xA7\x07?\x02\x02" +
		"\xA6\xA4\x03\x02\x02\x02\xA7\xAA\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02" +
		"\xA8\xA9\x03\x02\x02\x02\xA9\x1B\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02" +
		"\xAB\xB0\x05\x1E\x10\x02\xAC\xAD\x079\x02\x02\xAD\xAF\x05\x1E\x10\x02" +
		"\xAE\xAC\x03\x02\x02\x02\xAF\xB2\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02" +
		"\xB0\xB1\x03\x02\x02\x02\xB1\x1D\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02" +
		"\xB3\xB4\b\x10\x01\x02\xB4\xB5\x07-\x02\x02\xB5\xD8\x05\x1E\x10\x16\xB6" +
		"\xB7\x07)\x02\x02\xB7\xD8\x05\x1E\x10\x15\xB8\xD8\x07=\x02\x02\xB9\xD8" +
		"\x07<\x02\x02\xBA\xD8\x07\x13\x02\x02\xBB\xBD\x05\n\x06\x02\xBC\xBE\x05" +
		"\"\x12\x02\xBD\xBC\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xD8\x03" +
		"\x02\x02\x02\xBF\xC1\x05 \x11\x02\xC0\xC2\x05\"\x12\x02\xC1\xC0\x03\x02" +
		"\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xD8\x03\x02\x02\x02\xC3\xC5\x07?" +
		"\x02\x02\xC4\xC6\x05\"\x12\x02\xC5\xC4\x03\x02\x02\x02\xC5\xC6\x03\x02" +
		"\x02\x02\xC6\xD8\x03\x02\x02\x02\xC7\xC9\x07@\x02\x02\xC8\xCA\x05\"\x12" +
		"\x02\xC9\xC8\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xD8\x03\x02\x02" +
		"\x02\xCB\xCC\x075\x02\x02\xCC\xCD\x05\x1E\x10\x02\xCD\xCF\x076\x02\x02" +
		"\xCE\xD0\x05\"\x12\x02\xCF\xCE\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02" +
		"\xD0\xD8\x03\x02\x02\x02\xD1\xD2\x07\x06\x02\x02\xD2\xD4\x075\x02\x02" +
		"\xD3\xD5\x07@\x02\x02\xD4\xD3\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02" +
		"\xD5\xD6\x03\x02\x02\x02\xD6\xD8\x076\x02\x02\xD7\xB3\x03\x02\x02\x02" +
		"\xD7\xB6\x03\x02\x02\x02\xD7\xB8\x03\x02\x02\x02\xD7\xB9\x03\x02\x02\x02" +
		"\xD7\xBA\x03\x02\x02\x02\xD7\xBB\x03\x02\x02\x02\xD7\xBF\x03\x02\x02\x02" +
		"\xD7\xC3\x03\x02\x02\x02\xD7\xC7\x03\x02\x02\x02\xD7\xCB\x03\x02\x02\x02" +
		"\xD7\xD1\x03\x02\x02\x02\xD8\xF9\x03\x02\x02\x02\xD9\xDA\f\x14\x02\x02" +
		"\xDA\xDB\x07\x03\x02\x02\xDB\xF8\x05\x1E\x10\x14\xDC\xDD\f\x13\x02\x02" +
		"\xDD\xDE\t\x02\x02\x02\xDE\xF8\x05\x1E\x10\x14\xDF\xE0\f\x12\x02\x02\xE0" +
		"\xE1\t\x03\x02\x02\xE1\xF8\x05\x1E\x10\x13\xE2\xE3\f\x11\x02\x02\xE3\xE4" +
		"\t\x04\x02\x02\xE4\xF8\x05\x1E\x10\x12\xE5\xE6\f\x10\x02\x02\xE6\xE7\t" +
		"\x05\x02\x02\xE7\xF8\x05\x1E\x10\x11\xE8\xE9\f\x0F\x02\x02\xE9\xEA\x07" +
		"$\x02\x02\xEA\xF8\x05\x1E\x10\x10\xEB\xEC\f\x0E\x02\x02\xEC\xED\x07#\x02" +
		"\x02\xED\xF8\x05\x1E\x10\x0F\xEE\xEF\f\r\x02\x02\xEF\xF0\x07:\x02\x02" +
		"\xF0\xF1\x05\x1E\x10\x02\xF1\xF2\x07;\x02\x02\xF2\xF3\x05\x1E\x10\x0E" +
		"\xF3\xF8\x03\x02\x02\x02\xF4\xF5\f\f\x02\x02\xF5\xF6\x07\x12\x02\x02\xF6" +
		"\xF8\x05\x1E\x10\r\xF7\xD9\x03\x02\x02\x02\xF7\xDC\x03\x02\x02\x02\xF7" +
		"\xDF\x03\x02\x02\x02\xF7\xE2\x03\x02\x02\x02\xF7\xE5\x03\x02\x02\x02\xF7" +
		"\xE8\x03\x02\x02\x02\xF7\xEB\x03\x02\x02\x02\xF7\xEE\x03\x02\x02\x02\xF7" +
		"\xF4\x03\x02\x02\x02\xF8\xFB\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xF9" +
		"\xFA\x03\x02\x02\x02\xFA\x1F\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFC" +
		"\xFE\x073\x02\x02\xFD\xFF\x05\x1C\x0F\x02\xFE\xFD\x03\x02\x02\x02\xFE" +
		"\xFF\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0101\x074\x02\x02" +
		"\u0101!\x03\x02\x02\x02\u0102\u0103\x073\x02\x02\u0103\u0104\x05\x1E\x10" +
		"\x02\u0104\u0105\x074\x02\x02\u0105\u0107\x03\x02\x02\x02\u0106\u0102" +
		"\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\u0106\x03\x02\x02\x02" +
		"\u0108\u0109\x03\x02\x02\x02\u0109#\x03\x02\x02\x02\x1C&,.5@DLRXjpt\x8C" +
		"\xA8\xB0\xBD\xC1\xC5\xC9\xCF\xD4\xD7\xF7\xF9\xFE\u0108";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!WhisperLanguageParser.__ATN) {
			WhisperLanguageParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(WhisperLanguageParser._serializedATN));
		}

		return WhisperLanguageParser.__ATN;
	}

}

export class ParseContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(WhisperLanguageParser.EOF, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhisperLanguageParser.RULE_parse; }
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterParse) {
			listener.enterParse(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitParse) {
			listener.exitParse(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public functionDecl(): FunctionDeclContext[];
	public functionDecl(i: number): FunctionDeclContext;
	public functionDecl(i?: number): FunctionDeclContext | FunctionDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionDeclContext);
		} else {
			return this.getRuleContext(i, FunctionDeclContext);
		}
	}
	public Return(): TerminalNode | undefined { return this.tryGetToken(WhisperLanguageParser.Return, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public SColon(): TerminalNode | undefined { return this.tryGetToken(WhisperLanguageParser.SColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhisperLanguageParser.RULE_block; }
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public SColon(): TerminalNode | undefined { return this.tryGetToken(WhisperLanguageParser.SColon, 0); }
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhisperLanguageParser.RULE_statement; }
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(WhisperLanguageParser.Identifier, 0); }
	public Assign(): TerminalNode { return this.getToken(WhisperLanguageParser.Assign, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public indexes(): IndexesContext | undefined {
		return this.tryGetRuleContext(0, IndexesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhisperLanguageParser.RULE_assignment; }
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhisperLanguageParser.RULE_functionCall; }
	public copyFrom(ctx: FunctionCallContext): void {
		super.copyFrom(ctx);
	}
}
export class BuildInIdentifierFunctionCallContext extends FunctionCallContext {
	public BuildIdentifier(): TerminalNode { return this.getToken(WhisperLanguageParser.BuildIdentifier, 0); }
	public OParen(): TerminalNode { return this.getToken(WhisperLanguageParser.OParen, 0); }
	public CParen(): TerminalNode { return this.getToken(WhisperLanguageParser.CParen, 0); }
	public exprList(): ExprListContext | undefined {
		return this.tryGetRuleContext(0, ExprListContext);
	}
	constructor(ctx: FunctionCallContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterBuildInIdentifierFunctionCall) {
			listener.enterBuildInIdentifierFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitBuildInIdentifierFunctionCall) {
			listener.exitBuildInIdentifierFunctionCall(this);
		}
	}
}
export class IdentifierFunctionCallContext extends FunctionCallContext {
	public Identifier(): TerminalNode { return this.getToken(WhisperLanguageParser.Identifier, 0); }
	public OParen(): TerminalNode { return this.getToken(WhisperLanguageParser.OParen, 0); }
	public CParen(): TerminalNode { return this.getToken(WhisperLanguageParser.CParen, 0); }
	public exprList(): ExprListContext | undefined {
		return this.tryGetRuleContext(0, ExprListContext);
	}
	constructor(ctx: FunctionCallContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterIdentifierFunctionCall) {
			listener.enterIdentifierFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitIdentifierFunctionCall) {
			listener.exitIdentifierFunctionCall(this);
		}
	}
}
export class PrintlnFunctionCallContext extends FunctionCallContext {
	public Println(): TerminalNode { return this.getToken(WhisperLanguageParser.Println, 0); }
	public OParen(): TerminalNode { return this.getToken(WhisperLanguageParser.OParen, 0); }
	public CParen(): TerminalNode { return this.getToken(WhisperLanguageParser.CParen, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: FunctionCallContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterPrintlnFunctionCall) {
			listener.enterPrintlnFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitPrintlnFunctionCall) {
			listener.exitPrintlnFunctionCall(this);
		}
	}
}
export class PrintFunctionCallContext extends FunctionCallContext {
	public Print(): TerminalNode { return this.getToken(WhisperLanguageParser.Print, 0); }
	public OParen(): TerminalNode { return this.getToken(WhisperLanguageParser.OParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CParen(): TerminalNode { return this.getToken(WhisperLanguageParser.CParen, 0); }
	constructor(ctx: FunctionCallContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterPrintFunctionCall) {
			listener.enterPrintFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitPrintFunctionCall) {
			listener.exitPrintFunctionCall(this);
		}
	}
}
export class AssertFunctionCallContext extends FunctionCallContext {
	public Assert(): TerminalNode { return this.getToken(WhisperLanguageParser.Assert, 0); }
	public OParen(): TerminalNode { return this.getToken(WhisperLanguageParser.OParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CParen(): TerminalNode { return this.getToken(WhisperLanguageParser.CParen, 0); }
	constructor(ctx: FunctionCallContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterAssertFunctionCall) {
			listener.enterAssertFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitAssertFunctionCall) {
			listener.exitAssertFunctionCall(this);
		}
	}
}
export class SizeFunctionCallContext extends FunctionCallContext {
	public Size(): TerminalNode { return this.getToken(WhisperLanguageParser.Size, 0); }
	public OParen(): TerminalNode { return this.getToken(WhisperLanguageParser.OParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CParen(): TerminalNode { return this.getToken(WhisperLanguageParser.CParen, 0); }
	constructor(ctx: FunctionCallContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterSizeFunctionCall) {
			listener.enterSizeFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitSizeFunctionCall) {
			listener.exitSizeFunctionCall(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public ifStat(): IfStatContext {
		return this.getRuleContext(0, IfStatContext);
	}
	public elseIfStat(): ElseIfStatContext[];
	public elseIfStat(i: number): ElseIfStatContext;
	public elseIfStat(i?: number): ElseIfStatContext | ElseIfStatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElseIfStatContext);
		} else {
			return this.getRuleContext(i, ElseIfStatContext);
		}
	}
	public elseStat(): ElseStatContext | undefined {
		return this.tryGetRuleContext(0, ElseStatContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhisperLanguageParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
}


export class IfStatContext extends ParserRuleContext {
	public If(): TerminalNode { return this.getToken(WhisperLanguageParser.If, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public OBrace(): TerminalNode { return this.getToken(WhisperLanguageParser.OBrace, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public CBrace(): TerminalNode { return this.getToken(WhisperLanguageParser.CBrace, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhisperLanguageParser.RULE_ifStat; }
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterIfStat) {
			listener.enterIfStat(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitIfStat) {
			listener.exitIfStat(this);
		}
	}
}


export class ElseIfStatContext extends ParserRuleContext {
	public Else(): TerminalNode { return this.getToken(WhisperLanguageParser.Else, 0); }
	public If(): TerminalNode { return this.getToken(WhisperLanguageParser.If, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public OBrace(): TerminalNode { return this.getToken(WhisperLanguageParser.OBrace, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public CBrace(): TerminalNode { return this.getToken(WhisperLanguageParser.CBrace, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhisperLanguageParser.RULE_elseIfStat; }
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterElseIfStat) {
			listener.enterElseIfStat(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitElseIfStat) {
			listener.exitElseIfStat(this);
		}
	}
}


export class ElseStatContext extends ParserRuleContext {
	public Else(): TerminalNode { return this.getToken(WhisperLanguageParser.Else, 0); }
	public OBrace(): TerminalNode { return this.getToken(WhisperLanguageParser.OBrace, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public CBrace(): TerminalNode { return this.getToken(WhisperLanguageParser.CBrace, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhisperLanguageParser.RULE_elseStat; }
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterElseStat) {
			listener.enterElseStat(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitElseStat) {
			listener.exitElseStat(this);
		}
	}
}


export class FunctionDeclContext extends ParserRuleContext {
	public Def(): TerminalNode { return this.getToken(WhisperLanguageParser.Def, 0); }
	public Identifier(): TerminalNode { return this.getToken(WhisperLanguageParser.Identifier, 0); }
	public OParen(): TerminalNode { return this.getToken(WhisperLanguageParser.OParen, 0); }
	public CParen(): TerminalNode { return this.getToken(WhisperLanguageParser.CParen, 0); }
	public OBrace(): TerminalNode { return this.getToken(WhisperLanguageParser.OBrace, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public CBrace(): TerminalNode { return this.getToken(WhisperLanguageParser.CBrace, 0); }
	public idList(): IdListContext | undefined {
		return this.tryGetRuleContext(0, IdListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhisperLanguageParser.RULE_functionDecl; }
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterFunctionDecl) {
			listener.enterFunctionDecl(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitFunctionDecl) {
			listener.exitFunctionDecl(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public For(): TerminalNode { return this.getToken(WhisperLanguageParser.For, 0); }
	public Identifier(): TerminalNode { return this.getToken(WhisperLanguageParser.Identifier, 0); }
	public Assign(): TerminalNode { return this.getToken(WhisperLanguageParser.Assign, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public To(): TerminalNode { return this.getToken(WhisperLanguageParser.To, 0); }
	public OBrace(): TerminalNode { return this.getToken(WhisperLanguageParser.OBrace, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public CBrace(): TerminalNode { return this.getToken(WhisperLanguageParser.CBrace, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhisperLanguageParser.RULE_forStatement; }
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public While(): TerminalNode { return this.getToken(WhisperLanguageParser.While, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public OBrace(): TerminalNode { return this.getToken(WhisperLanguageParser.OBrace, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public CBrace(): TerminalNode { return this.getToken(WhisperLanguageParser.CBrace, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhisperLanguageParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
}


export class IdListContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WhisperLanguageParser.Identifier);
		} else {
			return this.getToken(WhisperLanguageParser.Identifier, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WhisperLanguageParser.Comma);
		} else {
			return this.getToken(WhisperLanguageParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhisperLanguageParser.RULE_idList; }
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterIdList) {
			listener.enterIdList(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitIdList) {
			listener.exitIdList(this);
		}
	}
}


export class ExprListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WhisperLanguageParser.Comma);
		} else {
			return this.getToken(WhisperLanguageParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhisperLanguageParser.RULE_exprList; }
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterExprList) {
			listener.enterExprList(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitExprList) {
			listener.exitExprList(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhisperLanguageParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class UnaryMinusExpressionContext extends ExpressionContext {
	public Subtract(): TerminalNode { return this.getToken(WhisperLanguageParser.Subtract, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterUnaryMinusExpression) {
			listener.enterUnaryMinusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitUnaryMinusExpression) {
			listener.exitUnaryMinusExpression(this);
		}
	}
}
export class NotExpressionContext extends ExpressionContext {
	public Excl(): TerminalNode { return this.getToken(WhisperLanguageParser.Excl, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterNotExpression) {
			listener.enterNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitNotExpression) {
			listener.exitNotExpression(this);
		}
	}
}
export class PowerExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterPowerExpression) {
			listener.enterPowerExpression(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitPowerExpression) {
			listener.exitPowerExpression(this);
		}
	}
}
export class MultExpressionContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(WhisperLanguageParser.Multiply, 0); }
	public Divide(): TerminalNode | undefined { return this.tryGetToken(WhisperLanguageParser.Divide, 0); }
	public Modulus(): TerminalNode | undefined { return this.tryGetToken(WhisperLanguageParser.Modulus, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterMultExpression) {
			listener.enterMultExpression(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitMultExpression) {
			listener.exitMultExpression(this);
		}
	}
}
export class AddExpressionContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Add(): TerminalNode | undefined { return this.tryGetToken(WhisperLanguageParser.Add, 0); }
	public Subtract(): TerminalNode | undefined { return this.tryGetToken(WhisperLanguageParser.Subtract, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterAddExpression) {
			listener.enterAddExpression(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitAddExpression) {
			listener.exitAddExpression(this);
		}
	}
}
export class CompExpressionContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public GTEquals(): TerminalNode | undefined { return this.tryGetToken(WhisperLanguageParser.GTEquals, 0); }
	public LTEquals(): TerminalNode | undefined { return this.tryGetToken(WhisperLanguageParser.LTEquals, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(WhisperLanguageParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(WhisperLanguageParser.LT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterCompExpression) {
			listener.enterCompExpression(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitCompExpression) {
			listener.exitCompExpression(this);
		}
	}
}
export class EqExpressionContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Equals(): TerminalNode | undefined { return this.tryGetToken(WhisperLanguageParser.Equals, 0); }
	public NEquals(): TerminalNode | undefined { return this.tryGetToken(WhisperLanguageParser.NEquals, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterEqExpression) {
			listener.enterEqExpression(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitEqExpression) {
			listener.exitEqExpression(this);
		}
	}
}
export class AndExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public And(): TerminalNode { return this.getToken(WhisperLanguageParser.And, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterAndExpression) {
			listener.enterAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitAndExpression) {
			listener.exitAndExpression(this);
		}
	}
}
export class OrExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Or(): TerminalNode { return this.getToken(WhisperLanguageParser.Or, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterOrExpression) {
			listener.enterOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitOrExpression) {
			listener.exitOrExpression(this);
		}
	}
}
export class TernaryExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public QMark(): TerminalNode { return this.getToken(WhisperLanguageParser.QMark, 0); }
	public Colon(): TerminalNode { return this.getToken(WhisperLanguageParser.Colon, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterTernaryExpression) {
			listener.enterTernaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitTernaryExpression) {
			listener.exitTernaryExpression(this);
		}
	}
}
export class InExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public In(): TerminalNode { return this.getToken(WhisperLanguageParser.In, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterInExpression) {
			listener.enterInExpression(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitInExpression) {
			listener.exitInExpression(this);
		}
	}
}
export class NumberExpressionContext extends ExpressionContext {
	public Number(): TerminalNode { return this.getToken(WhisperLanguageParser.Number, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterNumberExpression) {
			listener.enterNumberExpression(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitNumberExpression) {
			listener.exitNumberExpression(this);
		}
	}
}
export class BoolExpressionContext extends ExpressionContext {
	public Bool(): TerminalNode { return this.getToken(WhisperLanguageParser.Bool, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterBoolExpression) {
			listener.enterBoolExpression(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitBoolExpression) {
			listener.exitBoolExpression(this);
		}
	}
}
export class NullExpressionContext extends ExpressionContext {
	public Null(): TerminalNode { return this.getToken(WhisperLanguageParser.Null, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterNullExpression) {
			listener.enterNullExpression(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitNullExpression) {
			listener.exitNullExpression(this);
		}
	}
}
export class FunctionCallExpressionContext extends ExpressionContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	public indexes(): IndexesContext | undefined {
		return this.tryGetRuleContext(0, IndexesContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterFunctionCallExpression) {
			listener.enterFunctionCallExpression(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitFunctionCallExpression) {
			listener.exitFunctionCallExpression(this);
		}
	}
}
export class ListExpressionContext extends ExpressionContext {
	public list_Alias(): List_AliasContext {
		return this.getRuleContext(0, List_AliasContext);
	}
	public indexes(): IndexesContext | undefined {
		return this.tryGetRuleContext(0, IndexesContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterListExpression) {
			listener.enterListExpression(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitListExpression) {
			listener.exitListExpression(this);
		}
	}
}
export class IdentifierExpressionContext extends ExpressionContext {
	public Identifier(): TerminalNode { return this.getToken(WhisperLanguageParser.Identifier, 0); }
	public indexes(): IndexesContext | undefined {
		return this.tryGetRuleContext(0, IndexesContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterIdentifierExpression) {
			listener.enterIdentifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitIdentifierExpression) {
			listener.exitIdentifierExpression(this);
		}
	}
}
export class StringExpressionContext extends ExpressionContext {
	public String_Alias(): TerminalNode { return this.getToken(WhisperLanguageParser.String_Alias, 0); }
	public indexes(): IndexesContext | undefined {
		return this.tryGetRuleContext(0, IndexesContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterStringExpression) {
			listener.enterStringExpression(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitStringExpression) {
			listener.exitStringExpression(this);
		}
	}
}
export class ExpressionExpressionContext extends ExpressionContext {
	public OParen(): TerminalNode { return this.getToken(WhisperLanguageParser.OParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CParen(): TerminalNode { return this.getToken(WhisperLanguageParser.CParen, 0); }
	public indexes(): IndexesContext | undefined {
		return this.tryGetRuleContext(0, IndexesContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterExpressionExpression) {
			listener.enterExpressionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitExpressionExpression) {
			listener.exitExpressionExpression(this);
		}
	}
}
export class InputExpressionContext extends ExpressionContext {
	public Input(): TerminalNode { return this.getToken(WhisperLanguageParser.Input, 0); }
	public OParen(): TerminalNode { return this.getToken(WhisperLanguageParser.OParen, 0); }
	public CParen(): TerminalNode { return this.getToken(WhisperLanguageParser.CParen, 0); }
	public String_Alias(): TerminalNode | undefined { return this.tryGetToken(WhisperLanguageParser.String_Alias, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterInputExpression) {
			listener.enterInputExpression(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitInputExpression) {
			listener.exitInputExpression(this);
		}
	}
}


export class List_AliasContext extends ParserRuleContext {
	public OBracket(): TerminalNode { return this.getToken(WhisperLanguageParser.OBracket, 0); }
	public CBracket(): TerminalNode { return this.getToken(WhisperLanguageParser.CBracket, 0); }
	public exprList(): ExprListContext | undefined {
		return this.tryGetRuleContext(0, ExprListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhisperLanguageParser.RULE_list_Alias; }
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterList_Alias) {
			listener.enterList_Alias(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitList_Alias) {
			listener.exitList_Alias(this);
		}
	}
}


export class IndexesContext extends ParserRuleContext {
	public OBracket(): TerminalNode[];
	public OBracket(i: number): TerminalNode;
	public OBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WhisperLanguageParser.OBracket);
		} else {
			return this.getToken(WhisperLanguageParser.OBracket, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public CBracket(): TerminalNode[];
	public CBracket(i: number): TerminalNode;
	public CBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WhisperLanguageParser.CBracket);
		} else {
			return this.getToken(WhisperLanguageParser.CBracket, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhisperLanguageParser.RULE_indexes; }
	// @Override
	public enterRule(listener: WhisperLanguageListener): void {
		if (listener.enterIndexes) {
			listener.enterIndexes(this);
		}
	}
	// @Override
	public exitRule(listener: WhisperLanguageListener): void {
		if (listener.exitIndexes) {
			listener.exitIndexes(this);
		}
	}
}


