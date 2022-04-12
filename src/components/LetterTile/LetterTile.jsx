import React, {useState} from "react";
import { useContext } from "react";
import './LetterTile.css';
import { CurGameState } from '../Game/Wordle.jsx'
import Board from "../Board/Board";

export default function LetterTile({rI, cI}) {

    // rI = row index
    // cI = column index
    
    const {currentGuess, gameWordList, usedLetters, isGameFinished, chosenWord,
        gameBoard } = useContext(CurGameState);
    const currentLetter = gameBoard[rI][cI].letter;
    const answerLetterPosition = chosenWord[cI] === currentLetter;
    
    const wrongLetterPosition = !answerLetterPosition && currentLetter !== "" 
        && chosenWord.includes(currentLetter);
    
    let correctPosition = "correct position"
    let wrongPosition = "wrong position"
    let invalidLetter = "invalid letter"
    let letterQ;

    function checkLetter () {
        if (currentGuess.currentGameRow > rI) {
            if (answerLetterPosition) {
                return correctPosition;
            } else if (wrongLetterPosition) {
                return wrongPosition;
            }
        }
        return invalidLetter
    }



    return (
        <div>
            <div className="letterTile" id={letterQ}>
                <input type='text' 
                    maxLength="1" 
                    className="inputWidthMax" 
                    
                />
            </div>
        </div>
    );

}