import CardContext from './CardContext';
import React from 'react';

// utils (хранение отдельно)

const sortTypes = [
  {
    name: 'цене (дороже)',
    sort: 'price',
    order: 'desc',
  },
  {
    name: 'цене (дешевле)',
    sort: 'price',
    order: 'asc',
  },
  { name: 'популярности', sort: 'rating', order: 'desc' },
];

const categoryTypes = ['все', 'футболки', 'брюки', 'юбки'];


const CardProvider = ({ children }) => {
  const [sortType, setSortType] = React.useState(0);
  const [categoryType, setCategoryType] = React.useState(0);
  const [search, setSearch] = React.useState('');


  return (
    <CardContext.Provider
      value={{ sortTypes, categoryTypes, sortType, setSortType, categoryType, setCategoryType, search,setSearch}}>
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider;
