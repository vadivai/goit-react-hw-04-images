import styled from 'styled-components';
import ReactModal from 'react-modal';

// export const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.8);
//   z-index: 1200;
// `;

export const ModalStyled = styled(ReactModal)`
  max-width: calc(60vw);
  max-height: calc(70vh-12px);
  position: absolute;
  top: 50%;
  left: 50%;
  /* right: auto;
  bottom: auto; */
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;
