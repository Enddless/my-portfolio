import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [],
  components: []
};

export const projectsSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    getAllProjects: (state, action) => {
      state.projects = action.payload;
    },
    getAllComponents: (state, action) => {
      state.components = action.payload;
    }
  }
});

export const { getAllProjects, getAllComponents } = projectsSlice.actions;
export default projectsSlice.reducer;
