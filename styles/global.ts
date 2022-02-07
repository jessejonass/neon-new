import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--grey-900);
    color: var(--white);
  }

  body, input, textarea, select, button {
    font: 400 1rem "Montserrat", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4 {
    font: 400 1rem "Sofia Pro", sans-serif;
  }

  h1, h2 {
    font-weight: 700;
  }

  h3, h4 {
    font-weight: 500;
  }
`;

export default GlobalStyles;
