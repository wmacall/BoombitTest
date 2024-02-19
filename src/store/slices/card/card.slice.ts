import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  CardStatusChangePayload,
  CardState,
  SetCardsPayload,
} from './cart.slice.types';

const initialState: CardState = {
  cards: [],
  isLoading: false,
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    onSetCards: (state, action: PayloadAction<SetCardsPayload>) => {
      state.cards = action.payload.cards;
    },
    onChangeCardStatus: (
      state,
      action: PayloadAction<CardStatusChangePayload>,
    ) => {
      const {id, status} = action.payload;
      state.isLoading = true;
      const cardToActivate = state.cards.find(card => card.uuid === id);
      if (cardToActivate) {
        cardToActivate.state = status;
      }
      state.isLoading = false;
    },
    onClearCard: () => initialState,
  },
});

export const {onSetCards, onChangeCardStatus, onClearCard} = cardSlice.actions;
export default cardSlice.reducer;
