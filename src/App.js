
import React from 'react';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import './App.css';
import Home from './pages/Home.tsx';
import SocialMedia from './pages/SocialMedia.tsx';
import SpaceInvader from './pages/Space_Invader.jsx';


function App() {
  return (
    <Router>
          <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/Social_Media' element={<SocialMedia />} />
                <Route exact path='/Space_Invader' element={<SpaceInvader />} />
          </Routes>
    </Router>
);
}

export default App;
