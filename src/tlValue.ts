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
    public asBoolean(){
        throw new Error("Method not implemented.");
    }
    //转换为 double
    public asDouble(){
        throw new Error("Method not implemented.");
    }
    public asLong(){
        throw new Error("Method not implemented.");
    }
    public asInt(){
        throw new Error("Method not implemented.");
    }
    public asByte(){
        throw new Error("Method not implemented.");
    }
    public asList(){
        throw new Error("Method not implemented.");
    }
    public asString(){
        throw new Error("Method not implemented.");
    }

    compareTo(o: TLValue): number {
        throw new Error("Method not implemented.");
    }


        //转换为 null
    public isBoolean(){
        throw new Error("Method not implemented.");
    }
    //转换为 double
    public isDouble(){
        throw new Error("Method not implemented.");
    }
    public isLong(){
        throw new Error("Method not implemented.");
    }
    public isInt(){
        throw new Error("Method not implemented.");
    }
    public isByte(){
        throw new Error("Method not implemented.");
    }
    public isList(){
        throw new Error("Method not implemented.");
    }
    public isString(){
        throw new Error("Method not implemented.");
    }
    
    
}