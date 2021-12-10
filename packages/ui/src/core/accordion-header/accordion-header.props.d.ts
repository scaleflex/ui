import type { IconProps } from '@scaleflex/icons/icon.props';

export interface AccordionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
  expanded?: boolean;
  onChange?: (value: boolean) => void;
  iconProps?: IconProps;
}
