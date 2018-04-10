/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */
// @flow
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 759a17125b1ed059d2fb023af9fc82372a292afb
=======
>>>>>>> 759a17125b1ed059d2fb023af9fc82372a292afb
export function getIndentation(line) {
  if (!line) {
    return 0;
  }
  return line.match(/^\s*/)[0].length;
}

function getMaxIndentation(lines) {
  const firstLine = lines[0];
  const secondLine = lines[1];
  const lastLine = lines[lines.length - 1];

  const indentations = [
    getIndentation(firstLine),
    getIndentation(secondLine),
    getIndentation(lastLine)
  ];

  return Math.max(...indentations);
}

export function correctIndentation(text) {
  const lines = text.trim().split("\n");
  const indentation = getMaxIndentation(lines);
  const formattedLines = lines.map(_line =>
    _line.replace(new RegExp(`^\\s{0,${indentation - 1}}`), "")
  );

  return formattedLines.join("\n");
}
