import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --header-height: 10.4rem;

    --max-z-index: 100;

    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button, input, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }

  body {
    padding-top: var(--header-height);
  }

  &:focus {
    outline: 0;
  }
`;
