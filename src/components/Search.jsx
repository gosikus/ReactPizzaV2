import React, { useContext, useRef, useDeferredValue } from 'react';
import CardContext from '../scripts/CardContext';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../redux/slices/FilterSlice';
import debounce from 'lodash.debounce';
   
const Search = () => {
  // const { search, setSearch } = useContext(CardContext);
  const search = useSelector((state) => state.filter.search);
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();

  // const deferredSearch = useDeferredValue(value);

  const inputRef = useRef(null);
  const clearInput = () => {
    dispatch(setSearch(''));
    setValue("")
  };
  const updateSearchInput = React.useCallback(
    debounce((value) => {
      dispatch(setSearch(value));
    }, 1000),[]
  );

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchInput(e.target.value)
  };

  return (
    <div className='search__container'>
      <input
        className="input"
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        placeholder="поиск"
        type="text"
      />
      <button
        className="button search__button"
        onClick={() => {
          clearInput();
        }}>
        <img
          className="search__img-delete"
          src="https://avatanplus.com/files/resources/original/5968a2c8f2ed115d40bbe123.png"
          alt="удалить"
        />
      </button>
    </div>
  );
};

export default Search;
