interface CardButtonOptions {
  title: string;
  status: string;
}

export const CARD_OPTIONS: Record<string, CardButtonOptions[]> = {
  active: [
    {
      title: 'Stolen',
      status: 'stolen',
    },
    {
      title: 'Lock',
      status: 'locked',
    },
  ],
  locked: [
    {
      title: 'Activate',
      status: 'active',
    },
    {
      title: 'Stolen',
      status: 'stolen',
    },
  ],
  stolen: [],
  expired: [],
};
