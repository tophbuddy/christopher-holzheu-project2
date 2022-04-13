import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home/Home';
import Rules from './components/Rules/Rules';
import Wordle from './components/Game/Wordle'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar/NavBar';

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path={"/home"} element={<Home />}/>
      <Route path={"/game-easy"} element={<Wordle chosenDifficulty={"boardEasy"} 
        difficultyNumGuesses={7} difficultyWordLength={5}/>}/>
      <Route path={"/game-medium"} element={<Wordle chosenDifficulty={"boardMedium"} 
        difficultyNumGuesses={6} difficultyWordLength={6}/>}/>
      <Route path={"/game-hard"} element={<Wordle chosenDifficulty={"boardHard"} 
        difficultyNumGuesses={5} difficultyWordLength={7}/>}/>
      <Route path={"/rules"} element={<Rules />}/>
    </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
