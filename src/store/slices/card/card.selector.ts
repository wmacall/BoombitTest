import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../..';

const getCard = (state: RootState) => state.card;
export const cardSelector = createSelector(getCard, card => ({
  cards: card.cards,
  isLoadingRequest: card.isLoading,
}));
