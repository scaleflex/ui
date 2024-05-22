import { SwitcherSize } from './switcher-size';
import { SwitcherSizeType } from './switcher.props';

export const getSwitcherSize = (sizeName?: SwitcherSizeType): number => {
  switch (sizeName) {
    case SwitcherSize.Lg:
      return 30;

    case SwitcherSize.Md:
      return 20;

    case SwitcherSize.Sm:
      return 16;

    default:
      return 16;
  }
};

export const getSwitcherFont = (sizeName?: SwitcherSizeType): number => {
  switch (sizeName) {
    case SwitcherSize.Lg:
      return 14;

    case SwitcherSize.Md:
      return 10;

    case SwitcherSize.Sm:
      return 8;

    default:
      return 14;
  }
};

export const getSwitcherIconSize = (sizeName?: SwitcherSizeType): number => {
  switch (sizeName) {
    case SwitcherSize.Lg:
      return 24;

    case SwitcherSize.Md:
      return 16;

    case SwitcherSize.Sm:
      return 12;

    default:
      return 12;
  }
};
