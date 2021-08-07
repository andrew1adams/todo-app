import styled from 'styled-components';

import { ModalProps } from '.';

export const Container = styled.div<Pick<ModalProps, 'color' | 'bgColor'>>`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .4);
  z-index: 1;
  display:flex;
  justify-content: space-between;
  align-items: center;
 
  .wrapperModal {
    width: 40%;
    min-width: 400px;
    margin: 0 auto;
    background-color: ${({color}) => color};
    color: ${({bgColor}) => bgColor};
    border-radius: .5rem;
    overflow: hidden;
  } 

  .wrapperModal header {
    padding: .5rem 1rem;
    & svg.btnSvg {
      cursor: pointer;
    }
  }
`;
