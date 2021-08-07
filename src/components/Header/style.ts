import { darken } from 'polished';
import styled from 'styled-components';

import { HeaderProps } from '.';

export const Container = styled.header<Pick<HeaderProps, 'bgColor' | 'color' | 'height'>>`
  width: 100%;
  min-height: ${({height}) => height};
  background-color: ${({bgColor}) => bgColor};
  color: ${({color}) => color};

  .todoName {
    display: flex;
    flex-direction: row;
    gap: .2rem;
    text-align: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: bolder;
    
    p {
      font-size: 2.75rem;
    }

    p:nth-child(2) {
      color: ${({color}) => darken(.3, String(color))};
    }
  }

  .wrapperHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 860px;
    margin: 0 auto;
    padding: 1rem 2rem;
    & svg.btnSvg {
      cursor: pointer;
    }
  }
`;
