import { IconButtonProps } from '../icon-button';

export interface GalleryButtonProps extends IconButtonProps, React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  active?: boolean;
}
