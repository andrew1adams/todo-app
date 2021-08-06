import styled from 'styled-components';

import { HeaderProps } from '.';

export const Container = styled.header<Omit<HeaderProps, 'buttonInterative' | 'logotype'>>`
  width: 100%; 
  height: 30vh;
  background-color: ${({bgColor}) => bgColor};
  color: ${({color}) => color};
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 860px;
    margin: 0 auto;
    padding: 1rem 2rem;
    & svg.btnSvg {
      cursor: pointer;
    }
  }
`;
