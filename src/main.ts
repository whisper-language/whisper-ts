
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import {WhisperLanguageLexer} from "./gen/WhisperLanguageLexer";
import  {WhisperLanguageParser} from "./gen/WhisperLanguageParser";

let inputStream = new ANTLRInputStream("text");
let lexer = new WhisperLanguageLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new WhisperLanguageParser(tokenStream);
let tree = parser.parse();