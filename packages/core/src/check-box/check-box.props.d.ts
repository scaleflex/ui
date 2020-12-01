export interface CheckBoxProps extends React.HTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}
