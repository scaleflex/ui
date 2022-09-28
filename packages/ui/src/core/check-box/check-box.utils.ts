import { CheckBoxSizeType } from '../check-box-group/check-box-group.props';
import { Size } from './size';

export const getCheckboxIconSize = (sizeName?: CheckBoxSizeType): number => {
  switch (sizeName) {
    case Size.Md:
      return 20;

    case Size.Sm:
      return 16;

    default:
      return 16;
  }
};
