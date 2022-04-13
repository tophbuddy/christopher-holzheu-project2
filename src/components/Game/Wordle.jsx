import Board from "../Board/Board.jsx";
import React from 'react';
import './Wordle.css'
import { createContext } from "react";
import { useState } from "react";
import { easyWordSet, mediumWordSet, hardWordSet } from "../../wordSets/wordSets.js";
import { easyBoard, mediumBoard, hardBoard } from "../Board/BoardData.jsx";
import { useEffect, useCallback } from "react";
import WordleGameEnd from "./WordleGameEnd.jsx"

// Using context and provider from here: https://reactjs.org/docs/context.html
// https://stackoverflow.com/questions/64780557/ternary-operator-inside-usestate-is-it-correct

export const CurGameState = createContext();

export default function Game({chosenDifficulty, 
    difficultyNumGuesses, 
    difficultyWordLength}) {

    function setGameBoard() {
        if (chosenDifficulty === "boardHard") {
            return hardBoard;
        } else if (chosenDifficulty === "boardMedium") {
            return mediumBoard;
        } else {
            return easyBoard;
        }
    }
    let boardDifficulty = setGameBoard();
    const [gameBoard, setBoardState] = useState(boardDifficulty);

    function setWordSet() {
        if (chosenDifficulty === "boardHard") {
            return hardWordSet;
        } else if (chosenDifficulty === "boardMedium") {
            return mediumWordSet;
        } else {
            return easyWordSet;
        }
    }
    let wordSetDifficulty = setWordSet();

    function setWordLength() {
        let easyLength = 5;
        let mediumLength = 6;
        let hardLength = 7;
        if (chosenDifficulty === "boardHard") {
            return easyLength;
        } else if (chosenDifficulty === "boardMedium") {
            return mediumLength;
        } else {
            return hardLength;
        } 
    }
    const wordLengthDifficulty = setWordLength();

    const [chosenWord, setWordState] = useState('');
    const [isGameFinished, setGameState] = useState({isGameFinished : false, 
        isWordCorrect : false 
        });
    const [usedLetters, setUsedLetterState] = useState([]);
    const [gameWordList, setWordList] = useState([]);
    const [currentGuess, setCurrentGuess] = useState({currentGameRow : 0, 
        currentGameColumn : 0});

    
    
    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * wordSetDifficulty.length)
        const pickedWord = wordSetDifficulty[randomNumber];
        setWordList(wordSetDifficulty)
        setWordState(pickedWord)
        console.log(pickedWord)
    }, []);
    console.log("state " + chosenWord)

    // const handleUserKeyLetter = (key) => {
    //     console.log("user pressed: " + key)
    // }

    const handleUserKeyLetter = useCallback((key) => {
        if (currentGuess.currentGameColumn > wordLengthDifficulty) return;
        const newBoard = [...gameBoard];
        newBoard[currentGuess.currentGameRow][currentGuess.currentGameColumn] = key;
        setBoardState(newBoard);
        setCurrentGuess({
            currentGameRow: currentGuess.currentGameRow,
            currentGameColumn: currentGuess.currentGameColumn + 1,
        }); 
    }, [currentGuess]);

    const handleUserEntry = () => {
        console.log("enter function called")
        if (currentGuess !== wordLengthDifficulty) {
            console.log("Nothing in here")
            return};
        let gameWord = "";
        for (let c = 0; c < difficultyWordLength; c++) {
            gameWord += gameBoard[currentGuess.currentGameRow][c];
        }
        if (gameWordList.includes(chosenWord.toUpperCase())) {
            setCurrentGuess({currentGameRow: currentGuess.currentGameRow++, currentGameColumn: 0})
        } else {
            console.log("Invalid word")
        }

        if (gameWord.toUpperCase() === chosenWord) {
            setGameState({ isGameFinished: true, isWordCorrect: true });
            return;
          }
          console.log(currentGuess);
          if (currentGuess.currentGameRow === wordLengthDifficulty) {
            setGameState({ isGameFinished: true, isWordCorrect: false });
            return;
          } 
    };

    useEffect(() => {
        document.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                console.log("Pressed!")
                handleUserEntry();
                console.log(gameBoard[0][0].letter)
                event.preventDefault();
            }
        })
        // return () => {
        //     document.removeEventListener("keydown", handleUserEntry());
        //   };
    }, []);


    return (

        <CurGameState.Provider
        value ={{
            currentGuess, setCurrentGuess, chosenWord, setWordState, 
            isGameFinished, setGameState, usedLetters, setUsedLetterState, 
            gameWordList, setWordList, handleUserEntry, gameBoard, setBoardState,
            handleUserKeyLetter
        }}>
            <div className="boardContainer">
                <Board difficultyNumGuesses={difficultyNumGuesses} difficultyWordLength={difficultyWordLength}/>
                {isGameFinished.isGameFinished ? <WordleGameEnd /> : "Game running"}
            </div>
        </CurGameState.Provider>);
}
