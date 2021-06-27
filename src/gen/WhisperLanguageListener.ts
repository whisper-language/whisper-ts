// Generated from ./grammar/WhisperLanguage.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { UnaryMinusExpressionContext } from "./WhisperLanguageParser";
import { NotExpressionContext } from "./WhisperLanguageParser";
import { PowerExpressionContext } from "./WhisperLanguageParser";
import { MultExpressionContext } from "./WhisperLanguageParser";
import { AddExpressionContext } from "./WhisperLanguageParser";
import { CompExpressionContext } from "./WhisperLanguageParser";
import { EqExpressionContext } from "./WhisperLanguageParser";
import { AndExpressionContext } from "./WhisperLanguageParser";
import { OrExpressionContext } from "./WhisperLanguageParser";
import { TernaryExpressionContext } from "./WhisperLanguageParser";
import { InExpressionContext } from "./WhisperLanguageParser";
import { NumberExpressionContext } from "./WhisperLanguageParser";
import { BoolExpressionContext } from "./WhisperLanguageParser";
import { NullExpressionContext } from "./WhisperLanguageParser";
import { FunctionCallExpressionContext } from "./WhisperLanguageParser";
import { ListExpressionContext } from "./WhisperLanguageParser";
import { IdentifierExpressionContext } from "./WhisperLanguageParser";
import { StringExpressionContext } from "./WhisperLanguageParser";
import { ExpressionExpressionContext } from "./WhisperLanguageParser";
import { InputExpressionContext } from "./WhisperLanguageParser";
import { BuildInIdentifierFunctionCallContext } from "./WhisperLanguageParser";
import { IdentifierFunctionCallContext } from "./WhisperLanguageParser";
import { PrintlnFunctionCallContext } from "./WhisperLanguageParser";
import { PrintFunctionCallContext } from "./WhisperLanguageParser";
import { AssertFunctionCallContext } from "./WhisperLanguageParser";
import { SizeFunctionCallContext } from "./WhisperLanguageParser";
import { ParseContext } from "./WhisperLanguageParser";
import { BlockContext } from "./WhisperLanguageParser";
import { StatementContext } from "./WhisperLanguageParser";
import { AssignmentContext } from "./WhisperLanguageParser";
import { FunctionCallContext } from "./WhisperLanguageParser";
import { IfStatementContext } from "./WhisperLanguageParser";
import { IfStatContext } from "./WhisperLanguageParser";
import { ElseIfStatContext } from "./WhisperLanguageParser";
import { ElseStatContext } from "./WhisperLanguageParser";
import { FunctionDeclContext } from "./WhisperLanguageParser";
import { ForStatementContext } from "./WhisperLanguageParser";
import { WhileStatementContext } from "./WhisperLanguageParser";
import { IdListContext } from "./WhisperLanguageParser";
import { ExprListContext } from "./WhisperLanguageParser";
import { ExpressionContext } from "./WhisperLanguageParser";
import { List_AliasContext } from "./WhisperLanguageParser";
import { IndexesContext } from "./WhisperLanguageParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `WhisperLanguageParser`.
 */
