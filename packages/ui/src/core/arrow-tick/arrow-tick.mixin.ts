import { css } from 'styled-components';
import { Type } from './arrow-tick.props';

export const typeArrowTickMixin = {
  [Type.Right]: css`
    svg {
      transform: rotate(-90deg);
      transition: transform 150ms ease-out;
    }
  `,

  [Type.Left]: css`
    svg {
      transform: rotate(90deg);
      transition: transform 150ms ease-out;
    }
  `,

  [Type.Top]: css`
    svg {
      transform: rotate(180deg);
      transition: transform 150ms ease-out;
    }
  `,

  [Type.Bottom]: css`
    svg {
      transform: rotate(0);
      transition: transform 150ms ease-out;
    }
  `,
};
