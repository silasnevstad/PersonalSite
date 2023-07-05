import React, { useState, useEffect } from 'react';
import NavigationMenu from '../components/NavigationMenu';
import NavigationHeader from '../components/NavigationHeader';
import SocialLinks from '../components/SocialLinks';
import styled, { keyframes } from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import TypingAnimation from '../components/TypingAnimation';
import { PROJECTS, QUOTES } from '../components/constants';
import { sortByDate } from '../components/Utils';

const fadeAndDropInFromCeiling = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  position: relative;
  overflow-x: hidden;
`;

const HomeContainer = styled.div`
  transition: margin-left 0.2s ease-in-out;
  width: 100%;
  margin-top: 1em;

  @media (max-width: 768px) {
    margin-top: 2em;
  }
`;

const HomeCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 8em;
  margin-top: 4em;

  @media (max-width: 768px) {
    margin: 0.5em;
    width: 95%;
    overflow-x: hidden;
  }
`;

const HomeProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  align-items: flex-start;
  margin-top: 1em;
  animation: ${fadeAndDropInFromCeiling} 0.2s ease-in-out forwards;
  opacity: 0;

  @media (max-width: 768px) {
    margin-top: 0.5em;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 20px;

  @media (max-width: 768px) {
    height: 30px;
  }
`;

const MobileDivider = styled.div`
  width: 100%;
  height: 0px;

  @media (max-width: 768px) {
    height: 100px; 
  }
`;

const HomeTitleText = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  font-weight: 500;
  opacity: 0.8;
  animation: ${fadeAndDropInFromCeiling} 0.2s ease-in-out forwards;
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const QuoteText = styled.h1`
  align-self: center;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  margin-top: 4rem;
  font-weight: 500;
  opacity: 0.5;
  text-align: center;
  max-width: 70%;
  color: #999;
  letter-spacing: 0.4px;
  animation: ${fadeAndDropInFromCeiling} 0.2s ease-in-out forwards;
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-top: -3rem;
  }
`;

const QuoteAuthor = styled.h1`
  align-self: center;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  font-weight: 500;
  letter-spacing: 0.4px;
  opacity: 0.5;
  color: #666;
  animation: ${fadeAndDropInFromCeiling} 0.2s ease-in-out forwards;
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 10.5rem;
  }
`;

const HomeTitleIcon = styled.svg`
  width: 1em;
  height: 1em;
  margin-right: 0.5em;
  animation: ${fadeAndDropInFromCeiling} 0.2s ease-in-out forwards;
  margin-bottom: -0.2em;
  opacity: 0; 
  color: #fff;

  @media (max-width: 768px) {
    width: 1em;
    height: 1em;
  }
`;

const HomeTextSmall = styled.h1`
  font-size: 1.1rem;
  margin-left: .5rem;
  margin-top: 0.1rem;
  opacity: 0;
  font-weight: 500;
  animation: ${fadeAndDropInFromCeiling} 0.2s ease-in-out forwards;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const HomeTextLarge = styled.h1`
  font-size: 2.2rem;
  font-weight: 500;
  margin-left: .5rem;
  margin-top: 0.1rem;
  animation: ${fadeAndDropInFromCeiling} 0.2s ease-in-out forwards;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const FooterText = styled.p`
  position: fixed;
  bottom: 0;
  left: 0;
  align-self: center;
  font-size: 0.9rem;
  // margin-top: 1rem;
  // margin-bottom: 0.5rem;
  opacity: 0.5;

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

