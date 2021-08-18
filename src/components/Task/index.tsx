import { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { TasksContext } from '../../Context/TasksContext';
import Checkbox from '@material-ui/core/Checkbox';

export const Task: React.FC = () => {
  const { toDoList, setToDoList, handleDeleteTask } =
    useContext(TasksContext);
  const handleCompletedTask = (id: number) => {
    const updatedToDoTask = toDoList.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }

      return task;
    });

    setToDoList(updatedToDoTask);
  };

  return (
    <>
      {toDoList.map((task) => {
        return (
          <div
            className={`wrapper animeLeft ${task.completed ? 'completed' : ''}`}
            key={task.id}
          >
            <Checkbox
              className="checkField checkboxInput"
              color="primary"
              checked={task.completed ? true : false}
              onChange={() => handleCompletedTask(task.id)}
            />
            <p>{task.task}</p>
            <p>{task.category}</p>
            <div className="levelPriority">{task.priorityIcon}</div>
            <div className="trashField">
              <FaTrashAlt
                size="20"
                color="#333"
                className="trashIcon"
                onClick={() => handleDeleteTask(task.id)}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};
