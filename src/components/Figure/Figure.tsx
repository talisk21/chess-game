import React from "react";
import { Colors, FigureTypes } from "../../App";

export interface FigureInterface {
  row: number;
  column: number;
  figureColor: Colors;
  type: FigureTypes;
}

const Figure = ({ row, column, figureColor, type }: FigureInterface) => {
  return <div className={`figure ${type} ${type}-${figureColor}`}></div>;
};

export default Figure;
