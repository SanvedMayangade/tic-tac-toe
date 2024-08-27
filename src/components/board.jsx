import React, { useState, useEffect } from "react";
import Square from "./square";


const Board = () => {
    const [value, setValue] = useState(Array(9).fill(null));
    const [isXturn, setXturn] = useState(true);

    const checkWinner = () => {
        const winner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let item of winner) {
            const [a, b, c] = item;
            if (value[a] != null && value[b] != null && value[c] != null) {
                // console.log(value[a], value, value[c]);

                if (value[a] === value[b] && value[a] === value[c]) {
                    return true
                }
            }
        }
    };

    const isWinner = checkWinner();

    const handleClick = (index) => {
        const copystate = [...value]
        copystate[index] = isXturn ? "o" : "x";
        setValue(copystate)
        setXturn(!isXturn)
    };
    return (

        <div >
            {isWinner ? (<h1 style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white"
            }} > Someone won </h1>)
                : (
                    <div><h1 style={{
                        margin: "30px 200px"
                    }}
                    >Tic Tac Toe</h1>
                        <div className="board-container">
                            <div className="board-row">
                                <Square onClick={() => { handleClick(0) }} value={value[0]} />
                                <Square onClick={() => { handleClick(1) }} value={value[1]} />
                                <Square onClick={() => { handleClick(2) }} value={value[2]} />
                            </div>
                            <div className="board-row">
                                <Square onClick={() => { handleClick(3) }} value={value[3]} />
                                <Square onClick={() => handleClick(4)} value={value[4]} />
                                <Square onClick={() => handleClick(5)} value={value[5]} />
                            </div>
                            <div className="board-row">
                                <Square onClick={() => handleClick(6)} value={value[6]} />
                                <Square onClick={() => handleClick(7)} value={value[7]} />
                                <Square onClick={() => handleClick(8)} value={value[8]} />
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Board