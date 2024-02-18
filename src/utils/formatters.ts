export const onCreateCardMask = (creditCardNumber: string): string =>
  '**** **** **** ' + creditCardNumber.slice(-4);

export const formatDate = (inputDate: string) =>
  new Date(inputDate).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

export const onMaskCVV = (cvv: string): string => '*'.repeat(cvv.length);

export const onMaskExpirationDate = () => '**/**';
