import * as vscode from "vscode";
import sortAttributes from "./sort";

export function activate(context: vscode.ExtensionContext) {
  const commands = [
    vscode.commands.registerCommand("VueAttrSort.sort", sortAttributes)
  ];

  commands.forEach(command => context.subscriptions.push(command));
}
