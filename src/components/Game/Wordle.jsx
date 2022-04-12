import Board from "../Board/Board.jsx";
import React from 'react';
import './Wordle.css'
import { createContext } from "react";
import { useState } from "react";
import { easyWordSet, mediumWordSet, hardWordSet } from "../../wordSets/wordSets.js";
import { useEffect } from "react";

// Using context and provider from here: https://reactjs.org/docs/context.html
// https://stackoverflow.com/questions/64780557/ternary-operator-inside-usestate-is-it-correct

export const CurGameState = createContext();

export default function Game({chosenDifficulty, 
    difficultyNumGuesses, 
    difficultyWordLength}) {

    // Used this example for creating board structure:
    // https://stackoverflow.com/questions/55081980/how-to-render-an-element-in-a-matrix-in-react
    // and partially used the idea from step 3 here:
    // https://kennethscoggins.medium.com/how-to-build-wordle-using-reactjs-and-about-200-lines-of-sloppy-code-3da3ef47013f

    const hardBoard = [
        [{letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}],
        [{letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}],
        [{letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}],
        [{letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}],
        [{letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}],
    ];

    const mediumBoard = [
        [{letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter :""}],
        [{letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}],
        [{letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}],
        [{letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}],
        [{letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}],
        [{letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}],
    ];
    
    const easyBoard = [
        [{letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}],
        [{letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}],
        [{letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}],
        [{letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}],
        [{letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}],
        [{letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}],
        [{letter:""}, {letter:""}, {letter:""}, {letter:""}, {letter:""}],
    ];


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
    let wordSetDifficult = setWordSet();


    let easyLength = 5;
    let mediumLength = 6;
    let hardLength = 7;
    function setWordLength() {
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
    const [isGameFinished, setGameState] = useState({isGameFinished 
        });
    const [usedLetters, setUsedLetterState] = useState([]);
    const [gameWordList, setWordList] = useState([]);
    const [currentGuess, setCurrentGuess] = useState({currentGameRow : 0, 
        currentGameColumn : 0});
    
    const randomNumber = Math.floor(Math.random() * wordSetDifficult.length)
    const getWords = () => {
        
    }

    return (

        <CurGameState.Provider
        value ={{
            currentGuess, gameWordList, usedLetters, isGameFinished, chosenWord,
            gameBoard 
        }}>
            <div className="boardContainer">
                <Board difficultyNumGuesses={difficultyNumGuesses} difficultyWordLength={difficultyWordLength}/>
            </div>
        </CurGameState.Provider>);
}
