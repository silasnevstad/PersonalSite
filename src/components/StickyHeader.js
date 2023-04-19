import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StickyHeaderContainer = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`;

const StickyHeaderText = styled.h1`
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0;
  padding: 5px 10px;
`;

const StickyHeader = () => {
  const [headerText, setHeaderText] = useState('');

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

      setHeaderText(newHeaderText);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StickyHeaderContainer>
      <StickyHeaderText>{headerText}</StickyHeaderText>
    </StickyHeaderContainer>
  );
};

export default StickyHeader;
