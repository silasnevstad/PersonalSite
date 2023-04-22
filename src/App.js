import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import LastChess from './components/LastChess';
import MiniGPTPrivacy from './components/MiniGPTPrivacy';
import ChessPrivacy from './components/ChessPrivacy';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />} />
          <Route path="/resume" element={<Resume isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />} />
          <Route path="/projects" element={<Projects isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />} />
          <Route path="/lastChess" element={<LastChess isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />} />
          <Route path="/minigpt" element={<MiniGPTPrivacy />} />
          <Route path="/chessapp" element={<ChessPrivacy />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
