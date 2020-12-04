import type { Values } from '@sfx-ui/utils/types';
import { Status } from './types';

export type RobotPropsStatus = Values<typeof Status>;

export interface RobotProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: RobotPropsStatus;
}
