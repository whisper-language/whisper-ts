import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import AbstractParseTreeVisitor from "./abstractParseTreeVisitor";
import BuildInFunc from "./buildInFunction";
import Func from "./func";
import { UnaryMinusExpressionContext, NotExpressionContext, PowerExpressionContext, MultExpressionContext, AddExpressionContext, CompExpressionContext, EqExpressionContext, AndExpressionContext, OrExpressionContext, TernaryExpressionContext, InExpressionContext, NumberExpressionContext, BoolExpressionContext, NullExpressionContext, FunctionCallExpressionContext, ListExpressionContext, IdentifierExpressionContext, StringExpressionContext, ExpressionExpressionContext, InputExpressionContext, BuildInIdentifierFunctionCallContext, IdentifierFunctionCallContext, PrintlnFunctionCallContext, PrintFunctionCallContext, AssertFunctionCallContext, SizeFunctionCallContext, ParseContext, BlockContext, StatementContext, AssignmentContext, FunctionCallContext, IfStatementContext, IfStatContext, ElseIfStatContext, ElseStatContext, FunctionDeclContext, ForStatementContext, WhileStatementContext, IdListContext, ExprListContext, ExpressionContext, List_AliasContext, IndexesContext } from "./gen/WhisperLanguageParser";
import { WhisperLanguageVisitor } from "./gen/WhisperLanguageVisitor";
import ReturnValue from "./returnValue";
import Scope from "./Scope";
import TLValue from "./TLValue";

export default  class EvalVititor extends AbstractParseTreeVisitor<TLValue> implements WhisperLanguageVisitor<TLValue> {
    // ret:ReturnValue;
    scope:Scope;
    funcs: Map<String,Func>;
    buildFunc?:Map<String,BuildInFunc>;

    constructor(scope:Scope,funcs:Map<String,Func>,buildInFuncs?:Map<string,BuildInFunc>){
        super();
        this.scope=scope;
        this.funcs=funcs;
        this.buildFunc=buildInFuncs;
    }
    
    visitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => TLValue;
    visitNotExpression?: (ctx: NotExpressionContext) => TLValue;
    visitPowerExpression?: (ctx: PowerExpressionContext) => TLValue;
    visitMultExpression?: (ctx: MultExpressionContext) => TLValue;
    visitAddExpression?: (ctx: AddExpressionContext) => TLValue;
    visitCompExpression?: (ctx: CompExpressionContext) => TLValue;
    visitEqExpression?: (ctx: EqExpressionContext) => TLValue;
    visitAndExpression?: (ctx: AndExpressionContext) => TLValue;
    visitOrExpression?: (ctx: OrExpressionContext) => TLValue;
    visitTernaryExpression?: (ctx: TernaryExpressionContext) => TLValue;
    visitInExpression?: (ctx: InExpressionContext) => TLValue;
    visitNumberExpression?: (ctx: NumberExpressionContext) => TLValue;
    visitBoolExpression?: (ctx: BoolExpressionContext) => TLValue;
    visitNullExpression?: (ctx: NullExpressionContext) => TLValue;
    visitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => TLValue;
    visitListExpression?: (ctx: ListExpressionContext) => TLValue;
    visitIdentifierExpression?: (ctx: IdentifierExpressionContext) => TLValue;
    visitStringExpression?: (ctx: StringExpressionContext) => TLValue;
    visitExpressionExpression?: (ctx: ExpressionExpressionContext) => TLValue;
    visitInputExpression?: (ctx: InputExpressionContext) => TLValue;
    visitBuildInIdentifierFunctionCall?: (ctx: BuildInIdentifierFunctionCallContext) => TLValue;
    visitIdentifierFunctionCall?: (ctx: IdentifierFunctionCallContext) => TLValue;
    visitPrintlnFunctionCall?: (ctx: PrintlnFunctionCallContext) => TLValue;
    visitPrintFunctionCall?: (ctx: PrintFunctionCallContext) => TLValue;
    visitAssertFunctionCall?: (ctx: AssertFunctionCallContext) => TLValue;
    visitSizeFunctionCall?: (ctx: SizeFunctionCallContext) => TLValue;
    visitParse?: (ctx: ParseContext) => TLValue;
    visitBlock?: (ctx: BlockContext) => TLValue;
    visitStatement?: (ctx: StatementContext) => TLValue;
    visitAssignment?: (ctx: AssignmentContext) => TLValue;
    visitFunctionCall?: (ctx: FunctionCallContext) => TLValue;
    visitIfStatement?: (ctx: IfStatementContext) => TLValue;
    visitIfStat?: (ctx: IfStatContext) => TLValue;
    visitElseIfStat?: (ctx: ElseIfStatContext) => TLValue;
    visitElseStat?: (ctx: ElseStatContext) => TLValue;
    visitFunctionDecl?: (ctx: FunctionDeclContext) => TLValue;
    visitForStatement?: (ctx: ForStatementContext) => TLValue;
    visitWhileStatement?: (ctx: WhileStatementContext) => TLValue;
    visitIdList?: (ctx: IdListContext) => TLValue;
    visitExprList?: (ctx: ExprListContext) => TLValue;
    visitExpression?: (ctx: ExpressionContext) => TLValue;
    visitList_Alias?: (ctx: List_AliasContext) => TLValue;
    visitIndexes?: (ctx: IndexesContext) => TLValue;

}