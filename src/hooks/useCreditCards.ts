import {useState} from 'react';
import {Card, CardsMock} from '../api';

export const useCreditCards = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState<Card[]>([]);

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

  return {
    isLoading,
    cards,
    onGetCreditCards,
  };
};
