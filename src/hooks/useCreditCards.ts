import {useState} from 'react';
import {Card, CardsMock} from '../api';

export const useCreditCards = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState<Card[]>([]);
  const [cardDetail, setCardDetail] = useState<Card | null>(null);

  const onGetCreditCards = async () => {
    try {
      setTimeout(() => {
        setCards(CardsMock);
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const onGetCardDetail = (id: string) => {
    try {
      setTimeout(() => {
        const foundedCard = CardsMock.find(card => card.uuid === id);
        setCardDetail(foundedCard || null);
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    cards,
    onGetCreditCards,
    onGetCardDetail,
    cardDetail,
  };
};
