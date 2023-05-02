import React from "react";
import "./App.scss";
import ChessBoard, { BoardInterface } from "./components/Board/Board";
import Cell, { CellInterface } from "./components/Cell/Cell";

export enum Colors {
  white = "white",
  black = "black"
}

export enum FigureTypes {
  pawn = "pawn",
  bishop = "bishop",
  rook = "rook",
  knight = "knight",
  queen = "queen",
  king = "king"
}

function App() {
  return (
    <div className="App">
      <ChessBoard />
    </div>
  );
}

export default App;
