import React from 'react';
import {fireEvent, waitFor} from '@testing-library/react-native';
import {useCreditCards} from '../src/hooks';
import {HomeScreen} from '../src/screens';
import {customRender} from '../src/utils';

jest.mock('../src/hooks/useCreditCards');

const mockNavigate = jest.fn();
const mockNavigation: any = {
  openDrawer: jest.fn(),
  navigate: mockNavigate,
};

const mockCreditCards = [
  {
    uuid: 'e384ecb2-6637-4a0f-9f84-99c06df3feda',
    card_number: '1234 5678 9012 3456',
    holder_name: 'John Doe',
    expiration_date: '12/25',
    cvv: '123',
    state: 'locked',
    brand: 'MasterCard',
    color: '#F79E1B',
    transactions: [
      {
        uuid: '1a49a69-df19-4c48-b84f-4264f94c49cc',
        amount: 50,
        date: '2023-01-15T12:30:00.000Z',
        description: 'Purchase at Grocery Store',
        detail: 'Groceries for the week',
      },
      {
        uuid: '2a49a69-df19-4c48-b84f-4264f94c49cc',
        amount: 75,
        date: '2023-01-20T16:45:00.000Z',
        description: 'Online Shopping',
        detail: 'Clothing and accessories',
      },
    ],
  },
];

describe('HomeScreen', () => {
  it('renders correctly', async () => {
    (useCreditCards as jest.Mock).mockReturnValue({
      isLoading: false,
      onGetCreditCards: jest.fn(),
      cards: mockCreditCards,
    });

    const {getByText} = customRender(
      <HomeScreen navigation={mockNavigation} />,
    );

    expect(getByText('Dashboard')).toBeTruthy();
    expect(getByText('John Doe')).toBeTruthy();
  });

  it('navigates to detail screen when a card is pressed', async () => {
    (useCreditCards as jest.Mock).mockReturnValue({
      isLoading: false,
      onGetCreditCards: jest.fn(),
      cards: mockCreditCards,
    });

    const {getByText} = customRender(
      <HomeScreen navigation={mockNavigation} />,
    );
    const card1 = getByText('John Doe');

    fireEvent.press(card1);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('DetailScreen', {
        id: 'e384ecb2-6637-4a0f-9f84-99c06df3feda',
      });
    });
  });
});
