import { ButtonSize } from '../../utils/types';
import type { ButtonSizeType } from './button.props';

export const getIconSize = (sizeName?: ButtonSizeType): number => {
  switch (sizeName) {
    case ButtonSize.Xl:
      return 16;

    case ButtonSize.Lg:
      return 14;

    case ButtonSize.Md:
      return 14;

    case ButtonSize.Sm_up:
      return 12;

    case ButtonSize.Sm_m:
      return 12;

    case ButtonSize.Sm:
      return 12;

    default:
      return 12;
  }
};
