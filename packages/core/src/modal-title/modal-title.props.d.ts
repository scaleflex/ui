export interface ModalTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  primary: React.ReactNode;
  secondary?: React.ReactNode;
  icon?: React.ReactNode;
  iconShadow?: boolean;
  onClose?: () => void;
}
