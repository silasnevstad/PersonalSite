import React, { useState, useEffect, useCallback, useMemo } from 'react';

const TypingAnimation = () => {
  const words = useMemo(() => [
    "Programmer",
    "Full Stack Developer",
    "Software Developer",
    "Web Designer",
    "Data Scientist",
    "App Developer",
    "Data Analyst",
    "Machine Learning Engineer",
    "AI Specialist",
    "DevOps Engineer",
    "Game Developer",
    "Binary Poet",
    "Code Whisperer",
    "Algorithm Alchemist",
    "Zenith Zealot",
    "Enigma Engineer"
  ], []);

  const [textIndex, setTextIndex] = useState(Math.floor(Math.random() * words.length));  // Changed here
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const randomSpeed = (min, max) => Math.random() * (max - min) + min;

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const getNextWordIndex = useCallback(() => {
    let newIndex = Math.floor(Math.random() * words.length);
    while(newIndex === textIndex) {
      newIndex = Math.floor(Math.random() * words.length);
    }
    return newIndex;
  }, [textIndex, words]);

  useEffect(() => {
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        if (charIndex > 0) {
          setDisplayedText(words[textIndex].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex(getNextWordIndex());
        }
      }, randomSpeed(10, 75));
    } else {
      if (charIndex < words[textIndex].length) {
        timer = setTimeout(() => {
          setDisplayedText(words[textIndex].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, randomSpeed(50, 150));
      } else {
        async function waitAndDelete() {
          await sleep(3000);
          setIsDeleting(true);
        }
        waitAndDelete();
      }
    }

    return () => clearTimeout(timer);
  }, [isDeleting, textIndex, charIndex, words, getNextWordIndex]);

  return <>{displayedText}<span style={{opacity: 0.2}}>|</span></>;
};

export default TypingAnimation;
