import { css } from 'styled-components';
import { Position } from '../../utils/types';

export const typeArrowMixin = {
  [Position.Right]: css``,

  [Position.Left]: css`
    transform: rotate(180deg);
  `,

  [Position.Top]: css`
    transform: rotate(-90deg);
  `,

  [Position.Bottom]: css`
    transform: rotate(90deg);
  `,
};
