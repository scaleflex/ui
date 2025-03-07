import { PropsWithChildren } from 'react';

export interface GalleryButtonProps extends PropsWithChildren, Omit<React.HTMLAttributes<HTMLButtonElement>, 'color'> {
  disabled?: boolean;
  active?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}
