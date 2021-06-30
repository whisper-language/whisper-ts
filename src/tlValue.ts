import { Comparable, Equatable } from "antlr4ts/misc/Stubs";

export default class TLValue implements Comparable<TLValue>,Equatable {

    
    public static  NULL:TLValue= new TLValue();
    
    public static  Void:TLValue= new TLValue();

    value:any;

    constructor(v:any=new Object){
        if(v==null){
            new Error("v 不能为 null")
        }
        this.value=v;
    }
    //判断是否相等
    equals(other: any): boolean {
        throw new Error("Method not implemented.");
    }
    //判断hashcode
    hashCode(): number {
        throw new Error("Method not implemented.");
    }

    //转换为 null
    public asBoolean():boolean{
        return !!this.value;
    }
    //转换为 double
    public asDouble():number{
        return this.value
    }
    public asLong():number{
        return this.value
    }
    public asInt():number{
        return Math.trunc(this.value);
    }
    public asByte(){
        return this.value
    }
    public asList():[]{
        //TODO 
        return this.value;
    }
    public asString():string{
        //TODO
        return this.value+"";
    }
    //判断是否为数字
    isNumber():boolean {
       return typeof this.value==='number';
    }

    compareTo(o: TLValue): number {
        throw new Error("Method not implemented.");
    }


        //转换为 null
    public isBoolean():boolean{
        return typeof this.value==='boolean';
    }
    //转换为 double
    public isDouble():boolean{
          //TODO 
        return typeof this.value==='number';
    }
    public isLong():boolean{
          //TODO 
        return typeof this.value==='number';
    }
    public isInt():boolean{
          //TODO 
        return typeof this.value==='number';
    }
    public isByte():boolean{
        //TODO 
        return typeof this.value==='number';
    }
    public isList():boolean{
        return Array.isArray(this.value);
    }
    public isString():boolean{
        return typeof this.value==='string';
    }

    public isNull():boolean{
        return this.value==TLValue.NULL.value;
    }
    public isVoid():boolean{
        return this.value==TLValue.Void.value;
    }

    public toString():string{
        return this.value+"";
    }
    
    
}