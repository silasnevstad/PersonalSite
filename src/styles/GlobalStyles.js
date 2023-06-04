import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        font-family: 'Inter', sans-serif;
        margin: 0;
        // padding: 1em;
        max-width: 100vw;
        overflow-x: hidden;
    }

    a {
        color: ${({ theme }) => theme.colors.text};
        text-decoration: none;
    }

    .feather {
        color: ${({ theme }) => theme.colors.text};
    }
`;

export default GlobalStyles;
