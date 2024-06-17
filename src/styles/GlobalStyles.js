// src/styles/GlobalStyles.js
// Black text and white background
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background: white;
    color: black;
  }
`;

export default GlobalStyle;
