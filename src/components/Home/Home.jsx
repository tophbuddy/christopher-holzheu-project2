import React from 'react';
import './Home.css';

export default function Home() {

    return (
        <div>
            <h1 className='homeTitle'>Wordle Clone</h1>
            <h2 className='homeTitle'>{"By Chris Holzheu"}</h2>
            <p>
                Welcome to my Wordle Game!
            </p>
            <p>
                Choose a difficulty from the navbar to start playing
            </p>
        </div>
    );
}