export interface DotsNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  activeItem?: number;
  size: number;
  ref?: React.Ref<HTMLDivElement>;
}
