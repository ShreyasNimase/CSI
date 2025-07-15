import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boards: [
    { id: 'board-1', name: 'Default Board' },
  ],
  activeBoardId: 'board-1',
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    addBoard: (state, action) => {
      state.boards.push(action.payload);
    },
    deleteBoard: (state, action) => {
      state.boards = state.boards.filter(b => b.id !== action.payload);
      if (state.activeBoardId === action.payload && state.boards.length > 0) {
        state.activeBoardId = state.boards[0].id;
      }
    },
    renameBoard: (state, action) => {
      const board = state.boards.find(b => b.id === action.payload.id);
      if (board) board.name = action.payload.name;
    },
    setActiveBoard: (state, action) => {
      state.activeBoardId = action.payload;
    },
  },
});

export const { addBoard, deleteBoard, renameBoard, setActiveBoard } = boardsSlice.actions;
export default boardsSlice.reducer;
