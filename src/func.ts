import { ParseTree } from "antlr4ts/tree/ParseTree";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import BuildInFunc from "./buildInFunction";
import EvalVititor from "./EvalVisitor";
import Scope from "./Scope";
import TLValue from "./TLValue";

export default class Func{
    parentScope:Scope;
    params:Array<TerminalNode>;
    block:ParseTree;

    constructor(parentScope:Scope,params:Array<TerminalNode>,block:ParseTree){
        this.parentScope=parentScope;
        this.params=params;
        this.block=block;
    }
    
    invoke(args:Array<TLValue>,functions:Map<string,Func>,buildinFunc:Map<String,BuildInFunc>):TLValue{
        if(args.length!=this.params.length){
            new Error("参数错误")
        }
        var scopeNext:Scope=new Scope(this.parentScope,true);
        for(var i=0;i<this.params.length;i++){
            var v=args[i];
            scopeNext.assignParam(this.params[i].text, v);
        }
        var evalVititor:EvalVititor=new EvalVititor(scopeNext,functions,buildinFunc);
        var ret=TLValue.Void;
        try{
            evalVititor.visit(this.block);
        }catch(e){
            
        }
        return ret;

    }
}