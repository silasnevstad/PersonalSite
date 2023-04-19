import ChessGame from "./ChessGame";
import SocialLinks from "./SocialLinks";
import NavigationMenu from "./NavigationMenu";

const LastChess = ({ isMenuOpen, toggleMenu }) => {
    return (
        <div>
            <NavigationMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <ChessGame />
            <SocialLinks />
        </div>
    );
};

export default LastChess;