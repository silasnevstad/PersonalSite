import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StickyHeaderContainer = styled.div`
  position: fixed;
  top: 1em;
  width: 100%;
  background-color: #222;

  left: 1em;
`;

const StickyHeaderText = styled.h1`
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0;
  padding: 5px 10px;
`;

const StickyHeader = ({ isMenuOpen }) => {
  const [headerText, setHeaderText] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let newHeaderText = '';

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        if (rect.top < 130) {
          newHeaderText = section.querySelector('h2').textContent;
        }
      }

      if (newHeaderText === '') {
        setShow(false);
      } else {
        setShow(true);
      }
      setHeaderText(newHeaderText);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StickyHeaderContainer isMenuOpen={isMenuOpen}>
      {show && <>
        <div class="sticky-div">
          <h1>Silas Nevstad</h1>
          <h2 className="headerH2"> Boston, MA | nevstads@gmail.com | <a href="https://www.linkedin.com/in/silas-nevstad-3091a420b/">LinkedIn</a> | <a href="https://github.com/silasnevstad/">Github</a> </h2>
        </div>
        <StickyHeaderText>{headerText}</StickyHeaderText>
      </>}
      
    </StickyHeaderContainer>
  );
};

export default StickyHeader;
