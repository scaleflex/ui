import type { Values } from '@sfx-ui/utils/types';
import { Emotion } from './types';

export type RobotPropsEmotion = Values<typeof Emotion>;

export interface RobotProps extends React.HTMLAttributes<HTMLSpanElement> {
  emotion?: RobotPropsEmotion;
}
