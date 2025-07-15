// src/redux/cardsSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
  },
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    editCard: (state, action) => {
      const index = state.cards.findIndex(
        (card) => card.id === action.payload.id
      );
      if (index !== -1) {
        state.cards[index] = action.payload;
      }
    },

    deleteCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
    moveCard: (state, action) => {
      const { cardId, newListId, newStatus } = action.payload;
      const card = state.cards.find((c) => c.id === cardId);
      if (card) {
        card.listId = newListId;
        card.status = newStatus;
      }
    },
  },
});

export const { addCard, editCard, deleteCard, moveCard } = cardsSlice.actions;
export default cardsSlice.reducer;
