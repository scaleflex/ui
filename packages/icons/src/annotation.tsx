import React from 'react';
import type { IconProps } from './icon.props';

export const Annotation = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
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
      d="M48.5577 38.9423H34.8557C31.8069 38.9423 29.327 41.4224 29.327 44.4712C29.327 45.9293 28.1406 47.1157 26.6827 47.1157H5.52902C4.07066 47.1157 2.88467 45.9293 2.88467 44.4712V42.5459C2.88467 41.0886 4.07028 39.9025 5.5275 39.9018L9.33952 39.8999C9.34067 39.8999 9.34219 39.8995 9.34334 39.8995C9.38683 39.8995 9.43031 39.8968 9.47418 39.893C9.49211 39.8915 9.50966 39.8884 9.52759 39.8861C9.54628 39.8835 9.56535 39.8819 9.58405 39.8789L19.7636 38.1229C19.7689 38.1217 19.7739 38.1206 19.7788 38.1195C19.7948 38.1164 19.8105 38.113 19.8261 38.1095C19.8517 38.1038 19.8769 38.0981 19.9017 38.0908C19.9192 38.0863 19.9368 38.0809 19.9543 38.0756C19.9776 38.068 20.0008 38.0599 20.0241 38.0512C20.0409 38.0447 20.0581 38.039 20.0748 38.0321C20.1107 38.0168 20.1458 38.0008 20.1805 37.9829C20.1942 37.9756 20.208 37.9672 20.2217 37.9596C20.2461 37.9459 20.2702 37.9321 20.2938 37.9169C20.3083 37.9077 20.3228 37.8978 20.3373 37.8879C20.3602 37.8719 20.3831 37.8551 20.4052 37.8375C20.417 37.8284 20.4292 37.8192 20.4411 37.8093C20.4746 37.7815 20.5074 37.7525 20.5383 37.7212L46.2479 12.0109C48.3097 9.94895 48.3097 6.59377 46.2479 4.53146L43.2632 1.54708C41.2014 -0.515234 37.846 -0.514853 35.7841 1.54708L10.075 27.2574C10.0437 27.2883 10.0147 27.3215 9.9865 27.355C9.97696 27.3665 9.9678 27.3783 9.95865 27.3901C9.9411 27.4127 9.92432 27.4355 9.90829 27.4588C9.89838 27.4729 9.88846 27.4874 9.8793 27.5019C9.86443 27.5252 9.85069 27.5488 9.83734 27.5729C9.82857 27.5885 9.81941 27.6042 9.81102 27.6198C9.79424 27.653 9.77898 27.6862 9.76448 27.7205C9.75723 27.7377 9.75113 27.7556 9.74426 27.7732C9.73625 27.7953 9.72824 27.8178 9.72099 27.8403C9.71527 27.8586 9.70993 27.8769 9.70497 27.8952C9.69849 27.9189 9.69276 27.9429 9.68742 27.9673C9.68361 27.9841 9.67979 28.0009 9.67674 28.0177C9.6756 28.0226 9.67445 28.0272 9.67369 28.0318L8.12378 37.0158L5.52597 37.017C2.47879 37.0185 0 39.4989 0 42.5459V44.4712C0 47.5201 2.48032 50.0005 5.52902 50.0005H26.6827C29.7314 50.0005 32.2117 47.5201 32.2117 44.4712C32.2117 43.0132 33.3977 41.8267 34.8557 41.8267H48.5577C49.3542 41.8267 50 41.1813 50 40.3847C50 39.5878 49.3542 38.9423 48.5577 38.9423ZM12.043 31.2653L16.5306 35.7531L11.1076 36.6885L12.043 31.2653ZM33.5567 7.85382L35.7288 10.026L15.3065 30.4493L13.1344 28.2771L33.5567 7.85382ZM19.5183 34.6613L17.3462 32.4891L37.7689 12.0658L39.941 14.238L19.5183 34.6613ZM37.8239 3.58651C38.7611 2.64958 40.2859 2.64958 41.2235 3.58651L44.2078 6.57126C45.145 7.50858 45.145 9.03376 44.2078 9.97108L41.9804 12.1986L35.5965 5.81401L37.8239 3.58651Z"
      fill={color}
    />
  </svg>
);

export default Annotation;
