import React, { useState, useEffect, useCallback } from "react";
import { Chess } from "chess.js";
import Chessboard from "chessboardjsx";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import ChessLoader from "./ChessLoader";
import styled from 'styled-components';
import axios from "axios";
import '../styles/Buttons.css';

const LoadingContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    maring-top: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;


const ChessOuterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    // overflow: hidden;
    // border: 1px solid #ccc;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const ChessContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 29%;
    margin-left: 150px;
    padding: 20px;
    border-radius: 10px;

    @media (max-width: 1400px) {
        width: 40%;
    }
    
    @media (max-width: 768px) {
        width: 90%;
        margin-left: 0px;
        margin-top: 10px;
    }
`;

const ChessBoardView = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: top;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const ChessBoardContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
    }
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

const ChessGameWinRate = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    margin-top: -30px;
    margin-left: 10px;
    text-align: left;
    align-self: flex-start;
`;

const ChessGameWinRateColor = styled.span`
    color: ${({ winRate }) => winRate >= 50 ? "#9ED15D" : "#CC4E44"};
`;

const ChessGameWinRateInfo = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 0.8rem;
    margin: 0;
    opacity: 0.6;
    align-self: flex-end;
    text-align: left;
`;

const ChessInfoMessage = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: .8rem;
    margin: 0;
    margin-top: 15px;
    opacity: 0.6;
`;

const LineChartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
    margin-left: -20px;

    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        margin-left: -30px;
    }
