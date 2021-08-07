import React from 'react';
import { Container } from './style';

export interface InputProps {
  name: string;
  type: string;
  label: string;
  color?: string;
  bgColor?: string;
}

export const Input: React.FC<InputProps> = ({
  name,
  type,
  label,
  color= '#333',
  bgColor = '#fff',
  ...props
}) => {
  return (
    <Container bgColor={bgColor} color={color}>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} type={type} {...props}/>
    </Container>
  );
};
