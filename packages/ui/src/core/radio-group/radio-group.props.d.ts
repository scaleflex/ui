export interface RadioGroupProps extends React.HTMLAttributes<HTMLLabelElement> {
  label?: React.ReactNode;
  radioProps?: React.InputHTMLAttributes;
  radioStyles?: object;
  labelStyles?: object;
  readOnly?: boolean;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (event: any) => void;
}
