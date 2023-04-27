import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import '../styles/NavMenu.css';

const MenuButton = styled.button`
  color: ${({ theme }) => theme.colors.secondary};
  position: relative;
  height: 45px;
  padding: 0 25px;
  margin-left: 5px;
  border: 2px solid #111;
  background: ${({ theme }) => theme.colors.background};
  user-select: none;
  white-space: nowrap;
  transition: all .05s linear;
  font-family: inherit;

  &:before, &:after {
    content: "";
    position: absolute; 
    background: ${({ theme }) => theme.colors.background};
    transition: all .2s linear;
  }

  &:before {
    width: calc(100% + 6px);
    height: calc(100% - 16px);
    top: 8px;
    left: -3px;
  }

  &:after {
    width: calc(100% - 16px);
    height: calc(100% + 6px);
    top: -3px;
    left: 8px;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover:before {
    height: calc(100% - 32px);
    top: 16px;
  }

  &:hover:after {
    width: calc(100% - 32px);
    left: 16px;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    height: 40px;
    font-size: 0.8rem;

    &:before {
      height: calc(100% - 12px);
      top: 6px;
    }

    &:after {
      width: calc(100% - 12px);
      left: 6px;
    }

    &:hover:before {
      height: calc(100% - 24px);
      top: 12px;
    }

    &:hover:after {
      width: calc(100% - 24px);
      left: 12px;
    }
  }

`;

const MenuButtonSpan = styled.span`
  font-size: 1.5rem;
  z-index: 3;
  position: relative;
  font-weight: 600;
`;

const LeftArrow = styled.div`
  position: absolute;
  right: 0;
  width: 20px;
  height: 30px;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-right: 20px solid #222;
  z-index: 200;

  @media (max-width: 768px) {
    width: 15px;
    height: 20px;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-right: 15px solid #222;
  }
`;

const NavText = styled.p`
  font-size: 1rem;
  padding: 5px 5px;
  opacity: 0.9;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    opacity: 1;
  }
`;

const NavUl = styled.ul`
  z-index: 1;
  list-style: none;
  padding: 0;
`;

const NavLi = styled.li`
  z-index: 10;
  &:hover {
    background: ${({ theme }) => theme.colors.secondaryLight};
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }
`;

const NavMenuContainer = styled.nav`
  position: fixed;
  z-index: 100;
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

  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (node.current.contains(e.target)) {
  //       // inside click
  //       // return;
  //       toggleMenu();
  //       console.log('inside click')
  //     }
  //     console.log('outside click')
  //     // outside click
  //     if (isMenuOpen) {
  //       toggleMenu();
  //     }
  //     return;
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [node]);

  return (
    <>
      <MenuButton onClick={toggleMenu}>
        <MenuButtonSpan> Menu </MenuButtonSpan>
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
            <Link to="/resume" onClick={toggleMenu}>
              <NavText>Resume</NavText>
            </Link>
          </NavLi>
          <NavLi>
            <Link to="/projects" onClick={toggleMenu}>
              <NavText>Projects</NavText>
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
        </NavUl>
      </NavMenuContainer>
    </>
  );
};

export default NavigationMenu;