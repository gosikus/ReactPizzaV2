import React, { useContext } from "react";
import CardContext from "../scripts/CardContext";
import { useDispatch, useSelector } from 'react-redux';
import { setSortType } from '../redux/slices/FilterSlice';

const Sort = () => {
    const [open, setOpen] = React.useState(false)
    const sortTypeInd = useSelector((state) => state.filter.sortTypeInd);
    const sortTypes = useSelector((state) => state.filter.sortTypes)
    const dispatch = useDispatch();

    const clickHandler = (ind) => {
        setOpen(!open)
        dispatch(setSortType(ind))
    }
  return <div className="sort-container">
    <p className="sort__p">сортировка по</p>
    <span onClick={()=>{setOpen(!open)}} className="sort__span">{sortTypes[sortTypeInd].name}</span>
    {
         open && 
         <ul className="sort__list">
    {sortTypes.map((item, ind)=>(
        <li onClick={()=>clickHandler(ind)} className="sort__item">{item.name}</li>
    ))}
    </ul>
    }
   
  </div>;
};
export default Sort;
      