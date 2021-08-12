import { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { TasksContext } from '../../Context/TasksContext';
import { Container } from './style';
import { BsFilterLeft } from 'react-icons/bs';

export const Task: React.FC = () => {
  const {
    toDoList,
    handleDeleteTask,
    sortByCategory,
    sortByLevelPriority,
    sortByTaskName,
    filteredStatus,
  } = useContext(TasksContext);

  return (
    <Container>
      <div className="wrapper titles animeLeft">
        <div className="checkField" />
        <div className="sortField">
          <p>Title</p>
          {filteredStatus.task ? (
            <BsFilterLeft className='mirrorClass' size="32" onClick={sortByTaskName} />
          ) : (
            <BsFilterLeft size="32" onClick={sortByTaskName} />
          )}
        </div>
        <div className="sortField">
          <p>Category</p>
          {filteredStatus.category ? (
            <BsFilterLeft className='mirrorClass' size="32" onClick={sortByCategory} />
          ) : (
            <BsFilterLeft size="32" onClick={sortByCategory} />
          )}
        </div>
        <div className="levelPriority sortField">
          <p>Level Priority</p>
          {filteredStatus.levelPriority ? (
            <BsFilterLeft className='mirrorClass' size="32" onClick={sortByLevelPriority} />
          ) : (
            <BsFilterLeft size="32" onClick={sortByLevelPriority} />
          )}
        </div>
        <div className="trashField" />
      </div>
      {toDoList.map((task) => {
        return (
          <div className="wrapper animeLeft" key={task.id}>
            <input className="checkField" type="checkbox" />
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
