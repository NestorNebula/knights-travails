import { legalMoves } from './legalmoves.js';

export function knightMoves(startSquare, endSquare) {
  const path = search(startSquare[0], startSquare[1], endSquare, []);
  console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
  for (let i = 0; i < path.length; i++) {
    console.log(path[i]);
  }
}

function search(col, row, target, path, faster = Infinity) {
  // If the actual path is longer than the actual best option, don't continue on that path
  if (path.length >= faster) {
    return;
  }

  // If the square was already visited in the path, don't continue
  if (path.some((square) => square[0] === col && square[1] === row)) {
    return;
  }
  let actualPath = [];

  // Copy the path in another array to avoid changing the original path variable
  path.forEach((square) => {
    actualPath.push(square);
  });

  // Add the actual square to the path
  actualPath.push([col, row]);

  // Add all the legal moves for the actual square in nextSquares
  const nextSquares = legalMoves[col][row];

  // If nextSquares includes the target square, add the target to the path and return it
  if (
    nextSquares.some(
      (square) => square[0] === target[0] && square[1] === target[1]
    )
  ) {
    actualPath.push(target);
    return actualPath;
  }

  // Create array to contain all the possible paths for each square in nextSquares
  const paths = [];

  // Keep track of the actual fastest path
  let tempFaster = faster;

  // Call the search function for each square in nextSquares
  nextSquares.forEach((square) => {
    const possiblePath = search(
      square[0],
      square[1],
      target,
      actualPath,
      tempFaster
    );

    // If the square function returned a path, push it to paths
    if (possiblePath) {
      paths.push(possiblePath);

      // If the path if faster than the actual fastest, update tempFaster variable
      if (possiblePath.length < tempFaster) tempFaster = possiblePath.length;
    }
  });
  let fastestPath;
  let fastestPathLength = Infinity;

  // Check the fastest path between all the stored paths
  paths.forEach((validPath) => {
    if (validPath.length < fastestPathLength) {
      fastestPath = validPath;
      fastestPathLength = validPath.length;
    }
  });

  // Return the fastest path
  return fastestPath;
}
