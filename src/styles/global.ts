import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
  }

  body {
    min-width: 320px;
    overflow-x: hidden;
  }

  button{
    cursor: pointer;

  }

  dialog{
    display: unset;
    position: unset;
  }
`;
