import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Schema = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 42 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M38.9681 25.8432H36.906V24.2819C36.9044 22.8538 35.7473 21.6967 34.3192 21.6948H21.8438V11.1572H32.8678C34.2656 11.1556 35.3983 10.0228 35.3997 8.62531V3.12756C35.3983 1.73007 34.2656 0.597288 32.8678 0.595703H9.13193C7.73444 0.597288 6.60166 1.73007 6.60007 3.12756V8.62531C6.60166 10.0228 7.73444 11.1556 9.13193 11.1572H20.156V21.6948H7.68108C6.25294 21.6962 5.09559 22.8538 5.09401 24.2819V25.8432H3.03186C1.6341 25.8445 0.501585 26.9773 0.5 28.3753V33.8725C0.501585 35.2703 1.6341 36.4031 3.03186 36.4044H8.69313C10.0909 36.4031 11.2237 35.2703 11.225 33.8725V28.3753C11.2237 26.9778 10.0909 25.845 8.69313 25.8432H6.78209V24.2819C6.78235 23.7858 7.18443 23.3835 7.68108 23.3829H20.156V25.8437H18.1694C16.7719 25.845 15.6391 26.9778 15.6372 28.3756V33.8725C15.6391 35.2703 16.7719 36.4031 18.1694 36.4044H23.8309C25.2284 36.4031 26.3612 35.2703 26.3628 33.8725V28.3753C26.3612 26.9778 25.2284 25.845 23.8309 25.8432H21.8438V23.3829H34.3192C34.8153 23.3832 35.2176 23.7855 35.2182 24.2819V25.8432H33.3066C31.9091 25.8445 30.7763 26.9773 30.7747 28.3753V33.8725C30.7763 35.2703 31.9091 36.4031 33.3066 36.4044H38.9681C40.3656 36.4031 41.4984 35.2703 41.5 33.8725V28.3753C41.4984 26.9778 40.3656 25.845 38.9681 25.8432ZM8.28789 8.62531V3.12756C8.28868 2.66182 8.66619 2.28431 9.13193 2.28352H32.8678C33.3341 2.28431 33.7116 2.66182 33.7118 3.12756V8.62531C33.7116 9.09105 33.3341 9.46856 32.8678 9.46935H9.13193C8.66619 9.46856 8.28868 9.09105 8.28789 8.62531ZM9.53717 28.3753V33.8725C9.53664 34.3388 9.15887 34.716 8.69313 34.7166H3.03186C2.56611 34.716 2.18861 34.3388 2.18782 33.8725V28.3753C2.18861 27.9093 2.56611 27.5318 3.03186 27.5313H8.69313C9.15914 27.5318 9.53664 27.9093 9.53717 28.3753ZM24.6744 28.3753V33.8725C24.6742 34.3388 24.2966 34.716 23.8304 34.7166H18.1694C17.7034 34.716 17.3259 34.3388 17.3253 33.8725V28.3753C17.3259 27.9093 17.7034 27.5318 18.1694 27.5313H23.8309C24.2966 27.5318 24.6739 27.9093 24.6744 28.3753ZM39.8122 33.8725C39.8114 34.3388 39.4339 34.716 38.9681 34.7166H33.3066C32.8409 34.716 32.4634 34.3383 32.4626 33.8725V28.3753C32.4634 27.9093 32.8409 27.5318 33.3066 27.5313H38.9681C39.4339 27.5318 39.8114 27.9093 39.8122 28.3753V33.8725Z"
        fill={color}
      />
    </svg>
  )
);

export default Schema;