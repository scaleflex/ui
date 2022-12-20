import { SwitcherSize } from './switcher-size';
import { SwitcherType } from './switcher.props';

export const getSwitcherSize = (sizeName?: SwitcherType): number => {
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

export const getSwitcherIconSize = (sizeName?: SwitcherType): number => {
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
