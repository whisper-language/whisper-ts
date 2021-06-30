import { CharStreams, CommonTokenStream } from "antlr4ts";
import { WhisperLanguageLexer } from "./gen/WhisperLanguageLexer";
import { WhisperLanguageParser } from "./gen/WhisperLanguageParser";
import EvalVititor from "./evalVisitor";
import Scope from "./Scope";



export default class WhisperLanguage {
    constructor(source:string){
        let inputStream = CharStreams.fromString(source);
        let lexer = new WhisperLanguageLexer(inputStream);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new WhisperLanguageParser(tokenStream);
        parser.buildParseTree = true;
        let tree = parser.parse();
        let scope: Scope = new Scope();
        let evalVititor = new EvalVititor(scope, new Map(), new Map());
        let ret = evalVititor.visit(tree);
        console.log(ret);
    }
}
