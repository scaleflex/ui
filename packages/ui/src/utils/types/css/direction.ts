import { Values, With } from '..';

export const Direction = {
  Row: 'row',
  Column: 'column',
} as const;

export type WithDirection<T = undefined> = With<T, { direction?: Values<typeof Direction> }>;
