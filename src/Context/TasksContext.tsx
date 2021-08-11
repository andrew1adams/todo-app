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
    priority: 0,
    priorityIcon: <MdSignalCellular0Bar size='32' />,
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
