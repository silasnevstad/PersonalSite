import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import '../styles/NavMenu.css';

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #5c86ff;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;

const LeftArrow = styled.div`
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-right: 20px solid #222;
  z-index: 100;
`;

const NavText = styled.p`
  font-size: 1rem;
  padding: 5px 5px;
  opacity: 0.9;
  color: ${({ theme }) => theme.colors.text};
`;

const NavUl = styled.ul`
  z-index: 1;
  list-style: none;
  padding: 0;
  margin-top: -40px;
`;

const NavLi = styled.li`
  z-index: 1;
  &:hover {
    background: #5c86ff;
    text-decoration: none;
  }
`;

const NavMenuContainer = styled.nav`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 15%;
  height: 100%;
  background-color: #333; //#4273ff;
  transition: transform 0.3s ease-in-out;
  overflow: hidden;

  transform: ${({ isMenuOpen }) => (isMenuOpen ? 'translateX(0)' : 'translateX(-100%)')};

  @media (max-width: 768px) {
    width: 50%;
  }
`;

const NavigationMenu = ({ isMenuOpen, toggleMenu }) => {

  // when user clicks outside of menu when it is open, close the menu
  const node = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (node.current.contains(e.target)) {
        // inside click
        // return;
        toggleMenu();
        console.log('inside click')
      }
      console.log('outside click')
      // outside click
      if (isMenuOpen) {
        
        toggleMenu();
      }
      return;
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [node]);

  return (
    <>
      <MenuButton onClick={toggleMenu}>
        Menu
      </MenuButton>

      <NavMenuContainer isMenuOpen={isMenuOpen} ref={node}>
        <LeftArrow onClick={toggleMenu} />
        <NavUl>
          <NavLi>
            <Link to="/" onClick={toggleMenu}>
              <NavText>Home</NavText>
            </Link>
          </NavLi>
          <NavLi>
            <Link to="/projects" onClick={toggleMenu}>
              <NavText>Projects</NavText>
            </Link>
          </NavLi>
          <NavLi>
            <Link to="/resume" onClick={toggleMenu}>
              <NavText>Resume</NavText>
            </Link>
          </NavLi>
          <NavLi>
            <Link to="/lastChess" onClick={toggleMenu}>
              <NavText>My Chess Games</NavText>
            </Link>
          </NavLi>
          <NavLi>
            <a href="https://www.senttrac.com" onClick={toggleMenu}>
              <NavText>Senttrac</NavText>
            </a>
          </NavLi>
          <NavLi>
            <a href="https://marketplace.visualstudio.com/items?itemName=SilasNevstad.gpthelper" onClick={toggleMenu}>
              <NavText>VSCode GPT</NavText>
            </a>
          </NavLi>
          <NavLi>
            <a href="https://www.humangpt.me" onClick={toggleMenu}>
              <NavText>HumanGPT</NavText>
            </a>
          </NavLi>
          <NavLi>
            <a href="https://www.scramdleb.com" onClick={toggleMenu}>
              <NavText>Scramdleb</NavText>
            </a>
          </NavLi>
          <NavLi>
            <a href="https://apps.apple.com/gb/app/chess-clock-by-sn/id1666157309" onClick={toggleMenu}>
              <NavText>ChessClock</NavText>
            </a>
          </NavLi>
          <NavLi>
            <a href="http://categoridle.com" onClick={toggleMenu}>
              <NavText>Categoridle</NavText>
            </a>
          </NavLi>
        </NavUl>
      </NavMenuContainer>
    </>
  );
};

export default NavigationMenu;