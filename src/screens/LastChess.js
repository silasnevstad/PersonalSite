import ChessGame from "../components/ChessGame";
import NavigationMenu from "../components/NavigationMenu";
import NavigationHeader from '../components/NavigationHeader';
import styled from "styled-components";

const ChessResizeContainer = styled.div`
    // margin-left: ${({ isMenuOpen }) => isMenuOpen ? '250px' : '0'};
    margin-top: 3.2em;
    // width: ${({ isMenuOpen }) => isMenuOpen ? 'calc(100% - 250px)' : '100%'};
    // transition: margin-left 0.3s ease-in-out;

    @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 1em;
        width: 100%;
    }
`;

const LastChess = ({ isMenuOpen, toggleMenu }) => {
    return (
        <div>
            <NavigationMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <NavigationHeader currentPage={"/chess"} toggleMenu={toggleMenu} />
            <ChessResizeContainer isMenuOpen={isMenuOpen}>
                <ChessGame isMenuOpen={isMenuOpen} />
            </ChessResizeContainer>
        </div>
    );
};

export default LastChess;