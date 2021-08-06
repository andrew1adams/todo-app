import React, { ReactElement } from 'react';
import { Container } from './style';

export interface HeaderProps {
  logotype: ReactElement<any, any> | string;
  buttonInterative: ReactElement<any, any>;
  bgColor?: string;
  color?: string;
}

export const Header: React.FC<HeaderProps> = ({
  logotype,
  bgColor = '#333',
  color = '#fff',
  buttonInterative,
}) => {
  return (
    <Container bgColor={bgColor} color={color}>
      <div>
        {logotype}
        {buttonInterative}
      </div>
    </Container>
  );
};
