import { useContext } from 'react';
import { TasksContext } from '../../Context/TasksContext';
import { Container } from './style';

export const Task = () => {
  const { toDoList } = useContext(TasksContext);

  return (
    <Container>
      <div className="wrapperTask">
        <p className="taskTitle">Title</p>
        <p className="category">Category</p>
        <p className="levelPriority">Level Priority</p>
      </div>
      {toDoList.map((task) => {
        return (
          <div className="wrapperTask" key={task.id}>
            <p>{task.task}</p>
            <p>{task.category}</p>
            <p>{task.priorityIcon}</p>
          </div>
        );
      })}
    </Container>
  );
};
