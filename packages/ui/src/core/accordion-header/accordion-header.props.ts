import type { IconProps } from '@scaleflex/icons/icon.props';

export interface AccordionHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  label: React.ReactNode;
  expanded?: boolean;
  hideIcon?: boolean;
  fullWidth?: boolean;
  onChange?: (value: boolean) => void;
  iconProps?: IconProps;
}
