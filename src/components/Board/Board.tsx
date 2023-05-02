import React from "react";
import Cell, { CellInterface } from "../Cell/Cell";
import { Colors, FigureTypes } from "../../App";

export interface BoardInterface {
  cells: CellInterface[][];
}

const ChessBoard = () => {
  const board = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let figure;
      if (i == 1) {
        figure = { color: Colors.black, type: FigureTypes.pawn };
      } else if (i == 6) {
        figure = { color: Colors.white, type: FigureTypes.pawn };
      } else if (i == 0) {
        if (j == 0 || j == 7) {
          figure = { color: Colors.black, type: FigureTypes.rook };
        } else if (j == 1 || j == 6) {
          figure = { color: Colors.black, type: FigureTypes.knight };
        } else if (j == 2 || j == 5) {
          figure = { color: Colors.black, type: FigureTypes.bishop };
        } else if (j == 3) {
          figure = { color: Colors.black, type: FigureTypes.queen };
        } else figure = { color: Colors.black, type: FigureTypes.king };
      } else if (i == 7) {
        if (j == 0 || j == 7) {
          figure = { color: Colors.white, type: FigureTypes.rook };
        } else if (j == 1 || j == 6) {
          figure = { color: Colors.white, type: FigureTypes.knight };
        } else if (j == 2 || j == 5) {
          figure = { color: Colors.white, type: FigureTypes.bishop };
        } else if (j == 3) {
          figure = { color: Colors.white, type: FigureTypes.queen };
        } else figure = { color: Colors.white, type: FigureTypes.king };
      }

      board.push(<Cell row={i} column={j} color={(i + j) % 2 == 0 ? Colors.white : Colors.black} figure={figure} />);
    }
  }

  return <div className="chess-board">{board}</div>;
};

export default ChessBoard;
