// Generated from ./grammar/WhisperLanguage.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class WhisperLanguageLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "Println", "Print", "Input", "Assert", "Size", "Def", "If", "Else", 
		"Return", "For", "While", "To", "Do", "End", "In", "Null", "LABEL_Alias", 
		"GOTO_Alias", "JUMP_Alias", "IMPORT_Alias", "INCLUDE_Alias", "Modulus_Alias", 
		"Class_Alias", "INTERFACE_Alias", "EXTEND_Alias", "BitwiseAnd", "BitwiseOr", 
		"BitwiseNot", "BitwiseNegationOperator", "LeftShiftOperator", "RightShiftOperator", 
		"Or", "And", "Equals", "NEquals", "GTEquals", "LTEquals", "Excl", "GT", 
		"LT", "Add", "Subtract", "Multiply", "Divide", "Modulus", "OBrace", "CBrace", 
		"OBracket", "CBracket", "OParen", "CParen", "SColon", "Assign", "Comma", 
		"QMark", "Colon", "Bool", "Number", "BuildIdentifier", "Identifier", "String_Alias", 
		"Comment", "Space", "Int", "Digit",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(WhisperLanguageLexer._LITERAL_NAMES, WhisperLanguageLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return WhisperLanguageLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(WhisperLanguageLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "WhisperLanguage.g4"; }

	// @Override
	public get ruleNames(): string[] { return WhisperLanguageLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return WhisperLanguageLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return WhisperLanguageLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return WhisperLanguageLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02B\u01BF\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x03\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 " +
		"\x03 \x03 \x03!\x03!\x03!\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03$\x03$\x03" +
		"$\x03%\x03%\x03%\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03(\x03(\x03)\x03)" +
		"\x03*\x03*\x03+\x03+\x03,\x03,\x03-\x03-\x03.\x03.\x03/\x03/\x030\x03" +
		"0\x031\x031\x032\x032\x033\x033\x034\x034\x035\x035\x036\x036\x037\x03" +
		"7\x038\x038\x039\x039\x03:\x03:\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03" +
		";\x03;\x05;\u0168\n;\x03<\x03<\x03<\x07<\u016D\n<\f<\x0E<\u0170\v<\x05" +
		"<\u0172\n<\x03=\x03=\x07=\u0176\n=\f=\x0E=\u0179\v=\x03>\x03>\x07>\u017D" +
		"\n>\f>\x0E>\u0180\v>\x03?\x03?\x03?\x03?\x07?\u0186\n?\f?\x0E?\u0189\v" +
		"?\x03?\x03?\x03?\x03?\x03?\x07?\u0190\n?\f?\x0E?\u0193\v?\x03?\x05?\u0196" +
		"\n?\x03@\x03@\x03@\x03@\x07@\u019C\n@\f@\x0E@\u019F\v@\x03@\x03@\x03@" +
		"\x03@\x07@\u01A5\n@\f@\x0E@\u01A8\v@\x03@\x03@\x05@\u01AC\n@\x03@\x03" +
		"@\x03A\x03A\x03A\x03A\x03B\x03B\x07B\u01B6\nB\fB\x0EB\u01B9\vB\x03B\x05" +
		"B\u01BC\nB\x03C\x03C\x03\u01A6\x02\x02D\x03\x02\x03\x05\x02\x04\x07\x02" +
		"\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02" +
		"\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12" +
		"#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02" +
		"\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C" +
		"\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02" +
		".[\x02/]\x020_\x021a\x022c\x023e\x024g\x025i\x026k\x027m\x028o\x029q\x02" +
		":s\x02;u\x02<w\x02=y\x02>{\x02?}\x02@\x7F\x02A\x81\x02B\x83\x02\x02\x85" +
		"\x02\x02\x03\x02\r\x03\x02BB\x06\x022;C\\aac|\x05\x02C\\aac|\x03\x02$" +
		"$\x06\x02\f\f\x0F\x0F$$^^\x04\x02\f\f\x0F\x0F\x03\x02))\x06\x02\f\f\x0F" +
		"\x0F))^^\x05\x02\v\f\x0E\x0F\"\"\x03\x023;\x03\x022;\x02\u01CB\x02\x03" +
		"\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t" +
		"\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03" +
		"\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03" +
		"\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03" +
		"\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03" +
		"\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02" +
		"\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02" +
		"/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02" +
		"\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02" +
		"\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03" +
		"\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02" +
		"\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02" +
		"Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02" +
		"\x02\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02" +
		"\x02_\x03\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03" +
		"\x02\x02\x02\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02" +
		"\x02\x02m\x03\x02\x02\x02\x02o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02" +
		"s\x03\x02\x02\x02\x02u\x03\x02\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02" +
		"\x02\x02\x02{\x03\x02\x02\x02\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02" +
		"\x02\x02\x81\x03\x02\x02\x02\x03\x87\x03\x02\x02\x02\x05\x8A\x03\x02\x02" +
		"\x02\x07\x92\x03\x02\x02\x02\t\x98\x03\x02\x02\x02\v\x9E\x03\x02\x02\x02" +
		"\r\xA5\x03\x02\x02\x02\x0F\xAA\x03\x02\x02\x02\x11\xAF\x03\x02\x02\x02" +
		"\x13\xB2\x03\x02\x02\x02\x15\xB7\x03\x02\x02\x02\x17\xBE\x03\x02\x02\x02" +
		"\x19\xC2\x03\x02\x02\x02\x1B\xC8\x03\x02\x02\x02\x1D\xCB\x03\x02\x02\x02" +
		"\x1F\xCE\x03\x02\x02\x02!\xD2\x03\x02\x02\x02#\xD5\x03\x02\x02\x02%\xDA" +
		"\x03\x02\x02\x02\'\xE0\x03\x02\x02\x02)\xE5\x03\x02\x02\x02+\xEA\x03\x02" +
		"\x02\x02-\xF1\x03\x02\x02\x02/\xF9\x03\x02\x02\x021\u0101\x03\x02\x02" +
		"\x023\u0107\x03\x02\x02\x025\u0111\x03\x02\x02\x027\u0118\x03\x02\x02" +
		"\x029\u011A\x03\x02\x02\x02;\u011C\x03\x02\x02\x02=\u011E\x03\x02\x02" +
		"\x02?\u0120\x03\x02\x02\x02A\u0123\x03\x02\x02\x02C\u0126\x03\x02\x02" +
		"\x02E\u0129\x03\x02\x02\x02G\u012C\x03\x02\x02\x02I\u012F\x03\x02\x02" +
		"\x02K\u0132\x03\x02\x02\x02M\u0135\x03\x02\x02\x02O\u0138\x03\x02\x02" +
		"\x02Q\u013A\x03\x02\x02\x02S\u013C\x03\x02\x02\x02U\u013E\x03\x02\x02" +
		"\x02W\u0140\x03\x02\x02\x02Y\u0142\x03\x02\x02\x02[\u0144\x03\x02\x02" +
		"\x02]\u0146\x03\x02\x02\x02_\u0148\x03\x02\x02\x02a\u014A\x03\x02\x02" +
		"\x02c\u014C\x03\x02\x02\x02e\u014E\x03\x02\x02\x02g\u0150\x03\x02\x02" +
		"\x02i\u0152\x03\x02\x02\x02k\u0154\x03\x02\x02\x02m\u0156\x03\x02\x02" +
		"\x02o\u0158\x03\x02\x02\x02q\u015A\x03\x02\x02\x02s\u015C\x03\x02\x02" +
		"\x02u\u0167\x03\x02\x02\x02w\u0169\x03\x02\x02\x02y\u0173\x03\x02\x02" +
		"\x02{\u017A\x03\x02\x02\x02}\u0195\x03\x02\x02\x02\x7F\u01AB\x03\x02\x02" +
		"\x02\x81\u01AF\x03\x02\x02\x02\x83\u01BB\x03\x02\x02\x02\x85\u01BD\x03" +
		"\x02\x02\x02\x87\x88\x07,\x02\x02\x88\x89\x07,\x02\x02\x89\x04\x03\x02" +
		"\x02\x02\x8A\x8B\x07r\x02\x02\x8B\x8C\x07t\x02\x02\x8C\x8D\x07k\x02\x02" +
		"\x8D\x8E\x07p\x02\x02\x8E\x8F\x07v\x02\x02\x8F\x90\x07n\x02\x02\x90\x91" +
		"\x07p\x02\x02\x91\x06\x03\x02\x02\x02\x92\x93\x07r\x02\x02\x93\x94\x07" +
		"t\x02\x02\x94\x95\x07k\x02\x02\x95\x96\x07p\x02\x02\x96\x97\x07v\x02\x02" +
		"\x97\b\x03\x02\x02\x02\x98\x99\x07k\x02\x02\x99\x9A\x07p\x02\x02\x9A\x9B" +
		"\x07r\x02\x02\x9B\x9C\x07w\x02\x02\x9C\x9D\x07v\x02\x02\x9D\n\x03\x02" +
		"\x02\x02\x9E\x9F\x07c\x02\x02\x9F\xA0\x07u\x02\x02\xA0\xA1\x07u\x02\x02" +
		"\xA1\xA2\x07g\x02\x02\xA2\xA3\x07t\x02\x02\xA3\xA4\x07v\x02\x02\xA4\f" +
		"\x03\x02\x02\x02\xA5\xA6\x07u\x02\x02\xA6\xA7\x07k\x02\x02\xA7\xA8\x07" +
		"|\x02\x02\xA8\xA9\x07g\x02\x02\xA9\x0E\x03\x02\x02\x02\xAA\xAB\x07h\x02" +
		"\x02\xAB\xAC\x07w\x02\x02\xAC\xAD\x07p\x02\x02\xAD\xAE\x07e\x02\x02\xAE" +
		"\x10\x03\x02\x02\x02\xAF\xB0\x07k\x02\x02\xB0\xB1\x07h\x02\x02\xB1\x12" +
		"\x03\x02\x02\x02\xB2\xB3\x07g\x02\x02\xB3\xB4\x07n\x02\x02\xB4\xB5\x07" +
		"u\x02\x02\xB5\xB6\x07g\x02\x02\xB6\x14\x03\x02\x02\x02\xB7\xB8\x07t\x02" +
		"\x02\xB8\xB9\x07g\x02\x02\xB9\xBA\x07v\x02\x02\xBA\xBB\x07w\x02\x02\xBB" +
		"\xBC\x07t\x02\x02\xBC\xBD\x07p\x02\x02\xBD\x16\x03\x02\x02\x02\xBE\xBF" +
		"\x07h\x02\x02\xBF\xC0\x07q\x02\x02\xC0\xC1\x07t\x02\x02\xC1\x18\x03\x02" +
		"\x02\x02\xC2\xC3\x07y\x02\x02\xC3\xC4\x07j\x02\x02\xC4\xC5\x07k\x02\x02" +
		"\xC5\xC6\x07n\x02\x02\xC6\xC7\x07g\x02\x02\xC7\x1A\x03\x02\x02\x02\xC8" +
		"\xC9\x07v\x02\x02\xC9\xCA\x07q\x02\x02\xCA\x1C\x03\x02\x02\x02\xCB\xCC" +
		"\x07f\x02\x02\xCC\xCD\x07q\x02\x02\xCD\x1E\x03\x02\x02\x02\xCE\xCF\x07" +
		"g\x02\x02\xCF\xD0\x07p\x02\x02\xD0\xD1\x07f\x02\x02\xD1 \x03\x02\x02\x02" +
		"\xD2\xD3\x07k\x02\x02\xD3\xD4\x07p\x02\x02\xD4\"\x03\x02\x02\x02\xD5\xD6" +
		"\x07p\x02\x02\xD6\xD7\x07w\x02\x02\xD7\xD8\x07n\x02\x02\xD8\xD9\x07n\x02" +
		"\x02\xD9$\x03\x02\x02\x02\xDA\xDB\x07n\x02\x02\xDB\xDC\x07c\x02\x02\xDC" +
		"\xDD\x07d\x02\x02\xDD\xDE\x07g\x02\x02\xDE\xDF\x07n\x02\x02\xDF&\x03\x02" +
		"\x02\x02\xE0\xE1\x07i\x02\x02\xE1\xE2\x07q\x02\x02\xE2\xE3\x07v\x02\x02" +
		"\xE3\xE4\x07q\x02\x02\xE4(\x03\x02\x02\x02\xE5\xE6\x07l\x02\x02\xE6\xE7" +
		"\x07w\x02\x02\xE7\xE8\x07o\x02\x02\xE8\xE9\x07r\x02\x02\xE9*\x03\x02\x02" +
		"\x02\xEA\xEB\x07k\x02\x02\xEB\xEC\x07o\x02\x02\xEC\xED\x07r\x02\x02\xED" +
		"\xEE\x07q\x02\x02\xEE\xEF\x07t\x02\x02\xEF\xF0\x07v\x02\x02\xF0,\x03\x02" +
		"\x02\x02\xF1\xF2\x07k\x02\x02\xF2\xF3\x07p\x02\x02\xF3\xF4\x07e\x02\x02" +
		"\xF4\xF5\x07n\x02\x02\xF5\xF6\x07w\x02\x02\xF6\xF7\x07f\x02\x02\xF7\xF8" +
		"\x07g\x02\x02\xF8.\x03\x02\x02\x02\xF9\xFA\x07o\x02\x02\xFA\xFB\x07q\x02" +
		"\x02\xFB\xFC\x07f\x02\x02\xFC\xFD\x07w\x02\x02\xFD\xFE\x07n\x02\x02\xFE" +
		"\xFF\x07w\x02\x02\xFF\u0100\x07g\x02\x02\u01000\x03\x02\x02\x02\u0101" +
		"\u0102\x07e\x02\x02\u0102\u0103\x07n\x02\x02\u0103\u0104\x07c\x02\x02" +
		"\u0104\u0105\x07u\x02\x02\u0105\u0106\x07u\x02\x02\u01062\x03\x02\x02" +
		"\x02\u0107\u0108\x07k\x02\x02\u0108\u0109\x07p\x02\x02\u0109\u010A\x07" +
		"v\x02\x02\u010A\u010B\x07g\x02\x02\u010B\u010C\x07t\x02\x02\u010C\u010D" +
		"\x07h\x02\x02\u010D\u010E\x07c\x02\x02\u010E\u010F\x07e\x02\x02\u010F" +
		"\u0110\x07g\x02\x02\u01104\x03\x02\x02\x02\u0111\u0112\x07g\x02\x02\u0112" +
		"\u0113\x07z\x02\x02\u0113\u0114\x07v\x02\x02\u0114\u0115\x07g\x02\x02" +
		"\u0115\u0116\x07p\x02\x02\u0116\u0117\x07f\x02\x02\u01176\x03\x02\x02" +
		"\x02\u0118\u0119\x07(\x02\x02\u01198\x03\x02\x02\x02\u011A\u011B\x07~" +
		"\x02\x02\u011B:\x03\x02\x02\x02\u011C\u011D\x07`\x02\x02\u011D<\x03\x02" +
		"\x02\x02\u011E\u011F\x07\x80\x02\x02\u011F>\x03\x02\x02\x02\u0120\u0121" +
		"\x07@\x02\x02\u0121\u0122\x07@\x02\x02\u0122@\x03\x02\x02\x02\u0123\u0124" +
		"\x07>\x02\x02\u0124\u0125\x07>\x02\x02\u0125B\x03\x02\x02\x02\u0126\u0127" +
		"\x07~\x02\x02\u0127\u0128\x07~\x02\x02\u0128D\x03\x02\x02\x02\u0129\u012A" +
		"\x07(\x02\x02\u012A\u012B\x07(\x02\x02\u012BF\x03\x02\x02\x02\u012C\u012D" +
		"\x07?\x02\x02\u012D\u012E\x07?\x02\x02\u012EH\x03\x02\x02\x02\u012F\u0130" +
		"\x07#\x02\x02\u0130\u0131\x07?\x02\x02\u0131J\x03\x02\x02\x02\u0132\u0133" +
		"\x07@\x02\x02\u0133\u0134\x07?\x02\x02\u0134L\x03\x02\x02\x02\u0135\u0136" +
		"\x07>\x02\x02\u0136\u0137\x07?\x02\x02\u0137N\x03\x02\x02\x02\u0138\u0139" +
		"\x07#\x02\x02\u0139P\x03\x02\x02\x02\u013A\u013B\x07@\x02\x02\u013BR\x03" +
		"\x02\x02\x02\u013C\u013D\x07>\x02\x02\u013DT\x03\x02\x02\x02\u013E\u013F" +
		"\x07-\x02\x02\u013FV\x03\x02\x02\x02\u0140\u0141\x07/\x02\x02\u0141X\x03" +
		"\x02\x02\x02\u0142\u0143\x07,\x02\x02\u0143Z\x03\x02\x02\x02\u0144\u0145" +
		"\x071\x02\x02\u0145\\\x03\x02\x02\x02\u0146\u0147\x07\'\x02\x02\u0147" +
		"^\x03\x02\x02\x02\u0148\u0149\x07}\x02\x02\u0149`\x03\x02\x02\x02\u014A" +
		"\u014B\x07\x7F\x02\x02\u014Bb\x03\x02\x02\x02\u014C\u014D\x07]\x02\x02" +
		"\u014Dd\x03\x02\x02\x02\u014E\u014F\x07_\x02\x02\u014Ff\x03\x02\x02\x02" +
		"\u0150\u0151\x07*\x02\x02\u0151h\x03\x02\x02\x02\u0152\u0153\x07+\x02" +
		"\x02\u0153j\x03\x02\x02\x02\u0154\u0155\x07=\x02\x02\u0155l\x03\x02\x02" +
		"\x02\u0156\u0157\x07?\x02\x02\u0157n\x03\x02\x02\x02\u0158\u0159\x07." +
		"\x02\x02\u0159p\x03\x02\x02\x02\u015A\u015B\x07A\x02\x02\u015Br\x03\x02" +
		"\x02\x02\u015C\u015D\x07<\x02\x02\u015Dt\x03\x02\x02\x02\u015E\u015F\x07" +
		"v\x02\x02\u015F\u0160\x07t\x02\x02\u0160\u0161\x07w\x02\x02\u0161\u0168" +
		"\x07g\x02\x02\u0162\u0163\x07h\x02\x02\u0163\u0164\x07c\x02\x02\u0164" +
		"\u0165\x07n\x02\x02\u0165\u0166\x07u\x02\x02\u0166\u0168\x07g\x02\x02" +
		"\u0167\u015E\x03\x02\x02\x02\u0167\u0162\x03\x02\x02\x02\u0168v\x03\x02" +
		"\x02\x02\u0169\u0171\x05\x83B\x02\u016A\u016E\x070\x02\x02\u016B\u016D" +
		"\x05\x85C\x02\u016C\u016B\x03\x02\x02\x02\u016D\u0170\x03\x02\x02\x02" +
		"\u016E\u016C\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0172\x03" +
		"\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0171\u016A\x03\x02\x02\x02\u0171" +
		"\u0172\x03\x02\x02\x02\u0172x\x03\x02\x02\x02\u0173\u0177\t\x02\x02\x02" +
		"\u0174\u0176\t\x03\x02\x02\u0175\u0174\x03\x02\x02\x02\u0176\u0179\x03" +
		"\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178" +
		"z\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02\u017A\u017E\t\x04\x02\x02" +
		"\u017B\u017D\t\x03\x02\x02\u017C\u017B\x03\x02\x02\x02\u017D\u0180\x03" +
		"\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F" +
		"|\x03\x02\x02\x02\u0180\u017E\x03\x02\x02\x02\u0181\u0187\t\x05\x02\x02" +
		"\u0182\u0186\n\x06\x02\x02\u0183\u0184\x07^\x02\x02\u0184\u0186\n\x07" +
		"\x02\x02\u0185\u0182\x03\x02\x02\x02\u0185\u0183\x03\x02\x02\x02\u0186" +
		"\u0189\x03\x02\x02\x02\u0187\u0185\x03\x02\x02\x02\u0187\u0188\x03\x02" +
		"\x02\x02\u0188\u018A\x03\x02\x02\x02\u0189\u0187\x03\x02\x02\x02\u018A" +
		"\u0196\t\x05\x02\x02\u018B\u0191\t\b\x02\x02\u018C\u0190\n\t\x02\x02\u018D" +
		"\u018E\x07^\x02\x02\u018E\u0190\n\x07\x02\x02\u018F\u018C\x03\x02\x02" +
		"\x02\u018F\u018D\x03\x02\x02\x02\u0190\u0193\x03\x02\x02\x02\u0191\u018F" +
		"\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0194\x03\x02\x02\x02" +
		"\u0193\u0191\x03\x02\x02\x02\u0194\u0196\t\b\x02\x02\u0195\u0181\x03\x02" +
		"\x02\x02\u0195\u018B\x03\x02\x02\x02\u0196~\x03\x02\x02\x02\u0197\u0198" +
		"\x071\x02\x02\u0198\u0199\x071\x02\x02\u0199\u019D\x03\x02\x02\x02\u019A" +
		"\u019C\n\x07\x02\x02\u019B\u019A\x03\x02\x02\x02\u019C\u019F\x03\x02\x02" +
		"\x02\u019D\u019B\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\u01AC" +
		"\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u01A0\u01A1\x071\x02\x02" +
		"\u01A1\u01A2\x07,\x02\x02\u01A2\u01A6\x03\x02\x02\x02\u01A3\u01A5\v\x02" +
		"\x02\x02\u01A4\u01A3\x03\x02\x02\x02\u01A5\u01A8\x03\x02\x02\x02\u01A6" +
		"\u01A7\x03\x02\x02\x02\u01A6\u01A4\x03\x02\x02\x02\u01A7\u01A9\x03\x02" +
		"\x02\x02\u01A8\u01A6\x03\x02\x02\x02\u01A9\u01AA\x07,\x02\x02\u01AA\u01AC" +
		"\x071\x02\x02\u01AB\u0197\x03\x02\x02\x02\u01AB\u01A0\x03\x02\x02\x02" +
		"\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01AE\b@\x02\x02\u01AE\x80\x03\x02" +
		"\x02\x02\u01AF\u01B0\t\n\x02\x02\u01B0\u01B1\x03\x02\x02\x02\u01B1\u01B2" +
		"\bA\x02\x02\u01B2\x82\x03\x02\x02\x02\u01B3\u01B7\t\v\x02\x02\u01B4\u01B6" +
		"\x05\x85C\x02\u01B5\u01B4\x03\x02\x02\x02\u01B6\u01B9\x03\x02\x02\x02" +
		"\u01B7\u01B5\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01BC\x03" +
		"\x02\x02\x02\u01B9\u01B7\x03\x02\x02\x02\u01BA\u01BC\x072\x02\x02\u01BB" +
		"\u01B3\x03\x02\x02\x02\u01BB\u01BA\x03\x02\x02\x02\u01BC\x84\x03\x02\x02" +
		"\x02\u01BD\u01BE\t\f\x02\x02\u01BE\x86\x03\x02\x02\x02\x12\x02\u0167\u016E" +
		"\u0171\u0177\u017E\u0185\u0187\u018F\u0191\u0195\u019D\u01A6\u01AB\u01B7" +
		"\u01BB\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!WhisperLanguageLexer.__ATN) {
			WhisperLanguageLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(WhisperLanguageLexer._serializedATN));
		}

		return WhisperLanguageLexer.__ATN;
	}

}

