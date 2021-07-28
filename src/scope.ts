import TLValue from "./TLValue"

export default class Scope{
    public parent?:Scope
    private variables:Map<String,TLValue>
    private isFunc:Boolean;
    constructor(p?:Scope,isFunc:boolean=false){
        this.parent=p;
        this.isFunc=isFunc;
        this.variables=new Map();
    }
    //赋值变量
    assignParam(vars:String,value:TLValue){
        this.variables.set(vars,value)
    }
    //赋值
    assign( vars:String,  value:TLValue) {
        if(this.resolve(vars, !this.isFunc) != null){
            this.reAssign(vars, value);
        }else{
            this.variables.set(vars,value);
        }
    }
    //重新赋值
    reAssign(vars: String, value: TLValue) {
        if(this.variables.has(vars)){
            this.variables.set(vars,value)
        }else if(this.parent!=null){
            this.parent.reAssign(vars,value);
        }
    }
    //查找变量
    resolve(vars: String, checkParent: boolean=true):TLValue{
        var  value:TLValue|undefined = this.variables.get(vars);
        if(value!=undefined){
            return value;
        }else if(checkParent && !this.isGlobalScope){
            return this.parent!.resolve(vars,!this.parent!.isFunc);
        }else {
            new Error("不应该出现的错误")
            return TLValue.NULL;
        }
    }
    //判断当前作用域是不是顶级作用域
    private  isGlobalScope():Boolean {
        return this.parent == null;
    }
}


