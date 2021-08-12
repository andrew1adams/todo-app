import { darken } from 'polished';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', monospace, sans-serif;
    font-size: 1rem;
  }

  body {
    background: ${darken(.05, '#fff')};
  }

  .animeLeft {
    animation: animeLeft ${Math.random() + 's'} forwards;
  }

  @keyframes animeLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: initial;
    } 
  }
`;
