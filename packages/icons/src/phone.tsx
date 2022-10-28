import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Phone = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 30 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M26.1457 0H3.85432C1.99717 0 0.477173 1.51857 0.477173 3.37714V46.6214C0.477173 48.48 1.99717 50 3.85432 50H26.1457C28.0029 50 29.5229 48.4829 29.5229 46.6229V3.37714C29.5229 1.51857 28.0029 0 26.1457 0ZM11.4343 2.43429H18.5657C18.7915 2.43429 18.9743 2.61714 18.9743 2.84429C18.9743 3.07 18.7915 3.25286 18.5657 3.25286H11.4343C11.2086 3.25286 11.0257 3.07 11.0257 2.84429C11.0257 2.61714 11.2086 2.43429 11.4343 2.43429ZM15 48.3114C14.0672 48.3114 13.3115 47.5557 13.3115 46.6214C13.3115 45.6871 14.0672 44.9329 15 44.9329C15.9329 44.9329 16.6886 45.6871 16.6886 46.6214C16.6886 47.5557 15.9329 48.3114 15 48.3114ZM27.1729 43.75H2.82717V5.35571H27.1729V43.75Z"
        fill={color}
      />
    </svg>
  )
);

export default Phone;
