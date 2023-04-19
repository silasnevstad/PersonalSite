import React, { useState } from 'react';
import NavigationMenu from './NavigationMenu';
import SocialLinks from './SocialLinks';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import styled from 'styled-components';


const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 7%;

  flex-wrap: wrap;
  justify-content: left;
  gap: 8px;

  margin-left: ${({ isMenuOpen }) => isMenuOpen ? '250px' : '0'};
  width: ${({ isMenuOpen }) => isMenuOpen ? 'calc(100% - 250px)' : '100%'};
  transition: margin-left 0.3s ease-in-out;
`;

const projects = [
  // Add your projects here, each project should have at least an 'id' and a 'title'
  { id: '1', title: 'AlgoPicks', languages: 'JavaScript | React | Node.js', logo: 'algoPicksLogo.png', description: 'AlgoPicks is a sports prediction and tracking app that uses machine learning algorithms to predict game outcomes. Utilizing the Firebase real-time database, the app allows users to track their bets in real-time and maintain a historical record of them, providing users with insights into their betting patterns and performance over time. With over 15,000 data points, AlgoPicks is able to predict game outcomes with a 70% accuracy rate in 2021. My goal with AlgoPicks is to create a valuable and reliable tool for both sports enthusiasts and those looking to improve their betting.', developers: 'Silas Nevstad', version: '1.3.0', url: '' },
  { id: '2', title: 'Senttrac', languages: 'React | Python | Node.js', logo: 'senttracLogo.png', description: 'Senttrac is an innovative analysis tool created to offer real-time insights into the emotions driving online conversations. By leveraging state-of-the-art sentiment analysis models and a cutting-edge Large Language Model (LLM), Senttrac delves into recent tweets, Reddit posts, and news headlines related to your query. Hosted frontend with React using AWS Amplify and backend on Heroku running a Python flask server for API.', developers: 'Silas Nevstad', version: '1.0.1', url: 'https://senttrac.com' },
  { id: '3', title: 'HumanGPT', languages: 'React | Python', logo: 'humangptLogo.png', description: 'HumanGPT employs human recognition analysis models in conjunction with ChatGPT to transform text into a more human-like version. Striving for readability and clear communication, the algorithms focus on retaining the text\'s original meaning while ensuring it is perceived as human-generated content. The backend is developed using JavaScript, while the frontend is built with React.', developers: 'Silas Nevstad', version: '1.0.0', url: 'https://humangpt.me' },
  { id: '4', title: 'Sramdleb', languages: 'React | Node.js', logo: 'scramdlebLogo.png', description: 'Scrambled is a word puzzle game where players shift letters to form a secret word within a limited number of moves. The game offers different difficulty levels with varying word lengths and number of moves, making it a fun and challenging game for players of all skill levels.', developers: 'Silas Nevstad', version: '2.0.1', url: 'https://scramdleb.com' },
  { id: '5', title: 'ChessClock', languages: 'Swift', logo: 'chessClockLogo.png', description: 'ChessClock is an app that I developed as a personal project, fueled by the frustration of not having a proper clock when playing chess with friends. I developed it in Swift in under 12 hours, and it enables chess players to play time-controlled games as well as setting custom time controls for each player and keeping track of the time remaining during the game. Its simple interface makes it easy to use for players in all age ranges.', developers: 'Silas Nevstad', version: '1.1.0', url: 'https://apps.apple.com/gb/app/chess-clock-by-sn/id1666157309' },
  { id: '6', title: 'AlgoTrader', languages: 'Python', logo: 'algoPicksLogo.png', description: 'To start, the algorithm uses certain criteria such as recent performance and overall financial health to choose a number of stocks. It then conducts a deeper analysis on a smaller subset of those stocks to identify the best fit for the portfolio. Once the final list of stocks is determined, the algorithm computes the appropriate allocation for each stock in the portfolio. To align the current portfolio with the newly generated one, the algorithm executes trades and sends a text message with the list of stocks that were bought or sold. Implemented on an Alpaca paper trading account, the algorithm has delivered an 18% increase in overall portfolio value. Notably, this performance was achieved during a period when the S&P 500 (SPY) decreased by 6.14%.', developers: 'Silas Nevstad', version: '1.2.0', url: '' },
  { id: '7', title: 'VSCode GPT', languages: 'Javascript | Node.js', logo: 'vscodeLogo.png', description: 'GPT is a Visual Studio Code extension that brings the power of OpenAI\'s GPT language models to your fingertips, helping you analyze and debug your code. With just a few clicks, you can get explanations for code snippets or debug outputs to help you better understand what\'s going on in your code.', developers: 'Silas Nevstad', version: '2.0.1', url: 'https://marketplace.visualstudio.com/items?itemName=SilasNevstad.gpthelper' },
  { id: '8', title: 'MiniGPT', languages: 'React Native', logo: '', description: 'ChatGPT app built React native. Key features include saving chat history, model selection and customizable API keys.', developers: 'Silas Nevstad', version: '1.0.0', url: '' },
  { id: '9', title: 'Sentiment Anaylsis Model', languages: 'Python', logo: '', description: 'A machine learning model for sentiment analysis I built in python, trained and tested on a dataset of Twitter tweets (1.6 million). The model uses NLTK (Natural Langauage Toolkit) to preprocess the text data and Scikit-learn to perform hyperparameter tuning using GridSearchCV. The best hyperparameters are then used to train a Support Vector Machine (SVM), which is used to perform sentiment analysis on new tweets.', developers: 'Silas Nevstad', version: '1.0.0', url: '' },
  { id: '10', title: 'Categoridle', languages: 'HTML | Javascript | CSS', logo: '', description: 'Categoridle is a website that allows users to play a game similar to the popular game Wordle. However, Categoridle includes an additional feature where users can select a category for the word they are trying to guess, making the game more challenging and fun. Categories so far include: Athletes, Car Brands, Countries, Companies, Captital Cities, Music, Movies, Normal 5 letter words, and a couple others with more to come.', developers: 'Silas Nevstad', version: '1.2.1', url: 'http://categoridle.com' },
  { id: '11', title: 'SportSpots', languages: 'HTML | Javascript | CSS', logo: '', description: 'I built this website to assist sports enthusiasts in finding the nearest sports field locations, such as a basketball courts, ice rinks, or soccer fields, based on their current location. By utilizing the Google Maps API, users can easily search for sports fields in their area and get directions to the desired location. In addition to providing location-based information, the website also features a chat function that enables users to connect with other sports enthusiasts in the area. Each sports field has its chat room, where users can share information, organize games, or provide updates about the venues.', developers: 'Silas Nevstad', version: '1.0.0', url: '' },
  { id: '12', title: 'Casino', languages: 'React', logo: '', description: 'I built this simple React web application to allow users to practice their casino skills. The website features a simple game that requires users to guess the appropriate moves to increase their score. The game was designed to be interactive and fun, providing users with an engaging way to improve their knowledge and skillset of various casino games.', developers: 'Silas Nevstad', version: '1.0.0', url: '' },
];

const Projects = ({ isMenuOpen, toggleMenu }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      <NavigationMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <ProjectsContainer isMenuOpen={isMenuOpen}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={() => handleProjectClick(project)} />
        ))}
      </ProjectsContainer>
      {selectedProject && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
    <SocialLinks />
    </div>  
  );
};

export default Projects;