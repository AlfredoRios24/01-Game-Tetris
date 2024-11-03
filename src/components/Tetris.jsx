import "./Tetris.css";

import Board from "./Board.jsx";
import GameController from "./GameController.jsx";
import GameStats from "./GameStats.jsx"
import Previews from "./Previews.jsx"

import {useBoard} from "../hooks/useBoard.js"
import {useGameStats} from "../hooks/useGameStats.js"
import { usePlayer } from "../hooks/usePlayer.js";

    const Tetris = ({ rows, columns, setGameOver }) => {
        const [gameStats, addLinesCleared] = useGameStats();
        const [player, setPlayer, resetPlayer] = usePlayer();
        const [board, setBoard] = useBoard({
        rows,
        columns,
        player,
        resetPlayer,
        addLinesCleared
        });
    
        return (
        <div className="Tetris">
            <Board board={board} />
            <GameStats gameStats={gameStats} />
            <Previews tetrominoes={player.tetrominoes} />
            <GameController
            board={board}
            gameStats={gameStats}
            player={player}
            setGameOver={setGameOver}
            setPlayer={setPlayer}
            />
        </div>
        );
    };
    
    export default Tetris;
    