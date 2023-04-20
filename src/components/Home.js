import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import NavigationMenu from './NavigationMenu';
import SocialLinks from './SocialLinks';
import styled from 'styled-components';

const HomeContainer = styled.div`
  margin-left: ${({ isMenuOpen }) => isMenuOpen ? '250px' : '0'};
  width: ${({ isMenuOpen }) => isMenuOpen ? 'calc(100% - 250px)' : '100%'};
  transition: margin-left 0.3s ease-in-out;
`;

const HomeHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;  
`;

const HomeContactButton = styled.button`
  margin: 5px 5px;
  background: transparent;
  color: #fff;
  border: 1px solid #ffffff3f;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 10px;
  width: 14%;
  height: 40px;

  &:hover {
    background: #222;
    transform: scale(1.05);
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
        setTypingDelay(Math.random() * 30);
        setTypedText(fullText.substring(0, typedText.length + 1));
      }

      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
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
          <HomeContainer isMenuOpen={isMenuOpen}>
            <h1 id="typedtext">{text}<span className="cursor">_</span></h1>
          </HomeContainer>
          <SocialLinks />
        </div>
    );
};

export default Home;
