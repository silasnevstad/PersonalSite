import React from 'react';
import styled, { keyframes } from "styled-components";
import { NavLink } from 'react-router-dom';

const NavHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    // height: 40%;
    display: flex;
    flex-direction: row;
    padding-top: .5em;
    padding-bottom: .5em;
    z-index: 100;
    background-color: #222;

    @media (max-width: 768px) {
        display: none;
    }
`;

const NavHeaderLeft = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1em;
    width: 100%;
    padding-left: 1em;
`;

const NavHeaderRight = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
    width: 100%;
    justify-content: flex-end;
    padding-right: 1em;
`;

const DropdownMenu = styled.div`
    position: absolute;
    top: 60px;
    right: 0;
    width: 180px;
    display: none;
    flex-direction: column;
    background-color: #333;
    padding-top: 0.5em;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text};
      padding: 0.3em .8em;

    &:hover {
        background-color: #222;
    }
  }
`;

const DropdownMenuLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    padding: 0.5em 1em;
    height: 10%;

    &:hover {
        background-color: #222;
    }
`;

const PinImg = styled.img`
  width: 16px;
  height: 20px;
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

const NavHeaderRightItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
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

    ${DropdownMenu} {
      display: flex;
    }
  }
`;

const scramble = keyframes`
  0% { content: attr(data-content); }
  100% { content: attr(data-scramble); }
`;

const NavTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;

  @media (max-width: 768px) {
      display: none;
  }

  &:hover {
      animation: ${scramble} 0.5s steps(20, end) infinite;
  }
`;

const NavText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  padding: 5px 5px;
  opacity: 0.9;
  color: ${({ theme }) => theme.colors.text};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 5px; // this is the left padding of your NavText element
    width: 0;
    height: 1.5px;
    background: #bbb;
    transition: width 0.3s;
  }

  &:hover {
    opacity: 1;
    // color: #33ff33;
  }

  &:hover::after {
    width: calc(100% - 10px); // subtract twice the padding from the width
  }
`;

const UnderLinedNavText = styled(NavText)`
  &::after {
    width: calc(100% - 10px);
  }
`;

const NavTextActive = styled(NavText)`
  &::after {
    width: calc(100% - 10px);
  }
`;

const DropDownText = styled.p`
  font-size: 1rem;
  padding: 5px 5px;
  opacity: 0.9;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    opacity: 1;
    color: #33ff33;
  }
`;



const NavigationHeader = ({ currentPage, toggleMenu }) => {
  return (
    <NavHeader>
      <NavHeaderLeft>
        {/* <Link to="/" onClick={toggleMenu}>
          <NavTitle>
            Silas Nevstad
          </NavTitle>
        </Link> */}
      </NavHeaderLeft>
      <NavHeaderRight>
        <NavLink to="/" onClick={toggleMenu} activeclassname={NavTextActive}>
            {currentPage === "/" ? <UnderLinedNavText>Home</UnderLinedNavText> : <NavText>Home</NavText>}
        </NavLink>
        <NavLink to="/resume" onClick={toggleMenu} activeclassname={NavTextActive}>
            {currentPage === "/resume" ? <UnderLinedNavText>Resume</UnderLinedNavText> : <NavText>Resume</NavText>}
        </NavLink>
        <NavLink to="/projects" onClick={toggleMenu} activeclassname={NavTextActive}>
            {currentPage === "/projects" ? <UnderLinedNavText>Portfolio</UnderLinedNavText> : <NavText>Portfolio</NavText>}
        </NavLink>
        <NavLink to="/chess" onClick={toggleMenu} activeclassname={NavTextActive}>
            {currentPage === "/chess" ? <UnderLinedNavText>My Chess</UnderLinedNavText> : <NavText>My Chess</NavText>}
        </NavLink>
        <NavLink to="/contact" onClick={toggleMenu} activeclassname={NavTextActive}>
            {currentPage === "/contact" ? <UnderLinedNavText>Contact</UnderLinedNavText> : <NavText>Contact</NavText>}
        </NavLink>
        {/* <NavHeaderRightItem> 
          <PinImg src={require('../images/pin.png')} alt="Pin" />
          <NavText>Pinned</NavText>
          <DropdownMenu>
            <DropdownMenuLink href="https://www.buddyai.me" onClick={toggleMenu}>
                <DropDownText>BuddyAI</DropDownText>
            </DropdownMenuLink>
            <DropdownMenuLink href="https://www.senttrac.com" onClick={toggleMenu}>
                <DropDownText>Senttrac</DropDownText>
            </DropdownMenuLink>
            <DropdownMenuLink href="https://marketplace.visualstudio.com/items?itemName=SilasNevstad.gpthelper" onClick={toggleMenu}>
                <DropDownText>VSCode GPT</DropDownText>
            </DropdownMenuLink>
            <DropdownMenuLink href="https://www.humangpt.me" onClick={toggleMenu}>
                <DropDownText>HumanGPT</DropDownText>
            </DropdownMenuLink>
          </DropdownMenu>
        </NavHeaderRightItem> */}
          
      </NavHeaderRight>
    </NavHeader>
  );
}

export default NavigationHeader;