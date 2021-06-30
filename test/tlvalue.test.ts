import TLValue from "../src/TLValue"

test('value', () => {
    var null1=TLValue.NULL;

    var null2=TLValue.NULL;
    expect(null1).toBe(null2)
    

    var num1=new TLValue(1);

    console.log(num1.isNumber());

    expect(num1.isNumber).toBeTruthy();

})