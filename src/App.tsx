import { Header } from './components/Header';
import { GlobalStyles } from './Styles/global';
import { FaSave } from 'react-icons/fa';
import { ModalComponent } from './components/ModalComponent';
import { HiPlusCircle } from 'react-icons/hi';
import { useContext } from 'react';
import { TasksContext } from './Context/TasksContext';
import { TasksList } from './components/TasksList';

const App = () => {
  const { openModal, setOpenModal, toDoList, setLocalDataTask } =
    useContext(TasksContext);

  return (
    <div className="App">
      <GlobalStyles />
      {openModal && <ModalComponent onClick={() => setOpenModal(false)} />}
      <Header
        logotype={
          <>
            <FaSave
              size="32"
              color="#fff"
              onClick={() => setLocalDataTask(toDoList)}
              className="btnSvg"
            />
            <p>Save your tasks</p>
          </>
        }
        buttonInterative={
          <>
            <p>Add a new task</p>
            <HiPlusCircle
              size="36"
              color="#fff"
              onClick={() => setOpenModal(true)}
              className="btnSvg"
            />
          </>
        }
        principalHeader={true}
      />
      <TasksList />
    </div>
  );
};

export default App;
