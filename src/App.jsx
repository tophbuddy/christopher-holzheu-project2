import React from 'react';
import Wordle from './components/Game/Wordle';
import './App.css';

export default function App() {
  return (
    <div>
      <h1 className='gameTitle'>Wordle Clone</h1>
      <Wordle />
    </div>
  );
}
