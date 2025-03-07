import React from 'react';
import type { IconProps } from './icon.props';

export const Original = ({ color = 'currentColor', size = 14, ref, ...rest }: IconProps): JSX.Element => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 37 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M26.0406 0.000752263V10.674H36.8216L26.0406 0.000752263Z" fill="#5D6D7E" />
    <path
      d="M18.1705 38.8604C22.6626 38.8604 26.3041 35.2188 26.3041 30.7267C26.3041 26.2346 22.6626 22.593 18.1705 22.593C13.6783 22.593 10.0368 26.2346 10.0368 30.7267C10.0368 35.2188 13.6783 38.8604 18.1705 38.8604Z"
      fill={color}
    />
    <path
      d="M24.0042 12.4946V0.000627111H1.18436C1.06222 -0.00095916 0.940992 0.0217276 0.827697 0.0673706C0.714403 0.113014 0.611303 0.180704 0.524379 0.266513C0.437456 0.352322 0.368441 0.454541 0.32134 0.567237C0.274239 0.679932 0.24999 0.800861 0.25 0.923004V49.1142C0.24999 49.2363 0.274239 49.3573 0.32134 49.47C0.368441 49.5826 0.437456 49.6849 0.524379 49.7707C0.611303 49.8565 0.714403 49.9242 0.827697 49.9698C0.940992 50.0155 1.06222 50.0381 1.18436 50.0366H35.5878C35.8324 50.0366 36.067 49.9394 36.24 49.7664C36.413 49.5934 36.5102 49.3588 36.5102 49.1142V12.4946H24.0042ZM18.2184 40.8966C16.2069 40.8966 14.2406 40.3002 12.5682 39.1827C10.8957 38.0652 9.59218 36.4768 8.82243 34.6185C8.05268 32.7601 7.85127 30.7153 8.24369 28.7425C8.6361 26.7697 9.60471 24.9575 11.027 23.5352C12.4493 22.1129 14.2615 21.1443 16.2343 20.7519C18.2071 20.3594 20.252 20.5609 22.1103 21.3306C23.9686 22.1004 25.557 23.4039 26.6745 25.0763C27.792 26.7488 28.3885 28.7151 28.3885 30.7265C28.3885 32.0621 28.1254 33.3846 27.6143 34.6185C27.1032 35.8524 26.3541 36.9735 25.4097 37.9179C24.4653 38.8623 23.3442 39.6114 22.1103 40.1225C20.8764 40.6336 19.5539 40.8966 18.2184 40.8966Z"
      fill={color}
    />
  </svg>
);

export default Original;
