export interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onChange?: (event) => void;
}
