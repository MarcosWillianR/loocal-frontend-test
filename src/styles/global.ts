import { createGlobalStyle } from 'styled-components';
import { LIGHT_COLOR_1, SECONDARY_COLOR } from './variables';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${LIGHT_COLOR_1};
    -webkit-font-smoothing: antialiased;
    color: ${SECONDARY_COLOR};
  }

  body, input, button {
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
  }

  h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
  }
`;
