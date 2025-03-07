import type { IconProps } from '@scaleflex/icons/icon.props';
import { Ref } from 'react';

export interface AccordionHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  label: React.ReactNode;
  expanded?: boolean;
  hideIcon?: boolean;
  fullWidth?: boolean;
  onChange?: (value: boolean) => void;
  iconProps?: IconProps;
  ref?: Ref<HTMLDivElement>;
}
