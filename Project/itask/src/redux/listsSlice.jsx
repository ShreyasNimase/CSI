// src/redux/listsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lists: [
    { id: 'list-todo-1', boardId: 'board-1', name: 'To Do', status: 'todo' },
    { id: 'list-inprogress-1', boardId: 'board-1', name: 'In Progress', status: 'inProgress' },
    { id: 'list-done-1', boardId: 'board-1', name: 'Done', status: 'done' },
  ],
};

const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    addList: (state, action) => {
      state.lists.push(action.payload);
    },
    deleteList: (state, action) => {
      state.lists = state.lists.filter(list => list.id !== action.payload);
    },
  },
});

export const { addList, deleteList } = listsSlice.actions;
export default listsSlice.reducer;
