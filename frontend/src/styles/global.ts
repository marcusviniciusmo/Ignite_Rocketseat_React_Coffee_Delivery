import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button, input, textarea {
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
  }

  &:focus {
    outline: 0;
  }
`;
