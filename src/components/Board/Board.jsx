import LetterTile from "../LetterTile/LetterTile.jsx"
import './Board.css';
import React from 'react';

export default function Board({difficultyNumGuesses, difficultyWordLength}) {

    // following https://docs.google.com/document/d/1E_8Jt9FJrUInzDvsKK9jHKheW1kNc9jISveTV8qx6aM/edit
    const boardLetterTiles = [];

    for (let r = 0; r < difficultyNumGuesses; r++) {
        let curRow = [];
        for (let c = 0; c < difficultyWordLength; c++) {
            curRow.push(<LetterTile cI={c} rI={r}/>)
        }
        boardLetterTiles.push(<div className="boardRowContainer">{curRow}</div>);
    }

    const boardDifficultyTitle = difficultyNumGuesses === 5 ? "Hard" : difficultyNumGuesses
        === 6 ? "Medium" : "Easy";
    

    return (
        <div>
            <h1 className="boardTitle">Wordle: {boardDifficultyTitle} Difficulty</h1>
            {boardLetterTiles}
        </div>
    )
}