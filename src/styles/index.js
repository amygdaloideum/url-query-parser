import { createGlobalStyle } from 'styled-components';
import { colors } from './vars';

export default createGlobalStyle`
  
  html {
    font-family: -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background: ${colors.background};
    color: white;
    font-size: 32px;
  }

  * {
    font-weight: 200;
  }

`;