export interface WhisperLanguageListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `unaryMinusExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryMinusExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `notExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNotExpression?: (ctx: NotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `notExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNotExpression?: (ctx: NotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `powerExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPowerExpression?: (ctx: PowerExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `powerExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPowerExpression?: (ctx: PowerExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `multExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultExpression?: (ctx: MultExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `multExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultExpression?: (ctx: MultExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `addExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAddExpression?: (ctx: AddExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `addExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAddExpression?: (ctx: AddExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `compExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCompExpression?: (ctx: CompExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `compExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCompExpression?: (ctx: CompExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `eqExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterEqExpression?: (ctx: EqExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `eqExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitEqExpression?: (ctx: EqExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `andExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAndExpression?: (ctx: AndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `andExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAndExpression?: (ctx: AndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `orExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterOrExpression?: (ctx: OrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `orExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitOrExpression?: (ctx: OrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ternaryExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterTernaryExpression?: (ctx: TernaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ternaryExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitTernaryExpression?: (ctx: TernaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `inExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInExpression?: (ctx: InExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `inExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInExpression?: (ctx: InExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `numberExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNumberExpression?: (ctx: NumberExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `numberExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNumberExpression?: (ctx: NumberExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `boolExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBoolExpression?: (ctx: BoolExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `boolExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBoolExpression?: (ctx: BoolExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `nullExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNullExpression?: (ctx: NullExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `nullExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNullExpression?: (ctx: NullExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `listExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterListExpression?: (ctx: ListExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `listExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitListExpression?: (ctx: ListExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `identifierExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `identifierExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `stringExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterStringExpression?: (ctx: StringExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `stringExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitStringExpression?: (ctx: StringExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionExpression?: (ctx: ExpressionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionExpression?: (ctx: ExpressionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `inputExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInputExpression?: (ctx: InputExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `inputExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInputExpression?: (ctx: InputExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `buildInIdentifierFunctionCall`
	 * labeled alternative in `WhisperLanguageParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterBuildInIdentifierFunctionCall?: (ctx: BuildInIdentifierFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `buildInIdentifierFunctionCall`
	 * labeled alternative in `WhisperLanguageParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitBuildInIdentifierFunctionCall?: (ctx: BuildInIdentifierFunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by the `identifierFunctionCall`
	 * labeled alternative in `WhisperLanguageParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterIdentifierFunctionCall?: (ctx: IdentifierFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `identifierFunctionCall`
	 * labeled alternative in `WhisperLanguageParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitIdentifierFunctionCall?: (ctx: IdentifierFunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by the `printlnFunctionCall`
	 * labeled alternative in `WhisperLanguageParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterPrintlnFunctionCall?: (ctx: PrintlnFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `printlnFunctionCall`
	 * labeled alternative in `WhisperLanguageParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitPrintlnFunctionCall?: (ctx: PrintlnFunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by the `printFunctionCall`
	 * labeled alternative in `WhisperLanguageParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterPrintFunctionCall?: (ctx: PrintFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `printFunctionCall`
	 * labeled alternative in `WhisperLanguageParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitPrintFunctionCall?: (ctx: PrintFunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by the `assertFunctionCall`
	 * labeled alternative in `WhisperLanguageParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterAssertFunctionCall?: (ctx: AssertFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `assertFunctionCall`
	 * labeled alternative in `WhisperLanguageParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitAssertFunctionCall?: (ctx: AssertFunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by the `sizeFunctionCall`
	 * labeled alternative in `WhisperLanguageParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterSizeFunctionCall?: (ctx: SizeFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `sizeFunctionCall`
	 * labeled alternative in `WhisperLanguageParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitSizeFunctionCall?: (ctx: SizeFunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `WhisperLanguageParser.parse`.
	 * @param ctx the parse tree
	 */
	enterParse?: (ctx: ParseContext) => void;
	/**
	 * Exit a parse tree produced by `WhisperLanguageParser.parse`.
	 * @param ctx the parse tree
	 */
	exitParse?: (ctx: ParseContext) => void;

	/**
	 * Enter a parse tree produced by `WhisperLanguageParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `WhisperLanguageParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `WhisperLanguageParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `WhisperLanguageParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `WhisperLanguageParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `WhisperLanguageParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `WhisperLanguageParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `WhisperLanguageParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `WhisperLanguageParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `WhisperLanguageParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `WhisperLanguageParser.ifStat`.
	 * @param ctx the parse tree
	 */
	enterIfStat?: (ctx: IfStatContext) => void;
	/**
	 * Exit a parse tree produced by `WhisperLanguageParser.ifStat`.
	 * @param ctx the parse tree
	 */
	exitIfStat?: (ctx: IfStatContext) => void;

	/**
	 * Enter a parse tree produced by `WhisperLanguageParser.elseIfStat`.
	 * @param ctx the parse tree
	 */
	enterElseIfStat?: (ctx: ElseIfStatContext) => void;
	/**
	 * Exit a parse tree produced by `WhisperLanguageParser.elseIfStat`.
	 * @param ctx the parse tree
	 */
	exitElseIfStat?: (ctx: ElseIfStatContext) => void;

	/**
	 * Enter a parse tree produced by `WhisperLanguageParser.elseStat`.
	 * @param ctx the parse tree
	 */
	enterElseStat?: (ctx: ElseStatContext) => void;
	/**
	 * Exit a parse tree produced by `WhisperLanguageParser.elseStat`.
	 * @param ctx the parse tree
	 */
	exitElseStat?: (ctx: ElseStatContext) => void;

	/**
	 * Enter a parse tree produced by `WhisperLanguageParser.functionDecl`.
	 * @param ctx the parse tree
	 */
	enterFunctionDecl?: (ctx: FunctionDeclContext) => void;
	/**
	 * Exit a parse tree produced by `WhisperLanguageParser.functionDecl`.
	 * @param ctx the parse tree
	 */
	exitFunctionDecl?: (ctx: FunctionDeclContext) => void;

	/**
	 * Enter a parse tree produced by `WhisperLanguageParser.forStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `WhisperLanguageParser.forStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `WhisperLanguageParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `WhisperLanguageParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `WhisperLanguageParser.idList`.
	 * @param ctx the parse tree
	 */
	enterIdList?: (ctx: IdListContext) => void;
	/**
	 * Exit a parse tree produced by `WhisperLanguageParser.idList`.
	 * @param ctx the parse tree
	 */
	exitIdList?: (ctx: IdListContext) => void;

	/**
	 * Enter a parse tree produced by `WhisperLanguageParser.exprList`.
	 * @param ctx the parse tree
	 */
	enterExprList?: (ctx: ExprListContext) => void;
	/**
	 * Exit a parse tree produced by `WhisperLanguageParser.exprList`.
	 * @param ctx the parse tree
	 */
	exitExprList?: (ctx: ExprListContext) => void;

	/**
	 * Enter a parse tree produced by `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `WhisperLanguageParser.list_Alias`.
	 * @param ctx the parse tree
	 */
	enterList_Alias?: (ctx: List_AliasContext) => void;
	/**
	 * Exit a parse tree produced by `WhisperLanguageParser.list_Alias`.
	 * @param ctx the parse tree
	 */
	exitList_Alias?: (ctx: List_AliasContext) => void;

	/**
	 * Enter a parse tree produced by `WhisperLanguageParser.indexes`.
	 * @param ctx the parse tree
	 */
	enterIndexes?: (ctx: IndexesContext) => void;
	/**
	 * Exit a parse tree produced by `WhisperLanguageParser.indexes`.
	 * @param ctx the parse tree
	 */
	exitIndexes?: (ctx: IndexesContext) => void;
}

