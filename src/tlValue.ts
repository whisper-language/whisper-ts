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
        throw new Error("Method not implemented.");
    }
    //转换为 double
    public asDouble():number{
        throw new Error("Method not implemented.");
    }
    public asLong():number{
        throw new Error("Method not implemented.");
    }
    public asInt():number{
        throw new Error("Method not implemented.");
    }
    public asByte(){
        throw new Error("Method not implemented.");
    }
    public asList():[]{
        throw new Error("Method not implemented.");
    }
    public asString():string{
        throw new Error("Method not implemented.");
    }
    //判断是否为数字
    isNumber():boolean {
        throw new Error('Method not implemented.');
    }

    compareTo(o: TLValue): number {
        throw new Error("Method not implemented.");
    }


        //转换为 null
    public isBoolean():boolean{
        throw new Error("Method not implemented.");
    }
    //转换为 double
    public isDouble():boolean{
        throw new Error("Method not implemented.");
    }
    public isLong():boolean{
        throw new Error("Method not implemented.");
    }
    public isInt():boolean{
        throw new Error("Method not implemented.");
    }
    public isByte():boolean{
        throw new Error("Method not implemented.");
    }
    public isList():boolean{
        throw new Error("Method not implemented.");
    }
    public isString():boolean{
        throw new Error("Method not implemented.");
    }

    public isNull():boolean{
        return this.value==TLValue.NULL.value;
    }
    public isVoid():boolean{
        return this.value==TLValue.Void.value;
    }

    public toString():string{
        throw new Error("Method not implemented.");
    }
    
    
}