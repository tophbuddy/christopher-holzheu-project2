import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home/Home';
import Rules from './components/Rules/Rules';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar/NavBar';

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      
      <Route path={"/game"} element={<App />}/>
      <Route path={"/home"} element={<Home />}/>
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
