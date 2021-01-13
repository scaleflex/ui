import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const DeselectAll = intrinsicComponent<IconProps, SVGSVGElement>((
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
    <path d="M5.79549 11.0417H0.274658V16.5625H5.79549V11.0417Z" fill={color} />
    <path d="M5.79549 22.1875H0.274658V27.7083H5.79549V22.1875Z" fill={color} />
    <path d="M5.79549 33.3333H0.274658V38.8542H5.79549V33.3333Z" fill={color} />
    <path d="M5.79549 44.375H0.274658V49.8958H5.79549V44.375Z" fill={color} />
    <path d="M27.983 0H22.4622V5.52084H27.983V0Z" fill={color} />
    <path d="M16.9413 44.375H11.4205V49.8958H16.9413V44.375Z" fill={color} />
    <path d="M16.9413 0H11.4205V5.52084H16.9413V0Z" fill={color} />
    <path d="M5.79549 0H0.274658V5.52084H5.79549V0Z" fill={color} />
    <path d="M50.2747 22.1875H44.7538V27.7083H50.2747V22.1875Z" fill={color} />
    <path d="M27.983 44.375H22.4622V49.8958H27.983V44.375Z" fill={color} />
    <path d="M50.2747 11.0417H44.7538V16.5625H50.2747V11.0417Z" fill={color} />
    <path d="M50.2747 33.3333H44.7538V38.8542H50.2747V33.3333Z" fill={color} />
    <path d="M39.1288 44.375H33.608V49.8958H39.1288V44.375Z" fill={color} />
    <path d="M50.2747 44.375H44.7538V49.8958H50.2747V44.375Z" fill={color} />
    <path d="M39.1288 0H33.608V5.52084H39.1288V0Z" fill={color} />
    <path d="M50.2747 0H44.7538V5.52084H50.2747V0Z" fill={color} />
    <path d="M34.233 32.7083L27.2538 25.7292L34.233 18.75C34.858 18.125 34.858 17.1875 34.233 16.5625C33.608 15.9375 32.6705 15.9375 32.0455 16.5625L25.0663 23.5417L18.0872 16.5625C17.4622 15.9375 16.5247 15.9375 15.8997 16.5625C15.2747 17.1875 15.2747 18.125 15.8997 18.75L22.8788 25.7292L15.8997 32.7083C15.5872 33.0208 15.483 33.4375 15.483 33.8542C15.483 34.2708 15.6913 34.6875 15.8997 35C16.5247 35.625 17.4622 35.625 18.0872 35L25.0663 28.0208L32.0455 35C32.358 35.3125 32.7747 35.4167 33.1913 35.4167C33.608 35.4167 34.0247 35.2083 34.3372 35C34.6497 34.7917 34.7538 34.2708 34.7538 33.8542C34.7538 33.4375 34.5455 33.0208 34.233 32.7083Z" fill={color} />
  </svg>
));

export default DeselectAll;
