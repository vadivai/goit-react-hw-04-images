import { useState } from 'react';
import { ImgStyled, ItemStyled } from './ImageGalleryItem.styled';
import { Modal } from 'components';

export const ImageGalleryItem = ({ src, alt, srcLarge }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ItemStyled>
        <ImgStyled src={src} alt={alt} onClick={openModal} />
      </ItemStyled>
      <Modal isOpen={isModalOpen} onClose={closeModal} srcLarge={srcLarge} />
    </>
  );
};
