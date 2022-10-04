import { CheckBoxSizeType } from '../check-box-group/check-box-group.props';
import { Size } from './size';

export const getCheckboxIconSize = (size?: CheckBoxSizeType): number => {
  switch (size) {
    case Size.Md:
      return 14;
    case Size.Sm:
      return 12;
    default:
      return 12;
  }
};
