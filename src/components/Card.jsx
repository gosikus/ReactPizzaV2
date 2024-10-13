import React from 'react';
import Loader from './Loader';
import { useDispatch, useSelector } from 'react-redux';
import axios, * as others from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { setFilter } from '../redux/slices/FilterSlice';

const Card = () => {
  const [items, setItems] = React.useState([]);
  const [hasResponse, setResponse] = React.useState(false);
  const sortTypeInd = useSelector((state) => state.filter.sortTypeInd);
  const sortTypes = useSelector((state) => state.filter.sortTypes);
  const categoryInd = useSelector((state) => state.filter.categoryInd);
  const categoryTypes = useSelector((state) => state.filter.categoryTypes);
  const search = useSelector((state) => state.filter.search);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updated, setUpdated] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  const getItems = () => {
    const url = new URL(`https://670171c2b52042b542d7c574.mockapi.io/clothes/clothes`);
    if (categoryInd !== 0) {
      url.searchParams.append('category', categoryTypes[categoryInd]);
    }
    const sort = sortTypes[sortTypeInd];
    url.searchParams.append('sortBy', sort.sort);
    url.searchParams.append('order', sort.order);

    setResponse(false);

    axios
      .get(url)
      .then(function (res) {
        console.log(res);
        setItems(res.data);
        setResponse(true);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };

  React.useEffect(() => {
    // if (mounted) {
      const queryString = qs.stringify({
        sort: sortTypes[sortTypeInd].sort,
        order: sortTypes[sortTypeInd].order,
        category: categoryTypes[categoryInd],
      });
      navigate(`?${queryString}`);
    // }
    // setMounted(true);
  }, [sortTypeInd, categoryInd]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(setFilter({ ...params }));
      setUpdated(true);
    }
  }, []);

  React.useEffect(() => {
    if (!updated) {
      getItems();
    }
    setUpdated(false);
  }, [sortTypeInd, categoryInd]);

  const things = items.filter((item) => item.name.includes(search.toLowerCase()));

  return (
    <div className="container-cards">
      {!hasResponse
        ? [...new Array(6)].map((_, i) => <Loader key={`loader-${i}`} />)
        : things.map((item) => (
            <div className="card">
              <div className="card___wrapper">
                <img className="card__img" src={item.imgSrc} alt={item.name} />
                <div className="card__description">
                  <h2 className="card__title">{item.name}</h2>
                  <span className="card__price">{item.price} руб.</span>
                </div>
              </div>
              <button className="card__button button">купить</button>
            </div>
          ))}
    </div>
  );
};

export default Card;
