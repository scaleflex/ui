import React, { type PropsWithChildren } from 'react';

import type { Values } from '../../utils/types';
import { NotificationStatus } from './types';

export type NotificationStatus = Values<typeof NotificationStatus>;

export interface NotificationProps extends PropsWithChildren, Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  status?: NotificationStatus;
  removeBackground?: boolean;
  message?: React.ReactNode;
  title?: string | React.ReactNode;
  hideIcon?: boolean;
  onClose?: () => void;
}
