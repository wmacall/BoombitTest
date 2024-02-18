export const onCreateCardMask = (creditCardNumber: string): string =>
  '**** **** **** ' + creditCardNumber.slice(-4);
