import type { Values } from '@sfx-ui/utils/types';
import { Size, Type } from './types';

export type TagPropsSize = Values<typeof Size>;
export type TagPropsType = Values<typeof Type>;

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: TagPropsSize;
  type?: TagPropsType;
}
