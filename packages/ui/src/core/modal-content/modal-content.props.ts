import type { PropsWithChildren } from 'react';

export interface ModalContentProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}
