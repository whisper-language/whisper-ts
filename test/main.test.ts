import TLValue from "../src/TLValue"
import WhisperLanguage from "../src/whisperLanguage";

test('main', () => {
    const fs = require("fs");
    var input = fs.readFileSync("./case/main.whl", "utf8");
    input = `println(20+3);`;
    var wl=new WhisperLanguage(input);
})