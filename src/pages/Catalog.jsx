import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Card from '../components/Card';
import React from 'react';
import CardProvider from '../scripts/CardProvider';
import Search from '../components/Search';
const Catalog = () => {
  // const [sort, setSort] = React.useState('популярности');
  // const [category, setCategory] = React.useState(0);
  return (
    <>
      <CardProvider>
        <div className="catalog__container">
        <Categories />
          <Search />
        </div>
        <Sort />
        <Card />
      </CardProvider>
    </>
  );
};
export default Catalog;
