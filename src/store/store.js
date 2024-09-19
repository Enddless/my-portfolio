import { configureStore } from '@reduxjs/toolkit';
import { projectsSlice } from './slice/project';

export const store = configureStore({
  reducer: {
    portfolioData: projectsSlice.reducer
  }
});
