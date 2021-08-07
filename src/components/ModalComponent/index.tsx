import { Container } from './style';
import { HiXCircle } from 'react-icons/hi';
import { Header } from '../Header';
import { ModalForm } from '../ModalForm';

export interface ModalProps {
  color?: string;
  bgColor?: string;
  onClick: () => void;
}

export const ModalComponent: React.FC<ModalProps> = ({
  color = '#fff',
  bgColor = '#333',
  onClick,
}) => {
  const handleOutsideClick = ({ target }: any) => {
    if (target.id === 'modalContent') onClick();
  };

  return (
    <Container
      id="modalContent"
      color={color}
      bgColor={bgColor}
      onClick={handleOutsideClick}
    >
      <div className="wrapperModal">
        <Header
          logotype="Adicionar Nova Tarefa"
          buttonInterative={
            <HiXCircle size="36" onClick={onClick} className="btnSvg" />
          }
          height="auto"
          color={color}
          bgColor={bgColor}
        />
        <ModalForm />
      </div>
    </Container>
  );
};
