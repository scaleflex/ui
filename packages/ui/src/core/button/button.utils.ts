import { Size } from './types';
import type { ButtonSizeType } from './button.props';

export const getIconSize = (sizeName?: ButtonSizeType): number => {
  switch (sizeName) {
    case Size.Xl:
      return 16;

    case Size.Lg:
    case Size.Md:
      return 14;

    case Size.Sm:
      return 12;

    case Size.Xs:
    default:
      return 11;
  }
};
