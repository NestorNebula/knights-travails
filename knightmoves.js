import { legalMoves } from './legalmoves.js';

export function knightMoves(startSquare, endSquare) {
  const col = startSquare[0];
  const row = startSquare[1];
  const path = [];
  return search(col, row, endSquare, path);
}
