import React, { ReactElement } from 'react';
import { Container } from './style';

export interface HeaderProps {
  logotype: ReactElement<any, any> | string;
  buttonInterative: ReactElement<any, any>;
  bgColor?: string;
  color?: string;
  height?: string;
  principalHeader: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  logotype,
  bgColor = '#333',
  color = '#fff',
  height = '30vh',
  buttonInterative,
  principalHeader = '',
}) => {
  return (
    <Container bgColor={bgColor} color={color} height={height}>
      <div className="wrapperHeader">
        <div className="sideGrids">{logotype}</div>
        {principalHeader && (
          <div className="todoName">
            <p>to</p>
            <p>do</p>
            <p>list</p>
          </div>
        )}
        <div className="sideGrids">{buttonInterative}</div>
      </div>
    </Container>
  );
};
