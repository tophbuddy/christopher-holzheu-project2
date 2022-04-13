import React, {useState} from "react";
import { useContext } from "react";
import './LetterTile.css';
import { CurGameState } from '../Game/Wordle.jsx'
import Board from "../Board/Board";
import { useEffect } from "react";
import { useCallback } from "react";

export default function LetterTile({rI, cI}) {

    // rI = row index
    // cI = column index
    
    const {currentGuess, usedLetters, chosenWord,
        gameBoard, setGameBoard, handleUserKeyLetter } = useContext(CurGameState);
    const currentLetter = gameBoard[rI][cI].letter;
    const answerLetterPosition = chosenWord[cI] === currentLetter;
    const wrongLetterPosition = !answerLetterPosition && currentLetter !== "" 
        && chosenWord.includes(currentLetter);
    const [letterTileColor, setLetterTileColor] = useState('white')

    function checkLetter() {
        let correctPosition = "correct position"
        let wrongPosition = "wrong position"
        let invalidLetter = "invalid letter"
        if (currentGuess.currentGameRow > rI) {
            if (answerLetterPosition) {
                return correctPosition;
            } else if (wrongLetterPosition) {
                return wrongPosition;
            }
        }
        return invalidLetter
    };
    const tileLetter = checkLetter();

    return (
        <div>
            <div className="letterTile" id={tileLetter}>
                <input type='text' 
                    maxLength="1" 
                    className="inputWidthMax"
                    // name="userInput"
                    value={currentLetter}
                    onKeyDown={handleUserKeyLetter}
                />
            </div>
        </div>
    );

}