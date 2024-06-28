const legalMoves = [];

appendMoves(legalMoves);

function appendMoves(array) {
  for (let i = 0; i < 8; i++) {
    const colMoves = [];
    for (let j = 0; j < 8; j++) {
      const squareMoves = [];
      const col = i;
      const row = j;
      checkMove(squareMoves, col - 2, row + 1);
      checkMove(squareMoves, col - 1, row + 2);
      checkMove(squareMoves, col + 1, row + 2);
      checkMove(squareMoves, col + 2, row + 1);
      checkMove(squareMoves, col + 2, row - 1);
      checkMove(squareMoves, col + 1, row - 2);
      checkMove(squareMoves, col - 1, row - 2);
      checkMove(squareMoves, col - 2, row - 1);
      colMoves.push(squareMoves);
    }
    legalMoves.push(colMoves);
  }
}

export { legalMoves };
