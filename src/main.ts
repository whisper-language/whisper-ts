
import { ANTLRInputStream, CharStreams, CommonTokenStream } from 'antlr4ts';
import {WhisperLanguageLexer} from "./gen/WhisperLanguageLexer";
import  {WhisperLanguageParser} from "./gen/WhisperLanguageParser";
import EvalVititor from "./evalVisitor";
import Scope from './Scope';

const fs = require('fs');
const input = fs.readFileSync('./case/main.whl', 'utf8')
let inputStream =CharStreams.fromString(input);
let lexer = new WhisperLanguageLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new WhisperLanguageParser(tokenStream);
let tree = parser.parse();
let scope:Scope=new Scope();
let evalVititor=new EvalVititor(scope,new Map(),new Map());
evalVititor.visit(tree);