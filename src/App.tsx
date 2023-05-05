import React, {type ReactNode} from "react";
import "./App.scss";
import ChessBoard from "./components/Board/Board";

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

const App = ():ReactNode => {
  return (
    <div className="App">
      <ChessBoard />
    </div>
  );
}

export default App;
