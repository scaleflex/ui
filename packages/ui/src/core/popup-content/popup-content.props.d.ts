import type { RobotProps } from '../robot';

export interface PopupContentProps extends RobotProps, React.HTMLAttributes<HTMLDivElement> {
  message: React.ReactNode;
}
