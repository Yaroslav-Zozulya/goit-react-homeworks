import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    changeFilterValue(state, action) {
      state.value = action.payload;
    },
  },
});

export const { changeFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
