import React from 'react';
import * as Icons from '../../assets';

export type IconName = keyof typeof Icons;

export interface IconProps {
  name: keyof typeof Icons;
}

const IconNames = {
  AboutIcon: Icons.AboutIcon,
  HomeIcon: Icons.HomeIcon,
  MasterCardIcon: Icons.MasterCardIcon,
  VisaCardIcon: Icons.VisaCardIcon,
  AmexCardIcon: Icons.AmexCardIcon,
};

export const Icon = ({name}: IconProps) => {
  const IconSelected = IconNames[name];

  if (!IconSelected) {
    return null;
  }

  return <IconSelected />;
};
