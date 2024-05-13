import type { InputProps } from '../input';

export interface SearchProps extends InputProps, Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'> {}
