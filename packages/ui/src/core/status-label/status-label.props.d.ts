import type { Values } from '../../utils/types';
import { Size, Type } from './types';

export type StatusLabelSizeType = Values<typeof Size>;
export type StatusLabelTypesType = Values<typeof Type>;

export interface StatusLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
  size?: StatusLabelSizeType;
  type?: StatusLabelTypesType;
}
