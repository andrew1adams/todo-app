import { useContext } from 'react';
import { FaLongArrowAltUp, FaTrashAlt } from 'react-icons/fa';
import { TasksContext } from '../../Context/TasksContext';
import { Container } from './style';

export const Task: React.FC = () => {
  const {
    toDoList,
    setToDoList,
    filteredStatus,
    handleDeleteTask,
    sortByCategory,
    sortByLevelPriority,
    sortByTaskName,
  } = useContext(TasksContext);

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
    <Container>
      <div className="wrapper titles animeLeft">
        <div className="checkField" />
        <div className="sortField">
          <p>Title</p>
          {filteredStatus.task ? (
            <FaLongArrowAltUp size="24" onClick={sortByTaskName} />
          ) : (
            <FaLongArrowAltUp
              className="mirrorClass"
              size="24"
              onClick={sortByTaskName}
            />
          )}
        </div>
        <div className="sortField">
          <p>Category</p>
          {filteredStatus.category ? (
            <FaLongArrowAltUp size="24" onClick={sortByCategory} />
          ) : (
            <FaLongArrowAltUp
              className="mirrorClass"
              size="24"
              onClick={sortByCategory}
            />
          )}
        </div>
        <div className="levelPriority sortField">
          <p>Level Priority</p>
          {filteredStatus.levelPriority ? (
            <FaLongArrowAltUp size="24" onClick={sortByLevelPriority} />
          ) : (
            <FaLongArrowAltUp
              className="mirrorClass"
              size="24"
              onClick={sortByLevelPriority}
            />
          )}
        </div>
        <div className="trashField" />
      </div>
      {toDoList.map((task) => {
        return (
          <div
            className={`wrapper animeLeft ${task.completed ? 'completed' : ''}`}
            key={task.id}
          >
            <input
              className="checkField"
              type="checkbox"
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
    </Container>
  );
};
