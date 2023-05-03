import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

// const MenuButton = styled.button`
//   color: ${({ theme }) => theme.colors.secondary};
//   position: fixed;
//   top: 1em;
//   right: 1em;

//   height: 45px;
//   padding: 0 25px;
//   margin-left: 5px;
//   border: 2px solid #111;
//   background: ${({ theme }) => theme.colors.background};
//   user-select: none;
//   white-space: nowrap;
//   transition: all .05s linear;
//   font-family: inherit;

//   &:before, &:after {
//     content: "";
//     position: absolute; 
//     background: ${({ theme }) => theme.colors.background};
//     transition: all .2s linear;
//   }

//   &:before {
//     width: calc(100% + 6px);
//     height: calc(100% - 16px);
//     top: 8px;
//     left: -3px;
//   }

//   &:after {
//     width: calc(100% - 16px);
//     height: calc(100% + 6px);
//     top: -3px;
//     left: 8px;
//   }

//   &:hover {
//     cursor: pointer;
//   }

//   &:hover:before {
//     height: calc(100% - 32px);
//     top: 16px;
//   }

//   &:hover:after {
//     width: calc(100% - 32px);
//     left: 16px;
//   }

//   &:active {
//     transform: scale(0.95);
//   }

//   @media (max-width: 768px) {
//     padding: 0 20px;
//     height: 40px;
//     font-size: 0.8rem;

//     &:before {
//       height: calc(100% - 12px);
//       top: 6px;
//     }

//     &:after {
//       width: calc(100% - 12px);
//       left: 6px;
//     }

//     &:hover:before {
//       height: calc(100% - 24px);
//       top: 12px;
//     }

//     &:hover:after {
//       width: calc(100% - 24px);
//       left: 12px;
//     }
//   }

// `;

const MenuButton = styled.button`
  color: ${({ theme }) => theme.colors.background};
  position: fixed;
  top: 1em;
  right: 1em;
  border-radius: 100px;
  
  height: 45px;
  width: 45px;
  margin-left: 5px;
  border: 2px solid #111;
  background: #44ff44;
  user-select: none;
  white-space: nowrap;
  transition: all .05s linear;
  font-family: inherit;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuButtonImg = styled.img`
  height: 20px;
  width: 20px;
  color: ${({ theme }) => theme.colors.background};
  tint: ${({ theme }) => theme.colors.background};
  tintColor: ${({ theme }) => theme.colors.background};
`;

const MenuButtonSpan = styled.span`
  font-size: 1.5rem;
  z-index: 3;
  position: relative;
  font-weight: 600;
`;

const NavText = styled.p`
  font-size: 1rem;
  padding: 5px 5px;
  opacity: 0.9;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    opacity: 1;
    color: #4273fffa;
  }
`;

const NavMenuContainer = styled.nav`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: auto; /* change height to auto for the dropdown */
  background-color: #333; //#4273ff;
  transition: transform 0.3s ease-in-out;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: ${({ isMenuOpen }) => (isMenuOpen ? 'translateY(0)' : 'translateY(-100%)')};

  @media (max-width: 768px) {
    height: 40%;
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavMenuContainerLower = styled.div`
  position: relative;
  margin-top: .5em;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 1em;
  width: 50%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 95%;

    position: absolute;
    top: 0;
  }
`;

const NavMenuContainerFooter = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: .5em 0;
  gap: 8%;
  width: 100%;

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    margin-left: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 42%;
  }
`;

const PinImg = styled.img`
  width: 14px;
  height: 18px;
  rotate: 30deg;
`;

const liftPin = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-5px);
  }
`;

const dropPin = keyframes`
  0% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;


const NavMenuFooterItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${PinImg} {
    animation: ${dropPin} 0.25s ease-out forwards;
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;

    ${PinImg} {
      animation: ${liftPin} 0.25s ease-out forwards;
    }
  }
`;

const NavMenuFooterItemAnchor = styled.a`
`;


const NavigationMenu = ({ isMenuOpen, toggleMenu }) => {
  const node = useRef();

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      // Inside the menu, do nothing
      return;
    }
    // Outside the menu, close it
    toggleMenu();
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <MenuButton onClick={toggleMenu}>
        <MenuButtonImg src={require('../images/menu.png')} alt="Menu" />
      </MenuButton>

      <NavMenuContainer isMenuOpen={isMenuOpen} ref={node}>
        <NavMenuContainerLower>
          <Link to="/" onClick={toggleMenu}>
            <NavText>Home</NavText>
          </Link>
          <Link to="/resume" onClick={toggleMenu}>
            <NavText>Resume</NavText>
          </Link>
          <Link to="/projects" onClick={toggleMenu}>
          <NavText>Projects</NavText>
          </Link>
          <Link to="/lastChess" onClick={toggleMenu}>
          < NavText>My Chess</NavText>
          </Link>
        </NavMenuContainerLower>
        <NavMenuContainerFooter>
          <NavMenuFooterItem>
            <PinImg src={require('../images/pin.png')} alt="Pin" />
            <NavMenuFooterItemAnchor href="https://www.senttrac.com" onClick={toggleMenu}>
              <NavText>Senttrac</NavText>
            </NavMenuFooterItemAnchor>
          </NavMenuFooterItem>
          <NavMenuFooterItem>
            <PinImg src={require('../images/pin.png')} alt="Pin" />
            <NavMenuFooterItemAnchor href="https://marketplace.visualstudio.com/items?itemName=SilasNevstad.gpthelper" onClick={toggleMenu}>
              <NavText>VSCode GPT</NavText>
            </NavMenuFooterItemAnchor>
          </NavMenuFooterItem>
          <NavMenuFooterItem>
            <PinImg src={require('../images/pin.png')} alt="Pin" />
            <NavMenuFooterItemAnchor href="https://www.humangpt.me" onClick={toggleMenu}>
              <NavText>HumanGPT</NavText>
            </NavMenuFooterItemAnchor>
          </NavMenuFooterItem>
          <NavMenuFooterItem>
            <PinImg src={require('../images/pin.png')} alt="Pin" />
            <NavMenuFooterItemAnchor href="https://main.d12ysqixsbwlv9.amplifyapp.com" onClick={toggleMenu}>
              <NavText>Typer</NavText>
            </NavMenuFooterItemAnchor>
          </NavMenuFooterItem>
        </NavMenuContainerFooter>
      </NavMenuContainer>
    </>
  );
};

export default NavigationMenu;