import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Variations = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.96244 0.956895L6.5674 3.35194C6.39974 3.51959 6.39966 3.75918 6.56719 3.92695L8.96047 6.32374C9.12801 6.49152 9.39137 6.46766 9.53507 6.32396L11.9301 3.92892C12.0978 3.76126 12.0739 3.4977 11.9303 3.35389L9.53704 0.957102C9.36951 0.789327 9.10614 0.813193 8.96244 0.956895ZM4.67225 1.11933H0.60773C0.323214 1.11933 0.119995 1.32255 0.119995 1.60707V5.67159C0.119995 5.9561 0.363859 6.15933 0.60773 6.15933H4.67225C4.95677 6.15933 5.16 5.91546 5.16 5.67159V1.60707C5.16 1.32255 4.91612 1.11933 4.67225 1.11933ZM0.60773 7.83929H4.67225C4.91612 7.83929 5.16 8.04252 5.16 8.32703V12.3916C5.16 12.6354 4.95677 12.8793 4.67225 12.8793H0.60773C0.363859 12.8793 0.119995 12.6761 0.119995 12.3916V8.32703C0.119995 8.04252 0.323214 7.83929 0.60773 7.83929ZM11.3922 7.8393H7.32773C7.04321 7.8393 6.84 8.04253 6.84 8.32704V12.3916C6.84 12.6761 7.08386 12.8793 7.32773 12.8793H11.3922C11.6768 12.8793 11.88 12.6354 11.88 12.3916V8.32704C11.88 8.04253 11.6361 7.8393 11.3922 7.8393Z"
        fill={color}
      />
    </svg>
  )
);

export default Variations;
