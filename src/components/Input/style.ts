import { darken } from 'polished';
import styled from 'styled-components';

import { InputProps } from '.';

export const Container = styled.div<Pick<InputProps, 'color' | 'bgColor'>>`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  color: ${({color}) => color};
  background-color: transparent;

  input {
    min-width: 70%;
    padding: .75rem;
    border: none;
    background-color: ${({bgColor}) => darken(.2, String(bgColor))};
    border-radius: .5rem;
  }
`;
