import React from 'react';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { IconProps } from './icon.props';

export const UnlockOutline = intrinsicComponent<IconProps, SVGSVGElement>((
  { color = 'currentColor', size = 14, ...rest },
  ref
): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M36.2754 7.5C34.2754 3.1 29.8754 0 24.7754 0C17.8754 0 12.2754 5.6 12.2754 12.5V20H9.77539C8.37539 20 7.27539 21.1 7.27539 22.5V47.5C7.27539 48.9 8.37539 50 9.77539 50H39.7754C41.1754 50 42.2754 48.9 42.2754 47.5V22.5C42.2754 21.1 41.1754 20 39.7754 20H14.7754V12.5C14.7754 7 19.2754 2.5 24.7754 2.5C28.4754 2.5 31.7754 4.5 33.4754 7.6L36.2754 7.5ZM39.7754 47.5H9.77539V22.5H39.7754V47.5Z" fill={color} />
    <path d="M24.7754 30C22.6754 30 20.9754 31.7 20.9754 33.7C20.9754 35.3 21.9754 36.7 23.4754 37.2V41.2H25.9754V37.2C27.4754 36.7 28.4754 35.3 28.4754 33.7C28.5754 31.7 26.8754 30 24.7754 30ZM24.7754 35C24.0754 35 23.4754 34.4 23.4754 33.7C23.4754 33 24.0754 32.4 24.7754 32.4C25.4754 32.4 25.9754 33 25.9754 33.7C25.9754 34.4 25.4754 35 24.7754 35Z" fill={color} />
  </svg>
));

export default UnlockOutline;
