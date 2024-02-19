import {useState} from 'react';
import {Card, CardsMock} from '../api';
import {useDispatch, useSelector} from 'react-redux';
import {cardSelector, onSetCards} from '../store';

export const useCreditCards = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cardDetail, setCardDetail] = useState<Card | null>(null);
  const {cards, isLoadingRequest} = useSelector(cardSelector);
  const dispatch = useDispatch();

  const onGetCreditCards = async () => {
    try {
      setTimeout(() => {
        dispatch(onSetCards({cards: CardsMock}));
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const onGetCardDetail = (id: string) => {
    try {
      setTimeout(() => {
        const foundedCard = cards.find(card => card.uuid === id);
        setCardDetail(foundedCard || null);
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    onGetCreditCards,
    onGetCardDetail,
    cardDetail,
    cards,
    isLoadingRequest,
  };
};
