import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import LastChess from './components/LastChess';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/lastChess" element={<LastChess />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
