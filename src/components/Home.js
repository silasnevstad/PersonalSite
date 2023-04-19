import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import NavigationMenu from './NavigationMenu';
import SocialLinks from './SocialLinks';

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


const Home = () => {
    const introText = 
        "Welcome to my website! I'm Silas Nevstad, a student at Northeastern University studying Computer Science. Feel free to explore the different pages on my site and don't hesitate to reach out to me if you have any questions or just want to say hi.";
    const text = useTypewriterEffect(introText, 15);

    return (
        <div className="Home">
            <NavigationMenu />
            <h1 id="typedtext">{text}<span className="cursor">_</span></h1>
            <SocialLinks />
        </div>
    );
};

export default Home;
