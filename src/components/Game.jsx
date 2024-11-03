import Menu from './Menu.jsx'
import Tetris from './Tetris.jsx'

import { useGameOver } from '../hooks/useGameOver.js';


    const Game = ({ rows, columns }) => {
        const [gameOver, setGameOver, resetGameOver] = useGameOver();
    
        const start = () => resetGameOver();
    
        return (
        <div className="Game">
            {gameOver ? (
            <Menu onClick={start} />
            ) : (
            <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
            )}
        </div>
        );
    };
    
    export default Game;
