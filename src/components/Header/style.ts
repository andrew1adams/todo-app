import styled from 'styled-components';

import { HeaderProps } from '.';

export const Container = styled.header<Pick<HeaderProps, 'bgColor' | 'color' | 'height'>>`
  width: 100%;
  min-height: ${({height}) => height};
  background-color: ${({bgColor}) => bgColor};
  color: ${({color}) => color};

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
