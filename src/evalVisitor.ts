import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import BuildInFunc from "./buildInFunction";
import Func from "./func";
import { UnaryMinusExpressionContext, NotExpressionContext, PowerExpressionContext, MultExpressionContext, AddExpressionContext, CompExpressionContext, EqExpressionContext, AndExpressionContext, OrExpressionContext, TernaryExpressionContext, InExpressionContext, NumberExpressionContext, BoolExpressionContext, NullExpressionContext, FunctionCallExpressionContext, ListExpressionContext, IdentifierExpressionContext, StringExpressionContext, ExpressionExpressionContext, InputExpressionContext, BuildInIdentifierFunctionCallContext, IdentifierFunctionCallContext, PrintlnFunctionCallContext, PrintFunctionCallContext, AssertFunctionCallContext, SizeFunctionCallContext, ParseContext, BlockContext, StatementContext, AssignmentContext, FunctionCallContext, IfStatementContext, IfStatContext, ElseIfStatContext, ElseStatContext, FunctionDeclContext, ForStatementContext, WhileStatementContext, IdListContext, ExprListContext, ExpressionContext, List_AliasContext, IndexesContext } from "./gen/WhisperLanguageParser";
import { WhisperLanguageVisitor } from "./gen/WhisperLanguageVisitor";
import ReturnValue from "./returnValue";
import Scope from "./Scope";
import TLValue from "./TLValue";

export default  class EvalVititor  extends AbstractParseTreeVisitor<TLValue>  implements WhisperLanguageVisitor<TLValue> {
    
    defaultResult(): TLValue {
        return TLValue.Void;
    } 

    ret:ReturnValue=new ReturnValue();
    scope:Scope;
    funcs: Map<String,Func>;
    buildFunc?:Map<String,BuildInFunc>;

    constructor(scope:Scope,funcs:Map<String,Func>,buildInFuncs?:Map<String,BuildInFunc>){
        super();
        this.scope=scope;
        this.funcs=funcs;
        this.buildFunc=buildInFuncs;
        console.log("初始化")
    }
    visitNumberExpression(ctx:NumberExpressionContext):TLValue{
        return new TLValue("11");
    }
    visitStringExpression(ctx:StringExpressionContext):TLValue{
        console.log("打印"+ctx.text)
        return new TLValue("11");
    }
    visitPrintlnFunctionCall(ctx:PrintlnFunctionCallContext):TLValue{
        console.log("打印"+ctx.text)
        return new TLValue("11");
    }
}