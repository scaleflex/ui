import type { Values } from '../../utils/types';
import { Background } from '../input/types';

export type InputBackgroundType = Values<typeof Background>;
export interface TextareaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  value?: string;
  background?: InputBackgroundType;
}
