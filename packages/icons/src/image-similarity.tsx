import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const ImageSimilarity = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0309 1.77972V12.4253H2.38557C1.54072 12.4253 0.855835 13.1102 0.855835 13.955V38.493C0.855835 39.3378 1.54072 40.0227 2.38557 40.0227H26.9237C27.7686 40.0227 28.4535 39.3378 28.4535 38.493V27.8474H39.0988C39.9437 27.8474 40.6286 27.1625 40.6286 26.3177V1.77972C40.6286 0.934879 39.9437 0.25 39.0988 0.25H14.5607C13.7158 0.25 13.0309 0.934878 13.0309 1.77972ZM15.1726 2.39161V12.4253H26.9237C27.7686 12.4253 28.4535 13.1102 28.4535 13.955V25.7058H38.4869V2.39161H15.1726ZM17.5325 14.5669H15.1726V16.9787L23.8998 25.7058H26.3118V23.3462L17.5325 14.5669ZM13.0309 26.3177C13.0309 27.1625 13.7158 27.8474 14.5607 27.8474H26.3118V37.8811H2.99746V14.5669H13.0309V26.3177ZM21.0874 25.7058L15.1726 19.791V25.7058H21.0874ZM26.3118 20.5339L20.3448 14.5669H26.3118V20.5339Z"
        fill={color}
      />
    </svg>
  )
);

export default ImageSimilarity;
