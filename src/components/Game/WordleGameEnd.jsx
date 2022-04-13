import React, { useContext } from 'react'
import { CurGameState } from '../Game/Wordle.jsx'

export default function WordleGameEnd() {
    const {
        currentGuess, isGameFinished, gameBoard, chosenWord, setBoardState
    } = useContext(CurGameState);

    function checkGameResult() {
        let gameWin = "Congratulations! The secret word was correctly guessed!"
        let gameLose = "I'm sorry. You were not able to guess the secret word"
        if (isGameFinished.isWordCorrect) {
            return gameWin;
        } else {
            return gameLose;
        }
    }
    let gameEndDisplayMessage = checkGameResult();
    
    return (
        <div>
            <h1 className='gameEndTitle'>{gameEndDisplayMessage}</h1>
            <h1 className='gameEndTitle'>Secret word = {chosenWord}</h1>
        </div>
    );
}