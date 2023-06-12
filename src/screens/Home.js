import React, { useState } from 'react';
import NavigationMenu from '../components/NavigationMenu';
import NavigationHeader from '../components/NavigationHeader';
import SocialLinks from '../components/SocialLinks';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { PROJECTS } from '../components/constants';
import { sortByDate } from '../components/Utils';

const AppContainer = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  position: relative;
  overflow-x: hidden;
`;

const HomeContainer = styled.div`
  transition: margin-left 0.3s ease-in-out;
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
  margin: 10em;
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

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const HomeTitleIcon = styled.svg`
  width: 1em;
  height: 1em;
  margin-right: 0.5em;
  // margin-top: 0.2em;
  margin-bottom: -0.2em;
  opacity: 0.8; 
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
  opacity: 0.8;
  font-weight: 500;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const HomeTextLarge = styled.h1`
  font-size: 2.2rem;
  font-weight: 500;
  margin-left: .5rem;
  margin-top: 0.1rem;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const FooterText = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  align-self: center;
  font-size: 0.9rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  opacity: 0.5;

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

// OLD: Typewriter effect
// const useTypewriterEffect = (text, initialDelay = 0) => {
//   const [typedText, setTypedText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [typingDelay, setTypingDelay] = useState(0);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       const fullText = text;

//       if (isDeleting) {
//         setTypingDelay(1); // Faster deleting speed
//         setTypedText(fullText.substring(0, typedText.length - 1));
//       } else {
//         // Random typing speed between 50ms to 150ms
//         setTypingDelay(Math.random() * 40);
//         setTypedText(fullText.substring(0, typedText.length + 1));
//       }

//       if (!isDeleting && typedText === fullText) {
//         setTimeout(() => setIsDeleting(true), 3000);
//         setTypingDelay(500);
//       } else if (isDeleting && typedText === '') {
//         setIsDeleting(false);
//         setTypingDelay(500);
//       }
//     }, typingDelay);

//     return () => clearTimeout(timeout);
//   }, [isDeleting, text, typingDelay, typedText]);

//   return typedText;
// };
// const introText = 
//     "Welcome to my website! I'm Silas Nevstad, a student at Northeastern University studying Computer Science. Feel free to explore the different pages on my site and don't hesitate to reach out to me if you have any questions or just want to say hi.";
// const text = useTypewriterEffect(introText, 15);

const Home = ({ isMenuOpen, toggleMenu }) => {
  const sortedByRequests = [...PROJECTS].sort((a, b) => b.requests - a.requests);
  // use sortByDate() function from utils.js
  const sortedByDate = [...PROJECTS].sort(sortByDate);

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
            {/* <HomeText>{text}<span className="cursor">_</span></HomeText> */}
            <HomeTextSmall>Hi, I'm</HomeTextSmall>
            <HomeTextLarge style={{marginTop: '-.1em'}}>Silas Nevstad</HomeTextLarge>
            <HomeTextSmall style={{marginTop: '-.9em'}}>Northeastern Student | Programmer</HomeTextSmall>
          </HomeContainer>
          <HomeContainer style={{marginTop: '1em'}}>
            <HomeTitleText>
              <HomeTitleIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-award"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></HomeTitleIcon>
              Popular Projects
            </HomeTitleText>
            <HomeProjectsContainer>
              {mostPopularProjects.map((project, index) => (
                <ProjectCard key={index} project={project} onClick={() => handleProjectClick(project)} />
              ))}
            </HomeProjectsContainer>
            <Divider />
            <HomeTitleText>
              <HomeTitleIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></HomeTitleIcon>
              Recent Projects
            </HomeTitleText>
            <HomeProjectsContainer>
              {mostRecentProjects.map((project, index) => (
                <ProjectCard key={index} project={project} onClick={() => handleProjectClick(project)} />
              ))}
            </HomeProjectsContainer>
            <MobileDivider />
          </HomeContainer>
          {selectedProject && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
        </HomeCenterContainer>
        <FooterText>10.4k requests © 2021 Silas Nevstad</FooterText>
        <SocialLinks />
      </HomeContainer>
    </AppContainer>
  );
};

export default Home;