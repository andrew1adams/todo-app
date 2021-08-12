import React from 'react';
import { Task } from '../Task';
import { Container } from './style';

export const TasksList: React.FC = () => {
  return (
    <Container>
      <Task />
    </Container>
  );
};
