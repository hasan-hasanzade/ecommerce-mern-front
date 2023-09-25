import { createSlice } from "@reduxjs/toolkit";

const MIN = 1;
const MAX = 50;

const initialState = {
   searchValue: '',
   pageCount: 1,
   categoryName: 'all',
   sortBy: 'popular ( high to low )',
   priceRange: [MIN, MAX]
}

export const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      setSearchValue(state, action) {
         state.searchValue = action.payload;
      },
      setPageCount(state, action) {
         state.pageCount = action.payload;
      },
      setCategoryName(state, action) {
         state.categoryName = action.payload;
      },
      setSortBy(state, action) {
         state.sortBy = action.payload;
      },
      setPriceRange(state, action) {
         state.priceRange = action.payload;
      },
   }
})

export const { setSearchValue, setPageCount, setCategoryName, setSortBy, setPriceRange } = filterSlice.actions;

export default filterSlice.reducer;