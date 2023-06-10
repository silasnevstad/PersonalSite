import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Home from './screens/Home';
import Resume from './screens/Resume';
import Projects from './screens/Projects';
import LastChess from './screens/LastChess';
import Contact from './screens/Contact';
import MiniGPTPrivacy from './screens/MiniGPTPrivacy';
import ChessPrivacy from './screens/ChessPrivacy';

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
          <Route path="/chess" element={<LastChess isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />} />
          <Route path="/contact" element={<Contact isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />} />
          <Route path="/minigpt" element={<MiniGPTPrivacy />} />
          <Route path="/chessapp" element={<ChessPrivacy />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
