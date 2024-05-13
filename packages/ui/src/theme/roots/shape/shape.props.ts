import type { Values } from '../../../utils/types';
import { BorderRadiusSize } from '../../../utils/types/shape';

export interface ShapeProps {
  readonly borderRadius: Readonly<Record<Values<typeof BorderRadiusSize>, string>>;
}
