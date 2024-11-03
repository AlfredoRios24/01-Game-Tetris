import "./Preview.css";
import React from "react";

import { buildBoard } from "../business/Board.js";
import { transferToBoard } from "../business/Tetromiones.js";

import BoardCell from "./BoardCell.jsx";


    const Preview = ({ tetromino, index }) => {
        const { shape, className } = tetromino;
    
        const board = buildBoard({ rows: 4, columns: 4 });
    
        const style = { top: `${index * 15}vw` };
    
        board.rows = transferToBoard({
        className,
        isOccupied: false,
        position: { row: 0, column: 0 },
        rows: board.rows,
        shape
        });
    
        return (
        <div className="Preview" style={style}>
            <div className="Preview-board">
            {board.rows.map((row, y) =>
                row.map((cell, x) => (
                <BoardCell key={x * board.size.columns + x} cell={cell} />
                ))
            )}
            </div>
        </div>
        );
    };
    
    export default React.memo(Preview);
