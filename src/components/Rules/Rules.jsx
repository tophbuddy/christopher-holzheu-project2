import React from 'react';
import './Rules.css'

export default function Rules() {

    return (
        <div>
            <h1 className='rulesTitle'>Rules</h1>
            <h2 className='rulesTitle'>Explanation</h2>
            <p className='rulesContainer'>
                If you've played the hit game of the same name on the New York Times
                then you already know the rules, but if you haven't the goal is 
                to guess the secretly chosen word before you've run out of guesses
            </p>
            <h2 className='rulesTitle'>Difficulty Levels</h2>
            <p className='rulesContainer'>
               Each difficulty level will change the amount of guesses you have
               and the length of the word that you have to guess.
            </p>
            <p className='rulesContainer'>
                <strong>Easy</strong> gives you a 5 letter word to guess and 7
                tries to guess it
            </p>
            <p className='rulesContainer'>
                <strong>Medium</strong> gives you a 6 letter word to guess and 6
                tries to guess it
            </p>
            <p className='rulesContainer'>
                <strong>Hard</strong> gives you a 7 letter word to guess and 5
                tries to guess it
            </p>
            <h2 className='rulesTitle'>How Wordle Works</h2>
            <p className='rulesContainer'>
                If a letter you enter is in the write place the box its in will
                be highligted green. If the letter is in the word, but not in
                right place, it will be highlighted yellow. If a letter has
                neither of the highlighted colors then it is not in the secret
                word at all
            </p>
        </div>
    );
}