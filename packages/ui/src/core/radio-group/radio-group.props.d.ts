import type { RadioProps } from '../radio';

export interface RadioGroupProps extends RadioProps {
  label?: React.ReactNode;
  radioProps?: React.InputHTMLAttributes;
  readOnly?: boolean;
  disabled?: boolean;
}
