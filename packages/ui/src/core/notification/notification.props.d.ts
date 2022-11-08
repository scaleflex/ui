import type { PropsWithChildren } from 'react';
import React from 'react';
import type { Values } from '../../utils/types';
import { NotificationStatus } from './types';

export type NotificationStatus = Values<typeof NotificationStatus>;

export interface NotificationProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  status?: NotificationStatus;
  removeBackground?: boolean;
  message?: React.ReactNode;
  title?: string & (boolean | ReactChild | ReactFragment | ReactPortal | null);
  hideIcon?: boolean;
  onClose?: () => void;
}
