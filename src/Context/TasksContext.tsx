import React, { Dispatch, SetStateAction, useState } from 'react';
import { ReactElement } from 'react';
import { createContext } from 'react';
import { MdSignalCellular0Bar } from 'react-icons/md';

export interface TaskProps {
  id: number;
  task: string;
  category: string;
  completed: boolean;
  priority: number;
  priorityIcon: ReactElement<any, any>;
}

interface FilteredStatusProps {
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
  filteredStatus: FilteredStatusProps;
  setFilteredStatus?: Dispatch<SetStateAction<FilteredStatusProps>>;
  handleDeleteTask: (id: number) => void;
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
  filteredStatus: {
    task: false,
    category: false,
    levelPriority: false,
  },
  handleDeleteTask: (id: number) => {},
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

  const toUpperCaseTransform = (taskProperty: string) => {
    return taskProperty.toLocaleLowerCase();
  };

  const handleDeleteTask = (id: number) => {
    // eslint-disable-next-line no-restricted-globals
    const confirmDelete = confirm('Are you sure of DELETE this task?');

    if (confirmDelete) {
      const removeTask = [...toDoList].filter((tasks) => tasks.id !== id);
      setToDoList(removeTask);
    }
  };

  const sortByTaskName = () => {
    const orderedArrayByTaskName = [...toDoList].sort((taskA, taskB) => {
      let A = toUpperCaseTransform(taskA.task),
        B = toUpperCaseTransform(taskB.task);
      return A > B ? -1 : B > A ? 1 : 0;
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
    const orderedArrayByCategory = [...toDoList].sort((taskA, taskB) => {
      let A = toUpperCaseTransform(taskA.category),
        B = toUpperCaseTransform(taskB.category);
      return A > B ? -1 : B > A ? 1 : 0;
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
    const orderedArrayByLevelPriority = [...toDoList].sort((taskA, taskB) => {
      let A = taskA.priority,
        B = taskB.priority;
      return A > B ? -1 : B > A ? 1 : 0;
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
        filteredStatus,
        handleDeleteTask,
        sortByTaskName,
        sortByCategory,
        sortByLevelPriority,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
