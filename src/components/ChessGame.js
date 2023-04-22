import React, { useState, useEffect } from "react";
import { Chess } from "chess.js";
import Chessboard from "chessboardjsx";
import styled from 'styled-components';
import axios from "axios";
import '../styles/ChessButton.css'

const ChessOuterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
`;

const ChessContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: ${({ isMenuOpen }) => isMenuOpen ? 'calc(28% + 70px)' : '28%'};
    // box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    padding: 20px;
    border-radius: 10px;

    @media (max-width: 1400px) {
        width: 40%;
    }

    @media (max-width: 768px) {
        width: 90%;
    }
`;

const ChessBoardEvalContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const EvalBar = styled.div`
    width: 10px;
    height: 100%;
    background-color: ${({ result }) => result > 0 ? "green" : "red"};
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    gap: 20px;
    margin-top: 10px;
`;

const ChessGameHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 100%;
`;

const ChessGameHeaderLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ChessGameHeaderRight = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.1rem;
`;


const ChessGameControl = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
`;

const ChessGameBulletIcon = styled.img`
    width: 27px;
    height: 27px;

    @media (max-width: 768px) {
        width: 24px;
        height: 24px;
    }
`;

const ChessGameBlitzIcon = styled.img`
    width: 15px;
    height: 30px;

    @media (max-width: 768px) {
        width: 14px;
        height: 28px;
    }
`;

const ChessGameRapidIcon = styled.img`
    width: 27px;
    height: 27px;

    @media (max-width: 768px) {
        width: 24px;
        height: 24px;
    }
`;

const ChessGameTimeControl = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    opacity: 0.8;
`;

const ChessGameDate = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    margin: 0;
    margin-top: 5px;
    opacity: 0.8;
`;

const ChessGameTime = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    margin: 0;
    opacity: 0.8;
`;

const ChessGameResult = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    margin: 0;
    opacity: 0.8;
    align-self: flex-end;

    color: ${({ result }) => result === "win" ? "#9ED15D" : result === "stalemate" ? "#E3C95F" : result === "timevsinsufficient" ? "#E3C95F" : "#CC4E44"};
`;

const ChessInfoMessage = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: .8rem;
    margin: 0;
    margin-top: 15px;
    opacity: 0.6;
`;

//convert string yyyy.mm.dd to date string dd, month yyyy
const convertDate = (date) => {
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);
    const monthString = new Date(year, month - 1, day).toLocaleString('default', { month: 'long' });
    return day + " " + monthString + " " + year;
}

