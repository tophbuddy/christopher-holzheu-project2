import React, {useState} from "react";
import { useContext } from "react";
import './LetterTile.css';
import { CurGameState } from '../Game/Wordle.jsx'
import { useEffect } from "react";

export default function LetterTile({rI, cI}) {

    // rI = row index
    // cI = column index
    
    const {currentGuess, usedLetters, chosenWord,
        gameBoard, handleUserKeyLetter } = useContext(CurGameState);
    const currentLetter = gameBoard[rI][cI].letter;
    const answerLetterPosition = chosenWord[cI] === currentLetter;
    const wrongLetterPosition = !answerLetterPosition && currentLetter !== "" 
        && chosenWord.includes(currentLetter);
    const [letterTileColor, setLetterTileColor] = useState('')

    const correctPosition = "correct position"
    const wrongPosition = "wrong position"
    const invalidLetter = "invalid letter"

    function checkLetter() {
        if (currentGuess.currentGameRow > rI) {
            if (answerLetterPosition) {
                console.log("ansewer letter position ")
                return correctPosition;
            } else if (wrongLetterPosition) {
                return wrongPosition;
            }
        }
        return invalidLetter
    };
    const tileLetter = checkLetter();

    function changeColor() {
        if (tileLetter === correctPosition) {
            setLetterTileColor('green')
        } else if (tileLetter === wrongPosition){
            setLetterTileColor('yellow')
        }
    }
    useEffect(() => {
        changeColor()
    }, [tileLetter]);

    return (
        <div>
            <div className="letterTile" id={tileLetter} style={{
                backgroundColor: letterTileColor
            }}>
                <input type='text' 
                    maxLength="1" 
                    className="inputWidthMax"
                    value={currentLetter}
                    onKeyDown={handleUserKeyLetter}
                />
            </div>
        </div>
    );

}