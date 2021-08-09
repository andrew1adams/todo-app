import React, { Dispatch, SetStateAction, useState } from 'react';
import { createContext } from 'react';

export interface TaskProps {
  id: number;
  task: string;
  category: string;
  completed: boolean
  priority: number
}

interface PropsTaskContext {
  inputValue: TaskProps;
  setInputValue: Dispatch<SetStateAction<TaskProps>>;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  toDoList: TaskProps[];
  setToDoList: Dispatch<SetStateAction<TaskProps[]>>;
}

const defaultValue = {
  inputValue: {
    id: 0,
    task: '',
    category: '',
    completed: false,
    priority: 0
  },
  setInputValue: () => {},
  openModal: false,
  setOpenModal: () => {},
  toDoList: [],
  setToDoList: () => {},
};

export const TasksContext = createContext<PropsTaskContext>(defaultValue);

export const TasksContextProvider: React.FC = ({ children }) => {
  const [inputValue, setInputValue] = useState(defaultValue.inputValue);
  const [openModal, setOpenModal] = useState(defaultValue.openModal);
  const [toDoList, setToDoList] = useState<TaskProps[]>(defaultValue.toDoList);

  return (
    <TasksContext.Provider
      value={{
        inputValue,
        setInputValue,
        openModal,
        setOpenModal,
        toDoList,
        setToDoList
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
