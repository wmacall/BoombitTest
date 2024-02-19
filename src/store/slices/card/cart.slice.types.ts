import {Card} from '../../../api';

export interface SetCardsPayload {
  cards: Card[];
}

export interface CardStatusChangePayload {
  id: string;
  status: string;
}

export interface CardState {
  cards: Card[];
  isLoading: boolean;
}
