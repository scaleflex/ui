import type { Values } from '../../utils/types';
import { InputBackgroundColor } from '../../utils/types';

export type InputBackgroundType = Values<typeof InputBackgroundColor>;
export interface TextareaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  value?: string;
  background?: InputBackgroundType;
}
