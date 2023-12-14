import styled from 'styled-components';
import ReactModal from 'react-modal';

export const ModalStyled = styled(ReactModal)`
  max-width: calc(60vw);
  max-height: calc(70vh-12px);
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;
