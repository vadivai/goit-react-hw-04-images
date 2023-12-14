import ReactModal from 'react-modal';
import { ModalStyled } from './Modal.styled';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1200,
  },

};

export const Modal = ({ isOpen, onClose, srcLarge, alt }) => {
  return (

    <ModalStyled
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Large Image"
    >
      <img src={srcLarge} alt={alt} />
    </ModalStyled>
  );
};

ReactModal.setAppElement('#root');
