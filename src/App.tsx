import { Header } from './components/Header';
import { GlobalStyles } from './styles/global';
import { HiLightBulb } from 'react-icons/hi';
import { useState } from 'react';
import { ModalComponent } from './components/ModalComponent';

import { HiPlusCircle } from 'react-icons/hi';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <GlobalStyles />
      {openModal && <ModalComponent onClick={() => setOpenModal(false)} />}
      <Header
        logotype={<HiLightBulb size="48" color="#fff" />}
        buttonInterative={
          <HiPlusCircle size="36" onClick={() => setOpenModal(true)} className='btnSvg' />
        }
      />
    </div>
  );
}

export default App;
