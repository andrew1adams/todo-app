import styled from 'styled-components';

import { ModalProps } from '.';

export const Container = styled.div<Omit<ModalProps, 'onClick'>>`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .4);
  z-index: 1;
  display:flex;
  justify-content: center;
  align-items: center;
 
  .wrapperModal {
    width: 40%;
    height: 60%;
    margin: auto;
    background-color: ${({color}) => color};
    color: ${({bgColor}) => bgColor};
    border-radius: .5rem;
    overflow: hidden;
  } 

  .wrapperModal header {
    height: 20vh;
    display: flex;
    justify-content: space-between;
  }
`;
