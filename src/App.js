
import React from 'react';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import './App.css';
import Home from './pages/Home.tsx';


function App() {
  return (
      
    <Router basename={process.env.PUBLIC_URL}>
          <Routes>
                <Route exact path='/' element={<Home />} />
          </Routes>
    </Router>
);
}

export default App;
