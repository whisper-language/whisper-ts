import { Override } from "antlr4ts/Decorators";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { idText, isEnumMember, ListFormat } from "typescript";
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
    console.log("获取默认值");
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
    var params = ctx.idList()?.Identifier()??[];
    var block = ctx.block();
    var id = ctx.Identifier().text + params.length;
    this.funcs.set(id, new Func(this.scope, params, block));
    return TLValue.Void;
  }
  // list: '[' exprList? ']'
  visitList_Alias(ctx: List_AliasContext): TLValue {
    var list = [];
    if (ctx.exprList() != null) {
      for (const ex of ctx.exprList()?.expression()??[]) {
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
      var total:Array<any> = []; 
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
      return new TLValue(left.asDouble() % right.asDouble());
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
    throw new Error("error")
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
    throw new Error("error")
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
    throw new Error("error")
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
  visitBoolExpression(ctx:BoolExpressionContext):TLValue{
      return new TLValue(ctx.text.toLocaleLowerCase()=="true");
  }

  // Null                                     #nullExpression
  visitNullExpression(ctx:NullExpressionContext):TLValue {
      return TLValue.NULL;
  }



  //TODO ================================================================================ resolveIndexes




  visitIdentifierExpression(ctx: IdentifierExpressionContext): TLValue {
    console.log("id");
    return new TLValue(1);
  }



  // println("")
  visitPrintlnFunctionCall(ctx: PrintlnFunctionCallContext): TLValue {
    if (ctx.expression != null) {
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
