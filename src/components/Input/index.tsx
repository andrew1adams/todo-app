import React, { ReactElement } from 'react';
import { Container } from './style';

export interface InputProps {
  name: string;
  type: string;
  label?: string;
  color?: string;
  bgColor?: string;
  value: any;
  min?: number,
  max?: number,
  placeholder?: string
  complementIcon?: ReactElement
  onChange?: (ev: any) => void;
  onClick?: (ev: any) => void;
}

export const Input: React.FC<InputProps> = ({
  name,
  type,
  label,
  onChange,
  onClick,
  value,
  min,
  max,
  complementIcon,
  color = '#333',
  bgColor = '#fff',
  ...props
}) => {

  return (
    <Container bgColor={bgColor} color={color}>
      <label htmlFor={name}>{label}</label>
      <div className='wrapperInput'>
        <input
          name={name}
          id={name}
          type={type}
          value={value}
          min={min}
          max={max}
          onChange={onChange}
          onClick={onClick}
          {...props}
        />
        {complementIcon ? complementIcon : null}
      </div>
    </Container>
  );
};
