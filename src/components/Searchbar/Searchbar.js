import {
  SearchButtonStyled,
  SearchFormStyled,
  SearchInputStyled,
  SearchbarStyled,
} from './Searchbar.styled';
import toast, { Toaster } from 'react-hot-toast';

export const Searchbar = ({ stateQuery, onSubmitQuery }) => {
  const submitQuery = e => {
    e.preventDefault();
    const {
      query: { value },
    } = e.target.elements;

    const queryValue = value.trim().toLowerCase();

    if (queryValue === '') {
      // return alert('PLEASE, ENTER QUERY!');
      return toast.error('PLEASE, ENTER YOUR QUERY!');
    }

    if (queryValue === stateQuery && stateQuery !== '') {
      // return alert(
      //   'Повторний запит, перезавантажте сторінку або введіть інший запит'
      // );
      return toast.error(
        'Повторний запит, перезавантажте сторінку або введіть інший запит'
      );
    }

    onSubmitQuery(queryValue);
  };

  return (
    <>
      <SearchbarStyled>
        <SearchFormStyled onSubmit={submitQuery}>
          <SearchInputStyled
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <Toaster />
          <SearchButtonStyled type="submit">Search</SearchButtonStyled>
        </SearchFormStyled>
      </SearchbarStyled>
    </>
  );
};
