import TLValue from "./TLValue"

export default class ReturnValue {
    constructor(){
        this.value=TLValue.NULL;
    }
    value:TLValue;
}