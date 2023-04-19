import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavMenu.css'
import styled from 'styled-components';

const NavigationMenu = () => {
    const NavText = styled.p`
        font-size: 1rem;
        margin: 0;
        opacity: 0.9;

        &:hover {
            opacity: 1;
        }
    `;

    return (
        <>
            <button className="menu-button">
                Menu
            </button>

            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <NavText>Home</NavText>
                        </Link>
                    </li>
                    <li>
                        <Link to="/resume">
                            <NavText>Resume</NavText>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            <NavText>Projects</NavText>
                        </Link>
                    </li>
                    <li>
                        <Link to="/lastChess">
                            <NavText>My Chess Games</NavText>
                        </Link>
                    </li>
                    <li>
                        <a href="https://www.senttrac.com">
                            <NavText>Senttrac</NavText>
                        </a>
                    </li>
                    <li>
                        <a href="https://marketplace.visualstudio.com/items?itemName=SilasNevstad.gpthelper">
                            <NavText>VSCode GPT</NavText>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.humangpt.me">
                            <NavText>HumanGPT</NavText>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.scramdleb.com">
                            <NavText>Scramdleb</NavText>
                        </a>
                    </li>
                    <li>
                        <a href="https://apps.apple.com/gb/app/chess-clock-by-sn/id1666157309">
                            <NavText>ChessClock</NavText>
                        </a>
                    </li>
                    <li>
                        <a href="http://categoridle.com">
                            <NavText>Categoridle</NavText>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavigationMenu;
