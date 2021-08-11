import { useContext } from 'react';
import { TasksContext } from '../../Context/TasksContext';
import { Container } from './style';
import { FaTrashAlt } from 'react-icons/fa';

export const Task = () => {
  const { toDoList, setToDoList } = useContext(TasksContext);

  const handleClick = (id: number) => {
    const removeTask = [...toDoList].filter(tasks => tasks.id !== id)

    setToDoList(removeTask)
  };

  return (
    <Container>
      <div className="wrapperTask">
        <div className="checkField"></div>
        <p className="taskTitle">Title</p>
        <p className="category">Category</p>
        <p className="levelPriority">Level Priority</p>
        <div className="trashField"></div>
      </div>
      {toDoList.map((task) => {
        return (
          <div className="wrapperTask animeLeft" key={task.id}>
            <input className="checkField" type="checkbox" />
            <p>{task.task}</p>
            <p>{task.category}</p>
            <div className="levelPriority">{task.priorityIcon}</div>
            <div className="trashField">
              <FaTrashAlt
                size="20"
                color="#333"
                className="trashIcon"
                onClick={() => handleClick(task.id)}
              />
            </div>
          </div>
        );
      })}
    </Container>
  );
};
