import { PropsWithChildren } from 'react';
import type { RobotProps } from '../robot';

export interface PopupProps
  extends PropsWithChildren, RobotProps, React.HTMLAttributes<HTMLDivElement> {
}
