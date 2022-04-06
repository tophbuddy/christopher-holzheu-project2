import React, {useState} from "react";
import './LetterBox.css';

export default function LetterBox({letter, boxColor}) {

return (
    <div className="letterBox">
        <input type='text' maxLength="1" className="inputWidthMax"/>
    </div>
)

}