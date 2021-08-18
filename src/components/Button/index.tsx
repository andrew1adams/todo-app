import React from 'react';
import { Container } from '../Button/style';

export interface ButtonProps {
  color?: string;
  bgColor?: string;
  size?: string;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  bgColor = '#333',
  color = '#fff',
  size = 'medium',
  onClick,
  ...props
}) => {
  return (
    <Container
      className={className}
      color={color}
      onClick={onClick}
      bgColor={bgColor}
      size={size}
      {...props}
    >
      {children}
    </Container>
  );
};
