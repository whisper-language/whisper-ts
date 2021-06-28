import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";

export default  class AbstractParseTreeVisitor<T> implements ParseTreeVisitor<T> {
    visit(tree: ParseTree): T {
        return tree.accept(this);
    }
    visitChildren(node: RuleNode): T {
        throw new Error("Method not implemented.");
    }
    visitTerminal(node: TerminalNode): T {
        throw new Error("Method not implemented.");
    }
    visitErrorNode(node: ErrorNode): T {
        throw new Error("Method not implemented.");
    }
   
}