`;

const chessUsername = "Sevstad";

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

const determineWinOrLoss = (game) => {
    // determine which user is me
    const white = game.white.username;
    const black = game.black.username;
    const me = white === chessUsername ? white : black;

    const result = me === white ? game.white.result : game.black.result;
    
    if (result === "win") {
        return "win";
    } else if (result === "loss" || result === "resigned" || result === "timeout" || result === "abandoned" || result === "checkmated") {
        return "loss";
    }

    return "draw";
} 

const calculateWinRate = (games) => {
    let wins = 0;
    let losses = 0;
    let draws = 0;
    
    games.forEach(game => {
        const result = determineWinOrLoss(game);
        if (result === "win") {
            wins++;
        } else if (result === "loss") {
            losses++;
        } else {
            draws++;
        }
    });

    const totalGames = wins + losses + draws;
    const winRate = ((wins) / totalGames) * 100;
    return winRate.toFixed(1);
}

const getChartData = (games) => {
    let wins = 0;
    let losses = 0;
    let chartData = [];

    games.forEach(game => {
        const result = determineWinOrLoss(game);

        if (result === "win") {
            wins++;
        } else if (result === "loss") {
            losses++;
        }

        chartData.push({ gamesPlayed: chartData.length + 1, wins, losses });
    });

    return chartData;
}

const ChessGame = ({ isMenuOpen }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [game, setGame] = useState(new Chess());
    const [games, setGames] = useState([]);
    const [gameIndex, setGameIndex] = useState(-1);
    const [fen, setFen] = useState("start");
    const [history, setHistory] = useState([]);
    const [currentMove, setCurrentMove] = useState(0);
    const [reverse, setReverse] = useState(true);
    const [gameType, setGameType] = useState("bullet");
    const [timeControl, setTimeControl] = useState("1+0");
    const [myRating, setMyRating] = useState(0);
    const [opponentRating, setOpponentRating] = useState(0);
    const [opponent, setOpponent] = useState("");
    const [orientation, setOrientation] = useState("white");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [result, setResult] = useState("");
    const [winRate, setWinRate] = useState(0);
    const [numberOfGames, setNumberOfGames] = useState(0);
    const MAX_GAMES = 1000;

    const loadGame = (game) => {
        const pgn = game.pgn;
        const fen = game.fen;
        const opp = game.white.username === chessUsername ? game.black.username : game.white.username;
        const newGame = new Chess();
        const date = pgn.split("[Date ")[1].split("]")[0].split('"')[1];
        const res = game.white.username === chessUsername ? game.white.result : game.black.result;
        const time_control = convertTimeControl(game.time_control);
        const time = unixTimeToString(game.end_time);

        newGame.loadPgn(pgn);

        setGame(newGame);
        setHistory(newGame.history({ verbose: true }));
        setFen(fen);
        setOpponent(opp);
        setGameType(game.time_class);
        setTimeControl(time_control);
        setMyRating(game.white.username === chessUsername ? game.white.rating : game.black.rating);
        setOpponentRating(game.white.username === chessUsername ? game.black.rating : game.white.rating);
        setOrientation(game.white.username === chessUsername ? "white" : "black");
        setCurrentMove(newGame.history().length);
        setDate(date);
        setTime(time);
        setResult(res);
    }

    const getLastPlayedGame = useCallback(async () => {
        setIsLoading(true);
        const response = await axios.get(
            `https://api.chess.com/pub/player/${chessUsername}/games/archives`
        );
        
        let games = [];
        const archives = response.data.archives;
        
        // Start from the end of the archives, which are the most recent
        for (let i = archives.length - 1; i >= 0; i--) {
            const gamesResponse = await axios.get(archives[i]);
            const newGames = gamesResponse.data.games;
            // add the new games to the start of the array
            games = [...newGames, ...games];
    
            // If we have reached the max games, truncate and break
            if (games.length >= MAX_GAMES) {
                // cut off the extra games from the start (so keep the last games in the array (the most recent))
                games = games.slice(games.length - MAX_GAMES, games.length);
                break;
            }
        }
    
        setGames(games);
        setGameIndex(games.length - 1);
        setIsLoading(false);
        const lastGame = games[games.length - 1];
    
        if (lastGame) {
            loadGame(lastGame);
            setWinRate(calculateWinRate(games));
            setNumberOfGames(games.length);
        }
    }, []);
    

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
                    // console.log(e);
                }
            }
        } else {
            if (currentMove > 0) {
                setCurrentMove(currentMove - 1);
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

    useEffect(() => { getLastPlayedGame(); }, [getLastPlayedGame]);

    return (
        <ChessOuterContainer>
            {isLoading ? (
                <LoadingContainer>
                    <ChessLoader />
                </LoadingContainer>
            ) : (
                <>
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
                            
                            <ChessBoardView>
                                <ChessBoardContainer>
                                    <h2 style={{alignSelf: 'flex-start'}}>{opponent} ({opponentRating})</h2>
                                    <Chessboard
                                        position={fen}
                                        // change width when screen is smaller
                                        width={window.innerWidth < 800 ? window.innerWidth * 0.80 : window.innerWidth < 1400 ? window.innerWidth * 0.35 : window.innerWidth * 0.27}
                                        orientation={orientation}
                                        lightSquareStyle={{ backgroundColor: '#eeeed2' }}
                                        darkSquareStyle={{ backgroundColor: '#769656' }}
                                        dropOffBoard={'snapback'}
                                    />
                                    <h2 style={{alignSelf: 'flex-end'}}>Me ({myRating})</h2>
                                </ChessBoardContainer>
                                <ChessGameWinRate winRate={winRate}>
                                    <ChessGameWinRateColor winRate={winRate}>{winRate}%</ChessGameWinRateColor> <ChessGameWinRateInfo>win rate over {numberOfGames} games</ChessGameWinRateInfo>
                                </ChessGameWinRate>
                            </ChessBoardView>
                            

                            <ButtonContainer>
                                <button onClick={() => onPlayMove(false)} className="button">
                                    <div className="arrow-wrapper">
                                        <div className="arrow left"></div>
                                    </div>
                                    Previous
                                </button>
                                <button onClick={() => onReset()} className="button">
                                    Reset
                                </button>
                                <button onClick={() => onPlayMove(true)} className="button">
                                    Next
                                    <div className="arrow-wrapper">
                                        <div className="arrow"></div>
                                    </div>
                                </button>
                            </ButtonContainer>
                            <ButtonContainer style={{marginTop: '20px', gap: '40px'}}>
                                <button onClick={() => onLastGame()} className="button">
                                    {/* <div class="arrow-wrapper"> */}
                                        {/* <div class="arrow left"></div> */}
                                    {/* </div> */}
                                    Last Game
                                </button>
                                <button onClick={() => onNextGame()} className="button">
                                    Next Game
                                    {/* <div class="arrow-wrapper"> */}
                                        {/* <div class="arrow"></div> */}
                                    {/* </div> */}
                                </button>
                            </ButtonContainer>

                            <ChessInfoMessage>
                                Use the arrow keys to navigate through the moves
                            </ChessInfoMessage>

                        </ChessContainer>
                    ) : (
                        <p>No games found</p>
                    )}
                    <LineChartContainer>
                        <LineChart width={window.innerWidth < 800 ? window.innerWidth * 0.90 : window.innerWidth * 0.4} height={300} data={getChartData(games)}>
                            <XAxis dataKey="gamesPlayed" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Line type="monotone" dataKey="wins" stroke="#82ca9d" strokeWidth={2} />
                            <Line type="monotone" dataKey="losses" stroke="#ca8282" strokeWidth={3} />
                        </LineChart>
                    </LineChartContainer>
                </>
            )}
        </ChessOuterContainer>
    );
};

export default ChessGame;
