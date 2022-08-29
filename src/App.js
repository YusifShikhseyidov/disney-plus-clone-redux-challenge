import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation'
import Home from './components/Home'
import MovieDetails from './components/MovieDetails'
import Login from "./components/Login"

function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        
        <Routes>

          <Route path="/login" element={<Login/>} />

          <Route path="/" element={<Home/>} />
          
          <Route path="/details/:id" element={<MovieDetails/>} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
