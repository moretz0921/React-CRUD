import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle` 
${reset}

  * {
    font-family: 'Noto Sans KR', sans-serif;
    color: #111;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

`;

export default GlobalStyle;
