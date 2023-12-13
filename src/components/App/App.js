import { Component } from 'react';
import { Searchbar, ImageGallery, Button, Loader } from 'components';
// import css from './App.module.css';
import { getImages, perPage } from 'components/service/api';
import { AppStyled } from './App.styled';
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    isVisible: false,
    isEmpty: false,
    error: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { query, page } = this.state;
    // if (!query) {
    //   return alert('Enter query, please');
    // }
    this.setState({ isLoading: true, error: false });

    try {
      const { hits, total } = await getImages(query, page);
      // console.log('hits.length', hits.length);
      if (hits.length === 0) {
        this.setState({ isEmpty: true });
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        isVisible: page < Math.ceil(total / perPage),
      }));
      // console.log('Math.ceil', Math.ceil(total / perPage));
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onSubmitQuery = query => {
    this.setState({
      query,
      images: [],
      page: 1,
      isEmpty: false,
      isVisible: false,

      //еще добавить что-то?
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { query, images, isLoading, isVisible, isEmpty, error } = this.state;
    return (
      <AppStyled>
        <Searchbar stateQuery={query} onSubmitQuery={this.onSubmitQuery} />
        {isLoading && <Loader />}
        {error && toast.error('Sorry, something went wrong...')}
        {isEmpty &&
          toast.error('There are no images. Please, change your query!')}
        {images.length > 0 && <ImageGallery images={images} />}
        {isVisible && <Button onClick={this.onLoadMore}>Load more</Button>}
        <Toaster />
      </AppStyled>
    );
  }
}
