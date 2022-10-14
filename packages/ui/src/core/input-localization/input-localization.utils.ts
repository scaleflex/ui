import { InputSize } from '../../utils/types';
import type { InputSizeType } from './input-localization.props';


export const getIconSize = (sizeName?: InputSizeType): number => {
  switch (sizeName) {
    case InputSize.Md:
      return 14;

    case InputSize.Sm:
      return 12;

    default:
      return 14;
    }
};

export const getArrowSize = (sizeName?: InputSizeType): number => {
  switch (sizeName){
    case InputSize.Md:
        return 11;

    case InputSize.Sm:
        return 10;
    
    default:
        return 11;
  }
};
