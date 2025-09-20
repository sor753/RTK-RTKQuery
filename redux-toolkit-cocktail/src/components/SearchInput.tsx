import { useRef } from 'react';
import './SearchInput.css';

const SearchInput = () => {
  const searchValue = useRef<HTMLInputElement>(null);

  return (
    <section className="section seatch">
      <form action="" className="search-form">
        <div className="form-control">
          <label htmlFor="name">Search Cocktail</label>
          <input type="text" id="name" name="name" ref={searchValue} placeholder="Enter cocktail name" />
        </div>
      </form>
    </section>
  );
};

export default SearchInput;
