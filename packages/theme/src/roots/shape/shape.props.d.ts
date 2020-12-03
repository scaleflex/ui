import type { Values } from '@sfx-ui/utils/types';
import { BorderRadiusSize } from '@sfx-ui/utils/types/shape';

export interface ShapeProps {
  readonly borderRadius: Readonly<Record<Values<typeof BorderRadiusSize>, string>>;
}
