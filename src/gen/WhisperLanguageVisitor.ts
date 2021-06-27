// Generated from ./grammar/WhisperLanguage.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `WhisperLanguageParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface WhisperLanguageVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `unaryMinusExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `notExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExpression?: (ctx: NotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `powerExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowerExpression?: (ctx: PowerExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `multExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultExpression?: (ctx: MultExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `addExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddExpression?: (ctx: AddExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `compExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompExpression?: (ctx: CompExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `eqExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqExpression?: (ctx: EqExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `andExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpression?: (ctx: AndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `orExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrExpression?: (ctx: OrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ternaryExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTernaryExpression?: (ctx: TernaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `inExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInExpression?: (ctx: InExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberExpression?: (ctx: NumberExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `boolExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolExpression?: (ctx: BoolExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullExpression?: (ctx: NullExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `listExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListExpression?: (ctx: ListExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `identifierExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpression?: (ctx: IdentifierExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringExpression?: (ctx: StringExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionExpression?: (ctx: ExpressionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `inputExpression`
	 * labeled alternative in `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputExpression?: (ctx: InputExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `buildInIdentifierFunctionCall`
	 * labeled alternative in `WhisperLanguageParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuildInIdentifierFunctionCall?: (ctx: BuildInIdentifierFunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `identifierFunctionCall`
	 * labeled alternative in `WhisperLanguageParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierFunctionCall?: (ctx: IdentifierFunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `printlnFunctionCall`
	 * labeled alternative in `WhisperLanguageParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintlnFunctionCall?: (ctx: PrintlnFunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `printFunctionCall`
	 * labeled alternative in `WhisperLanguageParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintFunctionCall?: (ctx: PrintFunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `assertFunctionCall`
	 * labeled alternative in `WhisperLanguageParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssertFunctionCall?: (ctx: AssertFunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `sizeFunctionCall`
	 * labeled alternative in `WhisperLanguageParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSizeFunctionCall?: (ctx: SizeFunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `WhisperLanguageParser.parse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParse?: (ctx: ParseContext) => Result;

	/**
	 * Visit a parse tree produced by `WhisperLanguageParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `WhisperLanguageParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `WhisperLanguageParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `WhisperLanguageParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `WhisperLanguageParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `WhisperLanguageParser.ifStat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStat?: (ctx: IfStatContext) => Result;

	/**
	 * Visit a parse tree produced by `WhisperLanguageParser.elseIfStat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseIfStat?: (ctx: ElseIfStatContext) => Result;

	/**
	 * Visit a parse tree produced by `WhisperLanguageParser.elseStat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseStat?: (ctx: ElseStatContext) => Result;

	/**
	 * Visit a parse tree produced by `WhisperLanguageParser.functionDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDecl?: (ctx: FunctionDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `WhisperLanguageParser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `WhisperLanguageParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `WhisperLanguageParser.idList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdList?: (ctx: IdListContext) => Result;

	/**
	 * Visit a parse tree produced by `WhisperLanguageParser.exprList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprList?: (ctx: ExprListContext) => Result;

	/**
	 * Visit a parse tree produced by `WhisperLanguageParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `WhisperLanguageParser.list_Alias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_Alias?: (ctx: List_AliasContext) => Result;

	/**
	 * Visit a parse tree produced by `WhisperLanguageParser.indexes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexes?: (ctx: IndexesContext) => Result;
}

