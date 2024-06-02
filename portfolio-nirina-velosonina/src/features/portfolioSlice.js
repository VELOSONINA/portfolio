import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  description: '',
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setPortfolioDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});

export const { setPortfolioDescription } = portfolioSlice.actions;

export default portfolioSlice.reducer;
