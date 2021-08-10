import { darken, transparentize } from 'polished';
import styled from 'styled-components';

import { InputProps } from '.';

export const Container = styled.div<Pick<InputProps, 'color' | 'bgColor'>>`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  color: ${({color}) => color};
  background-color: transparent;
  
  .wrapperInput{
    min-width: 70%;
    display:  flex;
    gap: 1rem;
    justify-content: space-around;
    align-items: center;
  }

  input {
    width: 100%;
    padding: .75rem;
    border: none;
    background-color: ${({bgColor}) => darken(.2, String(bgColor))};
    border-radius: .5rem;
    transition: .3s;
    &:focus, &:hover {
      box-shadow: 0 0 0 1px ${({color}) => transparentize(.5, String(color))};
    } 
  }
`;
