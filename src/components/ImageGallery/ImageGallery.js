import { ImageGalleryItem } from 'components';
import { ImageGalleryStyled } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryStyled>
      {images.map(image => {
        const { id, webformatURL, alt, largeImageURL } = image;
        return (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            alt={alt}
            srcLarge={largeImageURL}
          />
        );
      })}
    </ImageGalleryStyled>
  );
};
