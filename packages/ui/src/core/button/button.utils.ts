import { ButtonSize } from '../../utils/types';
import type { ButtonSizeType } from './button.props';

export const getIconSize = (sizeName?: ButtonSizeType): number => {
  switch (sizeName) {
    case ButtonSize.Lg:
      return 24;

    case ButtonSize.Md:
      return 16;

    case ButtonSize.Sm:
      return 12;

    default:
      return 16;
  }
};
