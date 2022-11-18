import { CheckBoxSizeType } from './check-box.props';
import { Size } from './types';

export const getCheckboxIconSize = (size?: CheckBoxSizeType): number => {
  switch (size) {
    case Size.Md:
      return 14;
    case Size.Sm:
      return 10;
    default:
      return 10;
  }
};

export const getCheckboxInfoIconSize = (size?: CheckBoxSizeType): number => {
  switch (size) {
    case Size.Md:
      return 14;
    case Size.Sm:
      return 12;
    default:
      return 12;
  }
};
