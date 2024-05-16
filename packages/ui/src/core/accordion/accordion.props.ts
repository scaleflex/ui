import React, { MouseEvent } from 'react';
import type { IconProps } from '@scaleflex/icons/icon.props';

export interface AccordionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  label: React.ReactNode;
  expanded?: boolean;
  detailStyle?: object;
  headerStyle?: object;
  hideIcon?: boolean;
  fullWidth?: boolean;
  onChange?: (value: boolean, event: MouseEvent<HTMLDivElement>) => void;
  iconProps?: IconProps;
}
