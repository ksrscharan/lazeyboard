import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const tasksAdapter = createEntityAdapter();

const initialState = tasksAdapter.getInitialState();

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    taskAdded: tasksAdapter.addOne,
    taskRemoved: tasksAdapter.removeOne,
    taskUpdated: tasksAdapter.updateOne,
  },
});

export const { taskAdded, taskRemoved, taskUpdated } = tasksSlice.actions;

export const {
  selectAll: selectAllTasks,
  selectById: selectTaskById,
  selectIds: selectTaskIds,
} = tasksAdapter.getSelectors((state) => state.tasks);

export default tasksSlice.reducer;
