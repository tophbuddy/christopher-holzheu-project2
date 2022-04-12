import LetterBox from "../LetterBox/LetterBox.jsx"
import React from 'react';

export default function BoardRow() {

    return (
        <div>
            <div className="BoardRowContainer">
                <LetterBox />
                <LetterBox />
                <LetterBox />
                <LetterBox />
                <LetterBox />
            </div>
        </div>
    );
}