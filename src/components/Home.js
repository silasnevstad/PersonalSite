import React, { useState, useEffect } from 'react';
import NavigationMenu from './NavigationMenu';
import NavigationHeader from './NavigationHeader';
import SocialLinks from './SocialLinks';
import styled from 'styled-components';

const HomeContainer = styled.div`
  margin-top: 5em;
  // width: ${({ isMenuOpen }) => isMenuOpen ? 'calc(100% - 250px)' : '100%'};
  transition: margin-left 0.3s ease-in-out;

  @media (max-width: 768px) {
    margin-top: 4em;
  }
`;

const HomeText = styled.h1`
  font-size: 1rem;
  max-width: 70%;
  margin-left: .5rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const FooterText = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  align-self: center;
  font-size: 0.8rem;
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


const useTypewriterEffect = (text, initialDelay = 0) => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingDelay, setTypingDelay] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = text;

      if (isDeleting) {
        setTypingDelay(1); // Faster deleting speed
        setTypedText(fullText.substring(0, typedText.length - 1));
      } else {
        // Random typing speed between 50ms to 150ms
        setTypingDelay(Math.random() * 40);
        setTypedText(fullText.substring(0, typedText.length + 1));
      }

      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 3000);
        setTypingDelay(500);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setTypingDelay(500);
      }
    }, typingDelay);

    return () => clearTimeout(timeout);
  }, [isDeleting, text, typingDelay, typedText]);

  return typedText;
};


const Home = ({ isMenuOpen, toggleMenu }) => {
    const introText = 
        "Welcome to my website! I'm Silas Nevstad, a student at Northeastern University studying Computer Science. Feel free to explore the different pages on my site and don't hesitate to reach out to me if you have any questions or just want to say hi.";
    const text = useTypewriterEffect(introText, 15);

    return (
        <div className="Home">
          <NavigationMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <NavigationHeader isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <HomeContainer isMenuOpen={isMenuOpen}>
            <HomeText>{text}<span className="cursor">_</span></HomeText>
          </HomeContainer>
          <FooterText>2.6k requests © 2021 Silas Nevstad</FooterText>
          <SocialLinks />
        </div>
    );
};

export default Home;