const Home = ({ isMenuOpen, toggleMenu }) => {
  const sortedByRequests = [...PROJECTS].sort((a, b) => b.requests - a.requests);
  // use sortByDate() function from utils.js
  const sortedByDate = [...PROJECTS].sort(sortByDate);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [displayedQuote, setDisplayedQuote] = useState("");
  const [displayedAuthor, setDisplayedAuthor] = useState("");
  const [isCountUpDone, setIsCountUpDone] = useState(false);

  // set countUpDone to true after 1.5 seconds
  
  useEffect(() => {
    const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    setSelectedQuote(quote);

    setTimeout(() => {
      setIsCountUpDone(true);
    }, 500);
  }, []);  // This will run only once, when the component mounts
  
  useEffect(() => {
    if (selectedQuote && isCountUpDone) {
        let quoteIndex = 0;
        let authorIndex = 0;
        let localDisplayedQuote = "";
        let localDisplayedAuthor = "";

        const typeCharacter = () => {
            if (quoteIndex < selectedQuote.quote.length) {
                localDisplayedQuote += selectedQuote.quote.charAt(quoteIndex);
                quoteIndex++;
            } else if (authorIndex < selectedQuote.author.length) {
                localDisplayedAuthor += selectedQuote.author.charAt(authorIndex);
                authorIndex++;
            } else {
                // Stop the animation once both the quote and author are completely displayed.
                return;
            }
            
            setDisplayedQuote(localDisplayedQuote);
            setDisplayedAuthor(localDisplayedAuthor);
            // Continue the animation on the next frame.
            requestAnimationFrame(typeCharacter);
        };

        // Start the animation.
        requestAnimationFrame(typeCharacter);
    }
}, [selectedQuote, isCountUpDone]);


  
  const mostPopularProjects = sortedByRequests.slice(0, 3);
  const mostRecentProjects = sortedByDate.slice(0, 3);

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <AppContainer>
      <HomeContainer>
        <NavigationMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <NavigationHeader toggleMenu={toggleMenu} currentPage={"/"} />
        <HomeCenterContainer>
          <HomeContainer>
            <HomeTextSmall style={{animationDelay: '0s'}}>Hi, I'm</HomeTextSmall>
            <HomeTextLarge style={{marginTop: '-.1em', animationDelay: '0.05s'}}>Silas Nevstad</HomeTextLarge>
            <HomeTextSmall style={{marginTop: '-.9em', animationDelay: '0.1s'}}>
              Northeastern Student | <TypingAnimation />
            </HomeTextSmall>
          </HomeContainer>
          <HomeContainer style={{marginTop: '1em'}}>
            <HomeTitleText style={{animationDelay: '0.15s'}}>
              <HomeTitleIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-award"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></HomeTitleIcon>
              Popular Projects
            </HomeTitleText>
            <HomeProjectsContainer style={{animationDelay: '0.2s'}}>
              {mostPopularProjects.map((project, index) => (
                <ProjectCard key={index} project={project} onClick={() => handleProjectClick(project)} isCountUpDone={isCountUpDone} />
              ))}
            </HomeProjectsContainer>
            <Divider />
            <HomeTitleText style={{animationDelay: '.25s'}}>
              <HomeTitleIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></HomeTitleIcon>
              Recent Projects
            </HomeTitleText>
            <HomeProjectsContainer style={{animationDelay: '0.3s'}}>
              {mostRecentProjects.map((project, index) => (
                <ProjectCard key={index} project={project} onClick={() => handleProjectClick(project)} isCountUpDone={isCountUpDone} />
              ))}
            </HomeProjectsContainer>
            <MobileDivider />
          </HomeContainer>
          <QuoteText style={{animationDelay: '0.35s'}}>{displayedQuote}</QuoteText>
          <QuoteAuthor style={{animationDelay: '0.4s'}}>{displayedAuthor}</QuoteAuthor>
          {/* // <QuoteAuthor style={{animationDelay: '0.4s'}}>- {selectedQuote.author}</QuoteAuthor> */}
          {selectedProject && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
        </HomeCenterContainer>
        <FooterText>14.3k requests{window.innerWidth > 768 && " © 2022 Silas Nevstad"}</FooterText>
        <SocialLinks />
      </HomeContainer>
    </AppContainer>
  );
};

export default Home;