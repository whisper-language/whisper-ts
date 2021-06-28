import TLValue from "./TLValue";

export default interface BuildInFunc{
    invoke(argv:Array<TLValue>):TLValue;
}