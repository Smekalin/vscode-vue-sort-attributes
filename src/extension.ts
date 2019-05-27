import * as vscode from "vscode";
import sortAttributes from "./sort";

export function activate(context: vscode.ExtensionContext) {
  console.log("activated");
  const commands = [
    vscode.commands.registerCommand("VueAttrSort.sort", sortAttributes)
  ];

  commands.forEach(command => context.subscriptions.push(command));
}
