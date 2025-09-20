import { useRef } from 'react';
import './SearchInput.css';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store';
import { fetchSearchCocktail } from '../redux/features/cocktailSlice';

const SearchInput = () => {
  const searchValue = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = () => {
    const searchText = searchValue.current?.value;
    dispatch(fetchSearchCocktail({ searchText: searchText || '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="section seatch">
      <form action="" className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search Cocktail</label>
          <input type="text" id="name" name="name" ref={searchValue} onChange={handleChange} placeholder="Enter cocktail name" />
        </div>
      </form>
    </section>
  );
};

export default SearchInput;
