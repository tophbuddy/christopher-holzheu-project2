import Board from "../Board/Board.jsx";
import React from 'react';
import './Wordle.css'
import { createContext } from "react";
import { useState } from "react";
import { easyWordSet, mediumWordSet, hardWordSet } from "../../wordSets/wordSets.js";
import { easyBoard, mediumBoard, hardBoard } from "../Board/BoardData.jsx";
import { useEffect } from "react";
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
            return hardLength;
        } else if (chosenDifficulty === "boardMedium") {
            return mediumLength;
        } else {
            return easyLength;
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

    function handleUserKeyLetter(key){
        if (key.key !== 'Enter' && !key.key && key.key.length !== 1) return;
        if (key.key === 'Enter') {
            console.log(key.key)
            handleUserEntry()
            return;
        }
        if (currentGuess.currentGameColumn > wordLengthDifficulty) return;
        console.log(key.key)
        const newBoard = [...gameBoard];
        newBoard[currentGuess.currentGameRow][currentGuess.currentGameColumn].letter = key.key.toUpperCase();
        setBoardState(newBoard);
        setCurrentGuess({
            currentGameRow: currentGuess.currentGameRow,
            currentGameColumn: currentGuess.currentGameColumn + 1,
        })
    }; 

    function handleUserEntry() {
        console.log("enter function called")
        // debugger
        if (currentGuess.currentGameColumn !== wordLengthDifficulty) {
            console.log("Nothing in here")
            return};
        let gameWord = "";
        for (let c = 0; c < difficultyWordLength; c++) {
            gameWord += gameBoard[currentGuess.currentGameRow][c].letter;
        }
        if (gameWordList.includes(chosenWord.toUpperCase())) {
            setCurrentGuess({currentGameRow: currentGuess.currentGameRow + 1, currentGameColumn: 0})
        } else {
            console.log("Invalid word")
        }
        console.log("chosen: " +chosenWord)
        if (gameWord.toUpperCase() === chosenWord) {
            setGameState({ isGameFinished: true, isWordCorrect: true });
            return;
          }
          console.log(currentGuess);
          if (currentGuess.currentGameRow === boardDifficulty.length) {
            setGameState({ isGameFinished: true, isWordCorrect: false });
            return;
          } 
    };

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
