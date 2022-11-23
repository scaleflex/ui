import { InputSize } from '../../utils/types';

export const searchInputMixin = {
  [InputSize.Sm]: `
    padding: 4px 6px 4px 12px;
    max-height: 32px;
  `,

  [InputSize.Md]: `
    padding: 0px 4px 0px 16px;
    max-height: 40px;
  `,
};
