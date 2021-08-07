import { setLightness } from 'polished';
import styled from 'styled-components';
import { ButtonProps } from '.';

export const Container = styled.button<Pick<ButtonProps, 'color' | 'bgColor' | 'size'>>`
  padding: ${({ size }) => {
    if (size === 'large') {
      return '1.5rem 3rem';
    }
    if (size === 'medium') {
      return '1rem 2rem';
    }
    if (size === 'small') {
      return '.5rem 1rem';
    }
  }};
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  cursor: pointer;
  border-radius: 0.5rem;
  border: none;
  font-weight: bold;
  font-size: 1rem;

  &:hover {
    background-color: ${({ bgColor }) => setLightness(0.4, String(bgColor))};
  }
`;
