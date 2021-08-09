import { Header } from './components/Header';
import { GlobalStyles } from './styles/global';
import { HiLightBulb } from 'react-icons/hi';
import { ModalComponent } from './components/ModalComponent';
import { HiPlusCircle } from 'react-icons/hi';
import { useContext } from 'react';
import { TasksContext } from './Context/TasksContext';
import { TasksList } from './components/TasksList';

const App = () => {
  const { openModal, setOpenModal } = useContext(TasksContext);

  return (
    <div className="App">
      <GlobalStyles />
      {openModal && <ModalComponent onClick={() => setOpenModal(false)} />}
      <Header
        logotype={<HiLightBulb size="48" color="#fff" />}
        buttonInterative={
          <HiPlusCircle
            size="36"
            onClick={() => setOpenModal(true)}
            className="btnSvg"
          />
        }
        principalHeader={true}
      />
      <TasksList />
    </div>
  );
};

export default App;
