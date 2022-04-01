import LetterBox from "../LetterBox/LetterBox.jsx"
import './Board.css';

export default function Board() {

    return (
        <div>
            <div className="BoardContainer">
                <LetterBox />
                <LetterBox />
                <LetterBox />
                <LetterBox />
                <LetterBox />
            </div>
        </div>
    )
}