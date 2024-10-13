import React from 'react';
import CardContext from '../scripts/CardContext';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryInd } from '../redux/slices/FilterSlice';

const Categories = () => {
  const categoryInd = useSelector((state) => state.filter.categoryInd);
  const categoryTypes = useSelector((state) => state.filter.categoryTypes)   

  const dispatch = useDispatch();

  return (
    <>
      <nav className="navigation-sort">
        <ul className="navigation-sort__list">
          {categoryTypes.map((category, index) => (
            <li
              key={`category-${category}`}
              onClick={() => dispatch(setCategoryInd(index))}
              className={
                index === categoryInd
                  ? 'navigation-sort__item navigation-sort__item-active'
                  : 'navigation-sort__item'
              }>
              <a href="#" className="navigation-sort__link">
                {category}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
export default Categories;
