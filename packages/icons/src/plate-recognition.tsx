import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const PlateRecognition = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 45 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.394 23.2886H30.606C31.2824 23.2879 31.8865 23.7114 32.1167 24.3474C32.3468 24.9833 32.1535 25.6953 31.6333 26.1276L29.2112 28.1448C28.9229 28.386 28.5591 28.5182 28.1832 28.5183H16.8168C16.4407 28.5182 16.0767 28.386 15.788 28.1448L13.3667 26.1276C12.8465 25.6953 12.6532 24.9833 12.8834 24.3474C13.1135 23.7114 13.7176 23.2879 14.394 23.2886ZM28.2586 26.9972L30.6807 24.98L30.6769 24.9799C30.7168 24.9519 30.7304 24.899 30.7091 24.8552C30.6974 24.8078 30.653 24.7761 30.6045 24.7805H14.3924C14.3439 24.7761 14.2995 24.8078 14.2879 24.8552C14.2672 24.8992 14.2815 24.9516 14.3215 24.9792L16.7436 26.9964C16.7644 27.014 16.791 27.0234 16.8183 27.0226H28.1839C28.2111 27.0233 28.2376 27.0143 28.2586 26.9972Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.2446 25.558L35.2021 23.9328C35.4347 23.7391 35.7276 23.6327 36.0303 23.6318H38.7961C39.461 23.6318 40 24.1708 40 24.8357V26.6414C40 27.3063 39.461 27.8453 38.7961 27.8453H34.0722C33.5266 27.8472 33.0386 27.5062 32.8529 26.9931C32.6673 26.4801 32.824 25.9056 33.2446 25.558ZM38.7962 26.6414V24.8357L36.0327 24.8344C36.0107 24.8337 35.9892 24.8412 35.9725 24.8555L34.0144 26.4843C33.9825 26.5053 33.9708 26.5467 33.9874 26.5812C33.9968 26.6196 34.0329 26.6453 34.0723 26.6414H38.7962Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.79797 23.9328C9.56627 23.7395 9.27444 23.6331 8.97272 23.6318H6.20386C5.53899 23.6318 5 24.1708 5 24.8357V26.6415C5 27.3063 5.53899 27.8453 6.20386 27.8453H10.9265C11.4719 27.8468 11.9595 27.5058 12.1452 26.993C12.3309 26.4802 12.1746 25.906 11.7548 25.558L9.79797 23.9328ZM11.0127 26.5812C11.0033 26.6196 10.9671 26.6453 10.9278 26.6414H6.20386V24.8356H8.97272C8.9947 24.8349 9.01621 24.8424 9.03291 24.8567L10.9916 26.4855C11.0206 26.5083 11.0294 26.5484 11.0127 26.5812Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.4 12.5999C42.5598 12.5999 43.5 13.5401 43.5 14.6999C43.5 15.8597 42.5598 16.7999 41.4 16.7999H40.2898L42.8847 19.3948C43.2801 19.7877 43.5018 20.3227 43.5 20.8802V30.0999C43.4963 30.9866 42.936 31.7755 42.1 32.0711V34.2999C42.1 35.4597 41.1598 36.3999 40 36.3999H35.1C33.9402 36.3999 33 35.4597 33 34.2999V32.1999H12V34.2999C12 35.4597 11.0598 36.3999 9.90003 36.3999H5.00001C3.84024 36.3999 2.90003 35.4597 2.90003 34.2999V32.0711C2.06399 31.7755 1.50366 30.9866 1.50001 30.0999V20.8802C1.49822 20.3227 1.71985 19.7877 2.11531 19.3948L4.71017 16.7999H3.6C2.44022 16.7999 1.50001 15.8597 1.50001 14.6999C1.50001 13.5401 2.44022 12.5999 3.6 12.5999H4.99995C5.60987 12.6021 6.18838 12.8709 6.58336 13.3357L7.89794 9.39259C8.37325 7.96281 9.71133 6.99849 11.2181 7H33.7819C35.2886 6.99849 36.6267 7.96281 37.102 9.39259L38.4166 13.3357C38.8115 12.8708 39.3901 12.6021 40 12.5999H41.4ZM11.2181 8.39995C10.3142 8.39995 9.51181 8.97825 9.2259 9.83565L7.37159 15.4H37.6283L35.774 9.83565C35.4881 8.97825 34.6857 8.39995 33.7819 8.39995H11.2181ZM2.90003 14.6999C2.90003 15.0865 3.21343 15.3999 3.6 15.3999H5.69999V14.6999C5.69999 14.3133 5.38658 13.9999 5.00001 13.9999H3.6C3.21343 13.9999 2.90003 14.3133 2.90003 14.6999ZM9.90003 34.9999C10.2866 34.9999 10.6 34.6865 10.6 34.2999V32.1999H4.30004V34.2999C4.30004 34.6865 4.61344 34.9999 5.00001 34.9999H9.90003ZM40 34.9999C40.3866 34.9999 40.7 34.6865 40.7 34.2999V32.1999H34.4V34.2999C34.4 34.6865 34.7134 34.9999 35.1 34.9999H40ZM42.1 20.8803C42.1001 20.6944 42.0263 20.5161 41.8949 20.3846L38.3102 16.7999H6.6898L3.10513 20.3846C2.97367 20.516 2.89989 20.6943 2.90003 20.8802V30.0999C2.90003 30.4865 3.21343 30.7999 3.6 30.7999H41.4C41.7866 30.7999 42.1 30.4865 42.1 30.0999V20.8803ZM39.3 14.6999V15.3999H41.4C41.7866 15.3999 42.1 15.0865 42.1 14.6999C42.1 14.3133 41.7866 13.9999 41.4 13.9999H40C39.6134 13.9999 39.3 14.3133 39.3 14.6999Z"
        fill={color}
      />
    </svg>
  )
);

export default PlateRecognition;