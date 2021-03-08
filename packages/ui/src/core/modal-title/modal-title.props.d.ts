import type { Values } from '../../utils/types';
import { Variant } from './types';

export type ModalTitleVariantType = Values<typeof Variant>;

export interface ModalTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  primary: React.ReactNode;
  secondary?: React.ReactNode;
  icon?: React.ReactNode;
  iconShadow?: boolean;
  onClose?: () => void;
  variant?: ModalTitleVariantType;
}
