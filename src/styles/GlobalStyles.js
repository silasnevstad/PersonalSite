import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        font-family: "Menlo", monospace;
        margin: 0;
        padding: 1em;
        font-family: "Menlo", monospace;
    }

    a {
        color: ${({ theme }) => theme.colors.text};
        text-decoration: none;
    }
`;

export default GlobalStyles;
