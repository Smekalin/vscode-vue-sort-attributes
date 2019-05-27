import * as vscode from "vscode";
import { sortAlgorithm } from "./helpers/algorithm";
import { removeBlanks, insertBracket } from "./helpers/editing";

export default function sortActiveSelection(
  removeDuplicateValues: boolean
): Thenable<boolean> | undefined {
  const textEditor = vscode.window.activeTextEditor;
  if (!textEditor) return undefined;
  const selection = textEditor.selection;

  if (selection.isSingleLine) {
    return undefined;
  }

  return sortLines(textEditor, selection.start.line, selection.end.line);
}

function sortLines(
  textEditor: vscode.TextEditor,
  startLine: number,
  endLine: number
): Thenable<boolean> {
  const lines: string[] = [];
  for (let i = startLine; i <= endLine; i++) {
    lines.push(textEditor.document.lineAt(i).text);
  }

  lines.sort(sortAlgorithm);
  removeBlanks(lines);
  insertBracket(lines);

  return textEditor.edit(editBuilder => {
    const range = new vscode.Range(
      startLine,
      0,
      endLine,
      textEditor.document.lineAt(endLine).text.length
    );
    editBuilder.replace(range, lines.join("\n"));
  });
}
