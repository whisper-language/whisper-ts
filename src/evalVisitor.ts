import { parse } from "@babel/core";
import { ParserRuleContext } from "antlr4ts";
import { Override } from "antlr4ts/Decorators";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Expression, idText, isEnumMember, ListFormat } from "typescript";
import BuildInFunc from "./buildInFunction";
import Func from "./func";
import { WhisperLanguageLexer } from "./gen/WhisperLanguageLexer";
import {
  AddExpressionContext,
  AndExpressionContext,
  AssertFunctionCallContext,
  AssignmentContext,
  BlockContext,
  BoolExpressionContext,
  BuildInIdentifierFunctionCallContext,
  CompExpressionContext,
  ElseIfStatContext,
  ElseStatContext,
  EqExpressionContext,
  ExpressionContext,
  ExpressionExpressionContext,
  ExprListContext,
  ForStatementContext,
  FunctionCallContext,
  FunctionCallExpressionContext,
  FunctionDeclContext,
  IdentifierExpressionContext,
  IdentifierFunctionCallContext,
  IdListContext,
  IfStatContext,
  IfStatementContext,
  IndexesContext,
  InExpressionContext,
  InputExpressionContext,
  ListExpressionContext,
  List_AliasContext,
  MultExpressionContext,
  NotExpressionContext,
  NullExpressionContext,
  NumberExpressionContext,
  OrExpressionContext,
  ParseContext,
  PowerExpressionContext,
  PrintFunctionCallContext,
  PrintlnFunctionCallContext,
  SizeFunctionCallContext,
  StatementContext,
  StringExpressionContext,
  TernaryExpressionContext,
  UnaryMinusExpressionContext,
  WhileStatementContext,
  WhisperLanguageParser,
} from "./gen/WhisperLanguageParser";
import { WhisperLanguageVisitor } from "./gen/WhisperLanguageVisitor";
import ReturnValue from "./returnValue";
import Scope from "./Scope";
import TLValue from "./TLValue";

