export interface Transactions {
  uuid: string;
  amount: number;
  date: string;
  description: string;
  detail: string;
}

export interface Card {
  uuid: string;
  card_number: string;
  holder_name: string;
  expiration_date: string;
  cvv: string;
  state: string;
  brand: string;
  color: string;
  transactions: Transactions[];
}
