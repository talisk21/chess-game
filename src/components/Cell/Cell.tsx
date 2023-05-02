import React from "react";
import { Colors, FigureTypes } from "../../App";
import Figure from "../Figure/Figure";

export interface CellInterface {
  row: number;
  column: number;
  color: Colors;
  figure?: {
    type: FigureTypes;
    color: Colors;
  };
}

const Cell = (props: CellInterface) => {
  const { row, column, color, figure } = props;
  return (
    <div className={`cell cell-${color} row-${row} column-${column}`}>
      {figure && <Figure {...props} type={figure?.type} figureColor={figure.color} />}
    </div>
  );
};

export default Cell;
