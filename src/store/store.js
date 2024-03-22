import { configureStore } from '@reduxjs/toolkit';
import { projectsSlice } from './slice/projects';

export const store = configureStore({
  reducer: {
    portfolioData: projectsSlice.reducer
  }
});
