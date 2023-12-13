import { useEffect, useState } from 'react';
import { Searchbar, ImageGallery, Button, Loader } from 'components';
// import css from './App.module.css';
import { getImages, perPage } from 'components/service/api';
import { AppStyled } from './App.styled';
import toast, { Toaster } from 'react-hot-toast';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setImages(prevImages => [...prevImages, fetchImages()]);
  }, [query, page]);

  const fetchImages = async () => {
    // if (!query) {
    //   return alert('Enter query, please');
    // }
    setIsLoading(true);
    setError(false);

    try {
      const { hits, total } = await getImages(query, page);
      // console.log('hits.length', hits.length);
      if (hits.length === 0) {
        setIsEmpty(true);
      }
      setImages(prevImages => [...prevImages, ...hits]);
      setIsVisible(page < Math.ceil(total / perPage));
      // console.log('Math.ceil', Math.ceil(total / perPage));
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmitQuery = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setIsEmpty(false);
    setIsVisible(false);
  };

  const onLoadMore = () => {
    setPage(prevPage => (page = prevPage + 1));
  };

  return (
    <AppStyled>
      <Searchbar stateQuery={query} onSubmitQuery={onSubmitQuery} />
      {isLoading && <Loader />}
      {error && toast.error('Sorry, something went wrong...')}
      {isEmpty &&
        toast.error('There are no images. Please, change your query!')}
      {images.length > 0 && <ImageGallery images={images} />}
      {isVisible && <Button onClick={onLoadMore}>Load more</Button>}
      <Toaster />
    </AppStyled>
  );
};
