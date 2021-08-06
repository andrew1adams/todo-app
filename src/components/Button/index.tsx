import React from 'react';
import { Container } from '../Button/style';

export interface ButtonProps {
  color?: string;
  bgColor?: string;
  size?: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  bgColor = '#333',
  color = '#fff',
  size = 'medium',
  onClick,
}) => {
  return (
    <Container
      color={color}
      onClick={onClick}
      bgColor={bgColor}
      size={size}
    >
      {children}
    </Container>
  );
};
