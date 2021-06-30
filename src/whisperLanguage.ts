import { CharStreams, CommonTokenStream } from "antlr4ts";
import { WhisperLanguageLexer } from "./gen/WhisperLanguageLexer";
import { ParseContext, WhisperLanguageParser } from "./gen/WhisperLanguageParser";
import EvalVititor from "./evalVisitor";
import Scope from "./Scope";
import TLValue from "./TLValue";



export default class WhisperLanguage {
    
    eval:EvalVititor;
    
    tree:ParseContext;

    constructor(source:string){
        let inputStream = CharStreams.fromString(source);
        let lexer = new WhisperLanguageLexer(inputStream);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new WhisperLanguageParser(tokenStream);
        parser.buildParseTree = true;
        this.tree= parser.parse();
        let scope: Scope = new Scope();
        this.eval = new EvalVititor(scope, new Map(), new Map());
    }

    run():TLValue{
        return this.eval.visit(this.tree);
    }
}
