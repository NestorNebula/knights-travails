# knights-travails

## Description

This project's goal is to build a function that print the shortest possible way (with all traversed squares) for a chess knight to get from a square to another.

The projects contains 3 JS files.

### index.js

- Import the knightMoves function from knightmoves.js
- Test it with an example

### knightmoves.js

- Import the legalMoves array from legalMoves.js
- Export the function knightMoves
- The knightMoves function requires a startSquare and an EndSquare argument (format: [*1*, *2*])
- The knightMoves function calls the search function that returns (one of) the fastest path between the two squares
- After receiving the path form the search function, knightMoves log the number of moves and the path

### legalmoves.js

- Use the appendMoves function to create adjacency lists (one list by row) of all possible moves (next squares) for each square in the board
- The function appendMoves uses a checkMove function to check if a move is legal (avoiding moves over the board)
- Store all the lists in the legalMoves array
- Export legalMoves
