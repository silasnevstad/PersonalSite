import ChessGame from "./ChessGame";
import SocialLinks from "./SocialLinks";
import NavigationMenu from "./NavigationMenu";
import styled from "styled-components";

const ChessResizeContainer = styled.div`
  margin-left: ${({ isMenuOpen }) => isMenuOpen ? '250px' : '0'};
  width: ${({ isMenuOpen }) => isMenuOpen ? 'calc(100% - 250px)' : '100%'};
  transition: margin-left 0.3s ease-in-out;
`;

const LastChess = ({ isMenuOpen, toggleMenu }) => {
    return (
        <div>
            <NavigationMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <ChessResizeContainer isMenuOpen={isMenuOpen}>
                <ChessGame />
            </ChessResizeContainer>
            <SocialLinks />
        </div>
    );
};

export default LastChess;