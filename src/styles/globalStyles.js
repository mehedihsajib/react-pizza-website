import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


  /* Basic Styles */
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Kanit', sans-serif;
    /* background-color: var(--color-primary); */
  }
    
  h1,h2,h3,h4 {
    margin: 0;
    padding: 0;
    font-weight: bold;
    line-height: 1.2;
  }
`;
