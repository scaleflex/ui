import { ButtonSize } from '../../utils/types';
import type { ButtonSizeType } from './button.props';

export const getIconSize = (sizeName?: ButtonSizeType): number => {
  switch (sizeName) {
    case ButtonSize.Lg:
      return 18;

    case ButtonSize.Md:
      return 16;

    case ButtonSize.Sm:
      return 14;

    case ButtonSize.Xs:
      return 12;

    default:
      return 16;
  }
};

export const getSideBarIconSize = (sizeName?: ButtonSizeType): number => {
  switch (sizeName) {
    case ButtonSize.Lg:
      return 12;

    case ButtonSize.Md:
      return 11;

    case ButtonSize.Sm:
      return 10;

    default:
      return 11;
  }
};
