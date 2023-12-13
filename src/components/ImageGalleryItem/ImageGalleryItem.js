// import css from './ImageGalleryItem.module.css';
import { ImgStyled, ItemStyled } from './ImageGalleryItem.styled';
import { Component } from 'react';
import { Modal } from 'components';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };
  render() {
    const { isModalOpen } = this.state;
    const { src, alt, srcLarge } = this.props;
    return (
      <>
        <ItemStyled>
          <ImgStyled src={src} alt={alt} onClick={this.openModal} />
        </ItemStyled>
        <Modal
          isOpen={isModalOpen}
          onClose={this.closeModal}
          srcLarge={srcLarge}
        />
      </>
    );
  }
}
