import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const TwoArrowsLeft = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M6.25714 11.8474C6.04014 12.0564 5.69484 12.0499 5.48588 11.8329C5.27693 11.6159 5.28344 11.2706 5.50043 11.0616L10.5618 6.18773L5.48614 0.924074C5.27704 0.707224 5.28331 0.361919 5.50016 0.152813C5.71701 -0.0562931 6.06232 -0.0500145 6.27143 0.166835L11.726 5.8234C11.8264 5.92758 11.8814 6.06742 11.8787 6.21212C11.876 6.35683 11.8159 6.49453 11.7117 6.59492L6.25714 11.8474Z"
        fill={color}
      />
      <path
        d="M1.04522 11.8474C0.828227 12.0564 0.482925 12.0499 0.273969 11.8329C0.065012 11.6159 0.0715275 11.2706 0.288521 11.0616L5.34989 6.18773L0.274227 0.924074C0.0651226 0.707224 0.0714006 0.361919 0.28825 0.152813C0.5051 -0.0562931 0.850407 -0.0500145 1.05951 0.166835L6.51406 5.8234C6.61452 5.92758 6.66946 6.06742 6.66678 6.21212C6.6641 6.35683 6.60402 6.49453 6.49977 6.59492L1.04522 11.8474Z"
        fill={color}
      />
    </svg>
  )
);

export default TwoArrowsLeft;
