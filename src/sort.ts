import * as vscode from "vscode";

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

function removeBlanks(lines: string[]): void {
  for (let i = 0; i < lines.length; ++i) {
    if (lines[i].trim() === "") {
      lines.splice(i, 1);
      i--;
    }
  }
}

function sortAlgorithm(a: string, b: string): number {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}
