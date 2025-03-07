import React from 'react';
import type { IconProps } from './icon.props';

export const Effects = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M9.85799 49.5114L6.60065 46.2541C6.16632 45.8197 6.16632 44.9511 6.60065 44.5168L26.7961 24.3213C27.2305 23.887 28.0991 23.887 28.5334 24.3213L31.7907 27.5787C32.2251 28.013 32.2251 28.8816 31.7907 29.3159L11.5953 49.5114C11.1609 50.1629 10.2923 50.1629 9.85799 49.5114Z"
      fill={color}
    />
    <path
      d="M32.8764 26.2758L29.8362 23.2356C29.1848 22.5841 29.1848 21.7155 29.8362 21.2812L37.6538 13.4636C38.3053 12.8122 39.1739 12.8122 39.6082 13.4636L42.6484 16.5038C43.2999 17.1553 43.2999 18.0239 42.6484 18.4582L34.8308 26.2758C34.3965 26.7101 33.5279 26.7101 32.8764 26.2758Z"
      fill={color}
    />
    <path
      d="M25.4931 9.3377L25.0587 8.90337L22.8872 11.0749L20.4985 8.90337L20.0641 9.3377L22.4529 11.5092L20.0641 13.898L20.4985 14.3323L22.8872 11.9436L25.0587 14.3323L25.4931 13.898L23.3215 11.5092L25.4931 9.3377Z"
      fill={color}
    />
    <path
      d="M34.1794 0.434332L33.745 0L30.7048 2.823L27.6646 0L27.2303 0.434332L30.0533 3.47453L27.2303 6.51472L27.6646 7.16619L30.7048 4.12599L33.745 7.16619L34.1794 6.51472L31.3564 3.47453L34.1794 0.434332Z"
      fill={color}
    />
    <path
      d="M45.037 26.7101L44.6027 26.0586L41.9968 28.4474L39.6081 26.0586L39.1737 26.7101L41.5625 29.0988L39.1737 31.4876L39.6081 31.9219L41.9968 29.5332L44.6027 31.9219L45.037 31.4876L42.6483 29.0988L45.037 26.7101Z"
      fill={color}
    />
  </svg>
);

export default Effects;
