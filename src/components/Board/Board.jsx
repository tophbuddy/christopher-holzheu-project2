import LetterBox from "../LetterBox/LetterBox.jsx"
import BoardRow from './BoardRow.jsx'
import './Board.css';
import React from 'react';

export default function Board({difficultyNumGuesses, difficultyWordLength}) {

    // following https://docs.google.com/document/d/1E_8Jt9FJrUInzDvsKK9jHKheW1kNc9jISveTV8qx6aM/edit
    const boardLetterBoxes = [];

    for (let r = 0; r < difficultyNumGuesses; r++) {
        let curRow = [];
        for (let c = 0; c < difficultyWordLength; c++) {
            curRow.push(<LetterBox cI={c} rI={r}/>)
        }
        boardLetterBoxes.push(<div className="boardRowContainer">{curRow}</div>);
    }
    

    return (
        // <div>
        //     <BoardRow />
        //     <BoardRow />
        //     <BoardRow />
        //     <BoardRow />
        //     <BoardRow />
        // </div>
        <div>
            {boardLetterBoxes}
        </div>
    )
}