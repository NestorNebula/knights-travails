import { legalMoves } from './legalmoves.js';

export function knightMoves(startSquare, endSquare) {
  const col = startSquare[0];
  const row = startSquare[1];
  const path = [];
  return search(col, row, endSquare, path);
}

function search(col, row, target, path, faster = Infinity) {
  if (path.length >= faster) {
    return;
  }
  if (path.some((square) => square[0] === col && square[1] === row)) {
    return;
  }
  let actualPath = [];
  path.forEach((square) => {
    actualPath.push(square);
  });
  actualPath.push([col, row]);
  const nextSquares = legalMoves[col][row];
  if (
    nextSquares.some(
      (square) => square[0] === target[0] && square[1] === target[1]
    )
  ) {
    actualPath.push(target);
    return actualPath;
  }
  const paths = [];
  let tempFaster = faster;
  nextSquares.forEach((square) => {
    const possiblePath = search(
      square[0],
      square[1],
      target,
      actualPath,
      tempFaster
    );
    if (possiblePath) {
      paths.push(possiblePath);
      if (possiblePath.length < tempFaster) tempFaster = possiblePath.length;
    }
  });
  let fastestPath;
  let fastestPathLength = Infinity;
  paths.forEach((validPath) => {
    if (validPath.length < fastestPathLength) {
      fastestPath = validPath;
      fastestPathLength = validPath.length;
    }
  });
  return fastestPath;
}
