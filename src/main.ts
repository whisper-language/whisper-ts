import { CharStreams, CommonTokenStream } from "antlr4ts";
import { WhisperLanguageLexer } from "./gen/WhisperLanguageLexer";
import { WhisperLanguageParser } from "./gen/WhisperLanguageParser";
import EvalVititor from "./evalVisitor";
import Scope from "./Scope";

const fs = require("fs");
var input = fs.readFileSync("./case/main.whl", "utf8");
input = `a=1+1;`;

console.log(input);
let inputStream = CharStreams.fromString(input);
let lexer = new WhisperLanguageLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new WhisperLanguageParser(tokenStream);
parser.buildParseTree = true;
let tree = parser.parse();
let scope: Scope = new Scope();
let evalVititor = new EvalVititor(scope, new Map(), new Map());
let ret = evalVititor.visit(tree);
console.log("结果");
console.log(ret);