export default class EvalVititor
  extends AbstractParseTreeVisitor<TLValue>
  implements WhisperLanguageVisitor<TLValue>
{
  protected defaultResult() {
    return new TLValue();
  }

  ret: ReturnValue = new ReturnValue();

  scope: Scope;

  funcs: Map<String, Func>;

  buildFunc?: Map<String, BuildInFunc>;

  constructor(
    scope: Scope,
    funcs: Map<String, Func>,
    buildInFuncs?: Map<String, BuildInFunc>
  ) {
    super();
    this.scope = scope;
    this.funcs = funcs;
    this.buildFunc = buildInFuncs;
  }

  // functionDecl
  visitFunctionDecl(ctx: FunctionDeclContext): TLValue {
    var params = ctx.idList()?.Identifier() ?? [];
    var block = ctx.block();
    var id = ctx.Identifier().text + params.length;
    this.funcs.set(id, new Func(this.scope, params, block));
    return TLValue.Void;
  }
  // list: '[' exprList? ']'
  visitList_Alias(ctx: List_AliasContext): TLValue {
    var list = [];
    if (ctx.exprList() != null) {
      for (const ex of ctx.exprList()?.expression() ?? []) {
        list.push(this.visit(ex));
      }
    }
    return new TLValue(list);
  }

  // '-' expression                           #unaryMinusExpression
  visitUnaryMinusExpression(ctx: UnaryMinusExpressionContext): TLValue {
    var v = this.visit(ctx.expression());
    if (!v.isNumber()) {
      throw new Error("v is not number");
    }
    return new TLValue(-1 * v.asDouble());
  }
  // '!' expression
  visitNotExpression(ctx: NotExpressionContext): TLValue {
    var v = this.visit(ctx.expression());
    if (!v.isBoolean()) {
      throw new Error("v is not bool");
    }
    return new TLValue(!v.asBoolean());
  }

  // expression '^' expression                #powerExpression
  visitPowerExpression(ctx: PowerExpressionContext): TLValue {
    var left = this.visit(ctx.expression(0));
    var right = this.visit(ctx.expression(1));
    if (left.isNumber() && right.isNumber()) {
      return new TLValue(Math.pow(left.asDouble(), right.asDouble()));
    }
    throw new Error("^ error" + ctx.text);
  }

  // expression op=( '*' | '/' | '%' ) expression         #multExpression

  visitMultExpression(ctx: MultExpressionContext): TLValue {
    switch (ctx._op.text) {
      case "*":
        return this.multiply(ctx);
      case "/":
        return this.divide(ctx);
      case "%":
        return this.modulus(ctx);
      default:
        throw new Error("unknown operator type:" + ctx._op.text);
    }
  }

  // expression op=( '+' | '-' ) expression               #addExpression
  visitAddExpression(ctx: AddExpressionContext): TLValue {
    switch (ctx._op.text) {
      case "+":
        return this.add(ctx);
      case "-":
        return this.subtract(ctx);
      default:
        throw new Error("unknown operator type:" + ctx._op.text);
    }
  }

  // expression op=( '>=' | '<=' | '>' | '<' ) expression #compExpression
  visitCompExpression(ctx: CompExpressionContext): TLValue {
    switch (ctx._op.text) {
      case ">=":
        return this.gteq(ctx);
      case "<=":
        return this.lteq(ctx);
      case ">":
        return this.gt(ctx);
      case "<":
        return this.lt(ctx);
      default:
        throw new Error("unknown operator type:" + ctx._op.text);
    }
  }

  visitEqExpression(ctx: EqExpressionContext): TLValue {
    switch (ctx._op.text) {
      case "==":
        return this.eqeq(ctx);
      case "!=":
        return this.notEq(ctx);
      default:
        throw new Error("unknown operator type:" + ctx._op.text);
    }
  }

  multiply(ctx: MultExpressionContext): TLValue {
    var left = this.visit(ctx.expression(0));
    var right = this.visit(ctx.expression(1));
    if (left == null || right == null) {
      throw new Error("multiply error ");
    }
    //number * number
    if (left.isNumber() && right.isNumber()) {
      return new TLValue(left.asDouble() * right.asDouble());
    }
    //string * number
    if (left.isString() && right.isNumber()) {
      left.asString().repeat(right.asInt());
    }
    //list * number
    if (left.isList() && right.isNumber()) {
      var total: Array<any> = [];
      var stop = right.asInt();
      for (var i = 0; i < stop; i++) {
        total = [...total, ...left.asList()];
      }
      return new TLValue(total);
    }
    throw new Error("multiply error");
  }

  divide(ctx: MultExpressionContext): TLValue {
    const left = this.visit(ctx.expression(0));
    const right = this.visit(ctx.expression(1));
    if (left.isNumber() && right.isNumber()) {
      return new TLValue(left.asDouble() / right.asDouble());
    }
    throw new Error("divide error");
  }

  modulus(ctx: MultExpressionContext): TLValue {
    const left = this.visit(ctx.expression(0));
    const right = this.visit(ctx.expression(1));
    if (left.isNumber() && right.isNumber()) {
      return new TLValue(left.asDouble() % right.asDouble());
    }
    throw new Error("modulus error");
  }

  add(ctx: AddExpressionContext): TLValue {
    const left = this.visit(ctx.expression(0));
    const right = this.visit(ctx.expression(1));

    if (left == null || right == null) {
      throw new Error("add error left or right is null");
    }

    // number + number
    if (left.isNumber() && right.isNumber()) {
      return new TLValue(left.asDouble() + right.asDouble());
    }

    // list + any
    if (left.isList()) {
      return new TLValue([...left.asList(), right]);
    }

    //string + any
    if (left.isString()) {
      return new TLValue(left.asString() + right.toString());
    }

    if (right.isString()) {
      return new TLValue(left.toString() + right.asString());
    }

    throw new Error("add error");
  }

  subtract(ctx: AddExpressionContext): TLValue {
    const left = this.visit(ctx.expression(0));
    const right = this.visit(ctx.expression(1));
    if (left.isNumber() && right.isNumber()) {
      return new TLValue(left.asDouble() - right.asDouble());
    }
    if (left.isList()) {
      throw new Error("TODO remove");
    }
    throw new Error("subtract error");
  }

  lt(ctx: CompExpressionContext): TLValue {
    const left = this.visit(ctx.expression(0));
    const right = this.visit(ctx.expression(1));
    if (left.isNumber() && right.isNumber()) {
      return new TLValue(left.asDouble() < right.asDouble());
    }

    if (left.isString() && right.isString()) {
      return new TLValue(left.compareTo(right) < 0);
    }

    throw new Error("lt error");
  }

  lteq(ctx: CompExpressionContext): TLValue {
    const left = this.visit(ctx.expression(0));
    const right = this.visit(ctx.expression(1));
    if (left.isNumber() && right.isNumber()) {
      return new TLValue(left.asDouble() <= right.asDouble());
    }

    if (left.isString() && right.isString()) {
      return new TLValue(left.compareTo(right) <= 0);
    }
    throw new Error("error");
  }

  gt(ctx: CompExpressionContext): TLValue {
    const left = this.visit(ctx.expression(0));
    const right = this.visit(ctx.expression(1));
    if (left.isNumber() && right.isNumber()) {
      return new TLValue(left.asDouble() > right.asDouble());
    }

    if (left.isString() && right.isString()) {
      return new TLValue(left.compareTo(right) > 0);
    }
    throw new Error("error");
  }

  gteq(ctx: CompExpressionContext): TLValue {
    const left = this.visit(ctx.expression(0));
    const right = this.visit(ctx.expression(1));
    if (left.isNumber() && right.isNumber()) {
      return new TLValue(left.asDouble() >= right.asDouble());
    }

    if (left.isString() && right.isString()) {
      return new TLValue(left.compareTo(right) >= 0);
    }
    throw new Error("error");
  }

  eqeq(ctx: EqExpressionContext): TLValue {
    const left = this.visit(ctx.expression(0));
    const right = this.visit(ctx.expression(1));
    if (right == null) {
      throw new Error("eq eq Error");
    }
    return new TLValue(left.equals(right));
  }

  notEq(ctx: EqExpressionContext): TLValue {
    const left = this.visit(ctx.expression(0));
    const right = this.visit(ctx.expression(1));
    if (right == null) {
      throw new Error("not eq Error");
    }
    return new TLValue(!left.equals(right));
  }

  // expression '&&' expression               #andExpression
  visitAndExpression(ctx: AndExpressionContext): TLValue {
    const left = this.visit(ctx.expression(0));
    const right = this.visit(ctx.expression(1));

    if (!left.isBoolean || !right.isBoolean) {
      throw new Error("&& error");
    }
    return new TLValue(left.asBoolean && right.asBoolean);
  }

  // expression '||' expression               #orExpression
  visitOrExpression(ctx: OrExpressionContext): TLValue {
    const left = this.visit(ctx.expression(0));
    const right = this.visit(ctx.expression(1));

    if (!left.isBoolean || !right.isBoolean) {
      throw new Error("|| error");
    }
    return new TLValue(left.asBoolean() || right.asBoolean());
  }

  // expression '?' expression ':' expression #ternaryExpression
  visitTernaryExpression(ctx: TernaryExpressionContext): TLValue {
    var condition = this.visit(ctx.expression(0));
    if (condition.asBoolean()) {
      return this.visit(ctx.expression(1));
    } else {
      return this.visit(ctx.expression(2));
    }
  }

  // expression In expression                 #inExpression
  visitInExpression(ctx: InExpressionContext): TLValue {
    const left = this.visit(ctx.expression(0));
    const right = this.visit(ctx.expression(1));
    if (right.isList()) {
      for (const item in right.asList) {
        if (left.equals(item)) {
          return new TLValue(true);
        }
      }
      return new TLValue(false);
    }
    throw new Error("in error");
  }
  // Number                                   #numberExpression
  visitNumberExpression(ctx: NumberExpressionContext): TLValue {
    return new TLValue(parseFloat(ctx.text));
  }
  // Bool                                     #boolExpression
  visitBoolExpression(ctx: BoolExpressionContext): TLValue {
    return new TLValue(ctx.text.toLocaleLowerCase() == "true");
  }

  // Null                                     #nullExpression
  visitNullExpression(ctx: NullExpressionContext): TLValue {
    return TLValue.NULL;
  }

  resolveIndexes(val:TLValue,indexes:Array<ExpressionContext>):TLValue{
    for(var ec of indexes){
      var idx=this.visit(ec);

      if (!idx.isNumber() || (!val.isList() && !val.isString())) {
        throw new Error("Problem resolving indexes on " + val + " at " + idx+"   "+ec.text);
      }


      var  i=idx.asDouble();
      if(val.isString){
        val =new TLValue(val.asString().substr(i,i+1))
      }else{
        val=(val.asList())[i];
      }

    }
    return val;
  }

  setAtIndex(ctx:ParserRuleContext,index:Array<ExpressionContext>,val:TLValue,newVal:TLValue){
    if(!val.isList){
      throw new Error("设置参数错误" + ctx);
    }
    
    for(var i=0;i<index.length-1;i++){
      var idx=this.visit(index[i]);
      if(!idx.isNumber()){
        throw new Error("idx 必须为数字" + idx);
      }
      val=val.asList[idx.value]
    }

    var idx=this.visit(index[index.length-1]);
    if(!idx.isNumber()){
      throw new Error("idx 必须为数字" + idx);
    }
    val.asList[idx.value]=newVal;
  }


  visitListExpression(ctx:ListExpressionContext):TLValue{
    var val=this.visit(ctx.list_Alias());
    if(ctx.indexes()!=null){
      var exps=ctx.indexes().expression();
      val= this.resolveIndexes(val, exps);
    }
    return val;
  }

  // Identifier indexes?                      #identifierExpression
    visitIdentifierExpression(ctx: IdentifierExpressionContext): TLValue {
      var id=ctx.Identifier().text;
      var val=this.scope.resolve(id);
      if(ctx.indexes()!=null){
        var exps=ctx.indexes().expression();
        val=this.resolveIndexes(val, exps);
      }
      return val;
    }

  // String indexes?                          #stringExpression
  visitStringExpression(ctx:StringExpressionContext):TLValue{
    var text=ctx.text;
    text=text.substr(1,text.length-1).replace("\\\\(.)","$1");
    var val=new TLValue(text);
    if(ctx.indexes()!=null){
      var exps=ctx.indexes().expression();
      val=this.resolveIndexes(val, exps);
    }
    return val;
  }

  // '(' expression ')' indexes?              #expressionExpression
  visitExpressionExpression(ctx:ExpressionExpressionContext):TLValue{
    var val=this.visit(ctx.expression());
    if(ctx.indexes()!=null){
      var exps=ctx.indexes().expression();
      val = this.resolveIndexes(val, exps);
    }
    return val;
  }


   // Input '(' String? ')'                    #inputExpression

   visitInputExpression(ctx:InputExpressionContext):TLValue{
    throw new Error("未实现");
   }
  // assignment
  // : Identifier indexes? '=' expression
  // ;
  visitAssignment(ctx:AssignmentContext):TLValue{
    var v=this.visit(ctx.expression());
    if(ctx.indexes()!=null){
      var val=this.scope.resolve(ctx.Identifier().text,true);
      var exps=ctx.indexes().expression();
      this.setAtIndex(ctx,exps,val,v);

    }else{
      var id=ctx.Identifier().text;
      this.scope.assign(id,v);
    }
    return TLValue.Void;
  }

  //内建函数调用 visitBuildInIdentifierFunctionCall
  visitBuildInIdentifierFunctionCall(
    ctx: BuildInIdentifierFunctionCallContext
  ): TLValue {
    var params = ctx.exprList() != null ? ctx.exprList().expression() : [];
    var id = ctx.BuildIdentifier().text;
    var func: BuildInFunc;

    if ((func = this.buildFunc.get(id)) != null) {
      var args: [any] = [params.length];
      for (var p of args) {
        args.push(this.visit(p));
      }
      return func.invoke(args);
    } else {
      throw new Error("函数未定义" + ctx);
    }
    throw new Error("内建函数调用错误");
  }
  // Identifier '(' exprList? ')' #identifierFunctionCall
  visitIdentifierFunctionCall(ctx: IdentifierFunctionCallContext): TLValue {
    var params = ctx.exprList() != null ? ctx.exprList().expression() : [];
    var id = ctx.Identifier().text + params.length;
    var func: Func;
    if ((func = this.funcs.get(id)) != null) {
      var args: [any] = [params.length];
      for (var p of args) {
        args.push(this.visit(p));
      }
      return func.invoke(args, this.funcs, this.buildFunc);
    } else {
      throw new Error("函数未定义" + ctx);
    }
    throw new Error("函数调用错误");
  }

  // assert 断言表达式
  visitAssertFunctionCall(ctx: AssertFunctionCallContext): TLValue {
    var ret = this.visit(ctx.expression());

    if (!ret.isBoolean) {
      throw new Error("断言类型错误");
    }

    if (!ret.asBoolean) {
      console.error(
        "Assert failed:" + ctx.expression().text + " (:" + ctx.start.line + ")"
      );
    }
    return TLValue.Void;
  }

  //size访问 size()
  visitSizeFunctionCall(ctx: SizeFunctionCallContext): TLValue {
    var ret = this.visit(ctx.expression());
    if (ret.isString) {
      return new TLValue(ret.asString.length);
    }
    if (ret.isList) {
      return new TLValue(ret.asList.length);
    }

    throw new Error("暂时不支持的类型");
  }

  //if 访问
  visitIfStatement(ctx: IfStatementContext): TLValue {
    // if ...
    if (this.visit(ctx.ifStat().expression()).asBoolean) {
      return this.visit(ctx.ifStat().block());
    }

    // else if ...
    for (var i = 0; i < ctx.elseIfStat().length; i++) {
      if (this.visit(ctx.elseIfStat(i).expression()).asBoolean) {
        return this.visit(ctx.elseIfStat(i).block());
      }
    }

    // else ...
    if (ctx.elseStat() != null) {
      return this.visit(ctx.elseStat().block());
    }

    return TLValue.Void;
  }

  // block 块访问
  visitBlock(ctx: BlockContext): TLValue {
    var scope = new Scope(this.scope, false);

    for (var fdx of ctx.functionDecl()) {
      this.visit(fdx);
    }
    for (var sx of ctx.statement()) {
      this.visit(sx);
    }
    var ex = ctx.expression();
    if (ex != null) {
      this.ret.value = this.visit(ex);
      scope = scope.parent;
      throw this.ret;
    }

    this.scope = scope.parent;
    return TLValue.Void;
  }

  //for 循环
  visitForStatement(ctx: ForStatementContext): TLValue {
    var start = this.visit(ctx.expression(0)).asDouble();
    var stop = this.visit(ctx.expression(1)).asDouble();
    for (var i = start; i <= stop; i++) {
      this.scope.assign(ctx.Identifier().text, new TLValue(i));
      var retVal = this.visit(ctx.block());
      if (retVal != TLValue.Void) {
        return retVal;
      }
    }
    return TLValue.Void;
  }
  //while 循环
  visitWhileStatement(ctx: WhileStatementContext): TLValue {
    while (this.visit(ctx.expression()).asBoolean) {
      var ret = this.visit(ctx.block());
      if (ret != TLValue.Void) {
        return ret;
      }
    }
    return TLValue.Void;
  }



  // println("")
  visitPrintlnFunctionCall(ctx: PrintlnFunctionCallContext): TLValue {
    if (ctx.expression() != null) {
      var res = this.visit(ctx.getChild(2));
      console.log(res);
    } else {
      console.log();
    }
    return TLValue.Void;
  }

  // print("")
  visitPrintFunctionCall(ctx: PrintFunctionCallContext): TLValue {
    if (ctx.expression != null) {
      var res = this.visit(ctx.getChild(2));
      console.log(res);
    } else {
      console.log();
    }
    return TLValue.Void;
  }
}
