import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  layouts: [],
  projects: []
};
export const projectsSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getAllLayouts: (state, action) => {
      state.layouts = action.payload;
    },
    getAllProjects: (state, action) => {
      state.projects = action.payload;
    }
  }
});
export const { getAllLayouts, getAllProjects } = projectsSlice.actions;
export default projectsSlice.reducer;
