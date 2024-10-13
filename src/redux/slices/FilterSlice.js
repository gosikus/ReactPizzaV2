import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryTypes: ['все', 'футболки', 'брюки', 'юбки'],
  categoryInd: 0,
  sortTypes: [
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
  ],
  sortTypeInd:0,
  sortType:  'price',
  categoryType: "все",
  order:"asc",
  search:""
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryInd: (state, action) => {
      state.categoryInd = action.payload;
    },
    setSortType:(state,action)=>{
      state.sortTypeInd = action.payload
    },
    setSearch:(state,action)=>{
      state.search = action.payload
    },
    setFilter:(state,action)=>{
      state.sortType = action.payload.sort
      state.categoryType = action.payload.category
      state.order = action.payload.order
    }
  },
});

export const { setCategoryInd, setSortType, setSearch, setFilter } = filterSlice.actions;

export default filterSlice.reducer;
