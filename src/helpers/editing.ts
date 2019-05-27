export function removeBlanks(lines: string[]): void {
  for (let i = 0; i < lines.length; ++i) {
    if (lines[i].trim() === "") {
      lines.splice(i, 1);
      i--;
    }
  }
}

export function insertBracket(lines: string[]): void {
  let hasBracket = false;
  for (let i = 0; i < lines.length; ++i) {
    if (lines[i].substr(-1) === ")") {
      hasBracket = true;
      lines[i] = lines[i].slice(0, lines[i].length - 1);
      break;
    }
  }
  if (hasBracket) lines[lines.length - 1] = `${lines[lines.length - 1]})`;
}
