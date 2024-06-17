import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  layouts: [],
  projects: [],
  components: []
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
    },
    getAllComponents: (state, action) => {
      state.components = action.payload;
    }
  }
});

export const { getAllLayouts, getAllProjects, getAllComponents } = projectsSlice.actions;
export default projectsSlice.reducer;
