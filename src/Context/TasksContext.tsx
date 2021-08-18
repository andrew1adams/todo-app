import React, { Dispatch, SetStateAction, useState } from 'react';
import { ReactElement } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { MdSignalCellular0Bar } from 'react-icons/md';
import { useLocalStorage } from '../Hooks/useLocalStorage';

export interface TaskProps {
  id: number;
  task: string;
  category: string;
  completed: boolean;
  priority: number;
  priorityIcon: ReactElement<any, any>;
}

interface FilteredStatusProps {
  completedTask: boolean;
  task: boolean;
  category: boolean;
  levelPriority: boolean;
}

interface PropsTaskContext {
  inputValue: TaskProps;
  setInputValue: Dispatch<SetStateAction<TaskProps>>;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  toDoList: TaskProps[];
  setToDoList: Dispatch<SetStateAction<TaskProps[]>>;
  localDataTask: TaskProps[] | undefined;
  setLocalDataTask: Dispatch<React.SetStateAction<TaskProps[] | undefined>>;
  filteredStatus: FilteredStatusProps;
  setFilteredStatus?: Dispatch<SetStateAction<FilteredStatusProps>>;
  handleDeleteTask: (id: number) => void;
  sortByCompletedTasks: () => void;
  sortByTaskName: () => void;
  sortByCategory: () => void;
  sortByLevelPriority: () => void;
}

const defaultValue = {
  inputValue: {
    id: 0,
    task: '',
    category: '',
    completed: false,
    priority: 0,
    priorityIcon: <MdSignalCellular0Bar size="32" />,
  },
  setInputValue: () => {},
  openModal: false,
  setOpenModal: () => {},
  toDoList: [],
  setToDoList: () => {},
  localDataTask: [],
  setLocalDataTask: () => {},
  filteredStatus: {
    completedTask: false,
    task: false,
    category: false,
    levelPriority: false,
  },
  handleDeleteTask: (id: number) => {},
  sortByCompletedTasks: () => {},
  sortByTaskName: () => {},
  sortByCategory: () => {},
  sortByLevelPriority: () => {},
};

export const TasksContext = createContext<PropsTaskContext>(defaultValue);

export const TasksContextProvider: React.FC = ({ children }) => {
  const [inputValue, setInputValue] = useState(defaultValue.inputValue);
  const [openModal, setOpenModal] = useState(defaultValue.openModal);
  const [toDoList, setToDoList] = useState<TaskProps[]>(defaultValue.toDoList);
  const [filteredStatus, setFilteredStatus] = useState<FilteredStatusProps>(
    defaultValue.filteredStatus
  );
  const [localDataTask, setLocalDataTask] = useLocalStorage(
    'todo-app/tasks',
    [...toDoList]
  );

  useEffect(() => {
    setToDoList(localDataTask as TaskProps[])

  }, [localDataTask])

  const toUpperCaseTransform = (taskProperty: string) => {
    return taskProperty.toLocaleUpperCase();
  };

  const handleDeleteTask = (id: number) => {
    // eslint-disable-next-line no-restricted-globals
    const confirmDelete = confirm('Are you sure of DELETE this task?');

    if (confirmDelete) {
      const removeTask = [...toDoList].filter((tasks) => tasks.id !== id);
      setToDoList(removeTask);
    }
  };

  const sortByCompletedTasks = () => {
    if (toDoList.length > 1) {
      const orderedArrayByCompletedTasks = [...toDoList].sort((A, B) => {
        let completedA = A.completed,
          completedB = B.completed;
        return completedA ? -1 : completedB ? 1 : 0;
      });

      setFilteredStatus({
        ...defaultValue.filteredStatus,
        completedTask: !filteredStatus.completedTask,
      });

      if (filteredStatus.completedTask) {
        setToDoList([...orderedArrayByCompletedTasks]);
      } else {
        setToDoList([...orderedArrayByCompletedTasks].reverse());
      }
    }
  };

  const sortByTaskName = () => {
    const orderedArrayByTaskName = [...toDoList].sort((A, B) => {
      let taskA = toUpperCaseTransform(A.task),
        taskB = toUpperCaseTransform(B.task);
      return taskA > taskB ? -1 : taskB > taskA ? 1 : 0;
    });

    setFilteredStatus({
      ...defaultValue.filteredStatus,
      task: !filteredStatus.task,
    });

    if (filteredStatus.task) {
      setToDoList([...orderedArrayByTaskName]);
    } else {
      setToDoList([...orderedArrayByTaskName].reverse());
    }
  };

  const sortByCategory = () => {
    const orderedArrayByCategory = [...toDoList].sort((A, B) => {
      let categoryA = toUpperCaseTransform(A.category),
        categoryB = toUpperCaseTransform(B.category);
      return categoryA > categoryB ? -1 : categoryB > categoryA ? 1 : 0;
    });

    setFilteredStatus({
      ...defaultValue.filteredStatus,
      category: !filteredStatus.category,
    });

    if (filteredStatus.category) {
      setToDoList([...orderedArrayByCategory]);
    } else {
      setToDoList([...orderedArrayByCategory].reverse());
    }
  };

  const sortByLevelPriority = () => {
    const orderedArrayByLevelPriority = [...toDoList].sort((A, B) => {
      let priorityA = A.priority,
        priorityB = B.priority;
      return priorityA > priorityB ? -1 : priorityB > priorityA ? 1 : 0;
    });

    setFilteredStatus({
      ...defaultValue.filteredStatus,
      levelPriority: !filteredStatus.levelPriority,
    });

    if (filteredStatus.levelPriority) {
      setToDoList([...orderedArrayByLevelPriority]);
    } else {
      setToDoList([...orderedArrayByLevelPriority].reverse());
    }
  };

  return (
    <TasksContext.Provider
      value={{
        inputValue,
        setInputValue,
        openModal,
        setOpenModal,
        toDoList,
        setToDoList,
        localDataTask,
        setLocalDataTask,
        filteredStatus,
        handleDeleteTask,
        sortByCompletedTasks,
        sortByTaskName,
        sortByCategory,
        sortByLevelPriority,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