const unixTimeToString = (unixTime) => {
    const date = new Date(unixTime * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    
    // convert hours to 12 hour format
    const hours12 = hours % 12 || 12;
    const ampm = hours >= 12 ? 'pm' : 'am';
    
    return hours12 + ':' + minutes.substr(-2) + ampm;
}

const convertTimeControl = (timeControl) => {
    const timeArr = timeControl.split("+");
    const timeInit = timeArr[0] / 60;
    const increment = timeArr[1];

    if (increment === "0" || increment === undefined) {
        return timeInit + " min";
    } else {
        return timeInit + " + " + increment;
    }
}

const convertResultString = (result) => {
    if (result === "timevsinsufficient") {
        return "Time vs Insufficient";
    }

    return result.charAt(0).toUpperCase() + result.slice(1);
}

const ChessGame = ({ isMenuOpen }) => {
    const [game, setGame] = useState(new Chess());
    const [games, setGames] = useState([]);
    const [gameIndex, setGameIndex] = useState(-1);
    const [fen, setFen] = useState("start");
    const [history, setHistory] = useState([]);
    const [currentMove, setCurrentMove] = useState(0);
    const [reverse, setReverse] = useState(true);
    const myUsername = "Sevstad";
    const [gameType, setGameType] = useState("bullet");
    const [timeControl, setTimeControl] = useState("1+0");
    const [myRating, setMyRating] = useState(0);
    const [opponentRating, setOpponentRating] = useState(0);
    const [opponent, setOpponent] = useState("");
    const [orientation, setOrientation] = useState("white");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        getLastPlayedGame();
        // initStockfish();
    }, []);
      

    const loadGame = (game) => {
        const pgn = game.pgn;
        const fen = game.fen;
        const opp = game.white.username === myUsername ? game.black.username : game.white.username;
        const newGame = new Chess();
        let date = pgn.split("[Date ")[1].split("]")[0];
        const dateArr = date.split('"');
        date = dateArr[1];
        const res = game.white.username === myUsername ? game.white.result : game.black.result;
        const time_control = convertTimeControl(game.time_control);
        const time = unixTimeToString(game.end_time);



        newGame.loadPgn(pgn);

        setGame(newGame);
        setHistory(newGame.history({ verbose: true }));
        setFen(fen);
        setOpponent(opp);
        setGameType(game.time_class);
        setTimeControl(time_control);
        setMyRating(game.white.username === myUsername ? game.white.rating : game.black.rating);
        setOpponentRating(game.white.username === myUsername ? game.black.rating : game.white.rating);
        setOrientation(game.white.username === myUsername ? "white" : "black");
        setCurrentMove(newGame.history().length);
        setDate(date);
        setTime(time);
        setResult(res);
    }

    const getLastPlayedGame = async () => {
        const response = await axios.get(
            `https://api.chess.com/pub/player/${myUsername}/games/archives`
        );
        const archivesUrl = response.data.archives.pop();
        const gamesResponse = await axios.get(archivesUrl);
        const games = gamesResponse.data.games;
        setGames(games);
        setGameIndex(games.length - 1);
        const lastGame = games[games.length - 1];
    
        if (lastGame) {
            loadGame(lastGame);
        }
    };

    const onLastGame = () => {
        if (gameIndex > 0) {
            setGameIndex(gameIndex - 1);
            loadGame(games[gameIndex - 1]);
        }
    };
    
    const onNextGame = () => {
        if (gameIndex < games.length - 1) {
            setGameIndex(gameIndex + 1);
            loadGame(games[gameIndex + 1]);
        }
    };

    // reset the current game to the start if one is in progress
    const onReset = () => {
        const fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
        game.load(fen);
        setFen(fen);
        setCurrentMove(0);
    };

    const onPlayMove = (forward) => {
        if (forward) { 
            if (currentMove < history.length) {
                const move = history[currentMove];
                try {
                    game.move(move);
                    setFen(game.fen());
                    setCurrentMove(currentMove + 1);
                } catch (e) {
                    console.log(e);
                }
            }
        } else {
            if (currentMove > 0) {
                setCurrentMove(currentMove - 1);
                const move = history[currentMove - 1];
                game.undo();
                setFen(game.fen());
            }
        }
        setReverse(!reverse);
    };

    // call next move when left/right arrow is pressed
    const handleKeyDown = (event) => {
        if (event.keyCode === 37) {
            onPlayMove(false);
        } else if (event.keyCode === 39) {
            onPlayMove(true);
        }
    };

    const getChessIcon = (control) => {
        if (control === "bullet") {
            return <ChessGameBulletIcon src={require("../images/bulletIcon.png")} alt="time control icon" />;
        } else if (control === "blitz") {
            return <ChessGameBlitzIcon src={require("../images/blitzIcon.png")} alt="time control icon" />;
        } else if (control === "rapid") {
            return <ChessGameRapidIcon src={require("../images/rapidIcon.png")} alt="time control icon" />;
        }
        return <></>;
    };


    // handle keydown event
    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    });

    return (
        <ChessOuterContainer>
            {game ? (

            <ChessContainer isMenuOpen={isMenuOpen}>
                <ChessGameHeaderContainer>
                    <ChessGameHeaderLeft>
                        {getChessIcon(gameType)}
                        <ChessGameControl>{gameType.charAt(0).toUpperCase() + gameType.slice(1)}</ChessGameControl>
                        <ChessGameTimeControl>({timeControl})</ChessGameTimeControl>
                    </ChessGameHeaderLeft>
                    <ChessGameHeaderRight>
                        <ChessGameDate>{convertDate(date)}</ChessGameDate>
                        <ChessGameTime>{time}</ChessGameTime>
                    </ChessGameHeaderRight>
                </ChessGameHeaderContainer>
                
                <ChessGameResult result={result}>{convertResultString(result)}</ChessGameResult>
                <h2 style={{alignSelf: 'flex-start'}}>{opponent} ({opponentRating})</h2>
                <ChessBoardEvalContainer>
                    <Chessboard
                        position={fen}
                        // change width when screen is smaller
                        width={window.innerWidth < 600 ? window.innerWidth - 100 : 400}
                        orientation={orientation}
                        lightSquareStyle={{ backgroundColor: '#eeeed2' }}
                        darkSquareStyle={{ backgroundColor: '#769656' }}
                        dropOffBoard={'snapback'}
                    />
                </ChessBoardEvalContainer>
                
                <h2 style={{alignSelf: 'flex-end'}}>Me ({myRating})</h2>
                <ButtonContainer>
                    <button onClick={() => onPlayMove(false)} className="chess-button">
                        <div class="arrow-wrapper">
                            <div class="arrow left"></div>
                        </div>
                        Previous
                    </button>
                    <button onClick={() => onReset()} className="chess-button">
                        Reset
                    </button>
                    <button onClick={() => onPlayMove(true)} className="chess-button">
                        Next
                        <div class="arrow-wrapper">
                            <div class="arrow"></div>
                        </div>
                    </button>
                </ButtonContainer>
                <ButtonContainer style={{marginTop: '20px', gap: '40px'}}>
                    <button onClick={() => onLastGame()} className="chess-button">
                        {/* <div class="arrow-wrapper"> */}
                            {/* <div class="arrow left"></div> */}
                        {/* </div> */}
                        Last Game
                    </button>
                    <button onClick={() => onNextGame()} className="chess-button">
                        Next Game
                        {/* <div class="arrow-wrapper"> */}
                            {/* <div class="arrow"></div> */}
                        {/* </div> */}
                    </button>
                </ButtonContainer>

                <ChessInfoMessage>
                    Use the arrow keys to navigate through the moves
                </ChessInfoMessage>

            </ChessContainer>) : (
                <p>No game found</p>
            )}
        </ChessOuterContainer>
    );
};

export default ChessGame;
