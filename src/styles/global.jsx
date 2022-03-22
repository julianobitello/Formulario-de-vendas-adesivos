import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   html {
    font-size: 62.5%; //isso e para que o rem seja igual a 10px em vez de 16px
    background-color: #6a329f;
  }

   body, input, textarea, button {
      font-family: 'roboto', sans-serif;
      font-weight: 400;
   }

   button{
      cursor: pointer;
   }

`;
