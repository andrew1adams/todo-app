/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import { Task } from '../Task';
import { Container } from './style';
import { FaLongArrowAltUp } from 'react-icons/fa';
import { TasksContext } from '../../Context/TasksContext';

export const TasksList: React.FC = () => {
  const {
    toDoList,
    filteredStatus,
    sortByCompletedTasks,
    sortByCategory,
    sortByLevelPriority,
    sortByTaskName,
  } = useContext(TasksContext);

  return (
    <Container>
      <div className="wrapper titles animeLeft">
        <div className="checkField">
          {toDoList.length <= 1 ? null : filteredStatus.completedTask ? (
            <FaLongArrowAltUp size="18" onClick={sortByCompletedTasks} />
          ) : (
            <FaLongArrowAltUp
              className="mirrorClass"
              size="18"
              onClick={sortByCompletedTasks}
            />
          )}
        </div>
        <div className="sortField">
          <p>Title</p>
          {toDoList.length <= 1 ? null : filteredStatus.task ? (
            <FaLongArrowAltUp size="18" onClick={sortByTaskName} />
          ) : (
            <FaLongArrowAltUp
              className="mirrorClass"
              size="18"
              onClick={sortByTaskName}
            />
          )}
        </div>
        <div className="sortField">
          <p>Category</p>
          {toDoList.length <= 1 ? null : filteredStatus.category ? (
            <FaLongArrowAltUp size="18" onClick={sortByCategory} />
          ) : (
            <FaLongArrowAltUp
              className="mirrorClass"
              size="18"
              onClick={sortByCategory}
            />
          )}
        </div>
        <div className="sortField">
          <p>Level Priority</p>
          {toDoList.length <= 1 ? null : filteredStatus.levelPriority ? (
            <FaLongArrowAltUp size="18" onClick={sortByLevelPriority} />
          ) : (
            <FaLongArrowAltUp
              className="mirrorClass"
              size="18"
              onClick={sortByLevelPriority}
            />
          )}
        </div>
        <div className="trashField" />
      </div>
      <Task />
    </Container>
  );
};
