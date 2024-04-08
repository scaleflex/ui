import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const FreeDrawing = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M44.2019 35.5481H31.8701C29.1263 35.5481 26.8943 37.7802 26.8943 40.5241C26.8943 41.8364 25.8266 42.9042 24.5144 42.9042H5.47612C4.1636 42.9042 3.09621 41.8364 3.09621 40.5241V38.7913C3.09621 37.4798 4.16325 36.4123 5.47475 36.4116L8.90557 36.4099C8.9066 36.4099 8.90797 36.4096 8.909 36.4096C8.94814 36.4096 8.98728 36.4072 9.02676 36.4037C9.0429 36.4024 9.05869 36.3996 9.07483 36.3976C9.09165 36.3952 9.10882 36.3938 9.12564 36.391L18.2872 34.8107C18.292 34.8096 18.2965 34.8086 18.3009 34.8076C18.3154 34.8048 18.3294 34.8017 18.3435 34.7986C18.3665 34.7935 18.3892 34.7883 18.4115 34.7818C18.4273 34.7777 18.4431 34.7729 18.4589 34.7681C18.4798 34.7612 18.5008 34.754 18.5217 34.7461C18.5368 34.7403 18.5523 34.7351 18.5674 34.7289C18.5996 34.7152 18.6312 34.7008 18.6625 34.6847C18.6748 34.6781 18.6872 34.6706 18.6995 34.6637C18.7215 34.6513 18.7431 34.639 18.7644 34.6253C18.7775 34.617 18.7905 34.6081 18.8036 34.5992C18.8242 34.5847 18.8448 34.5696 18.8647 34.5538C18.8753 34.5456 18.8863 34.5374 18.8969 34.5284C18.9272 34.5034 18.9567 34.4773 18.9845 34.4491L42.1231 11.3098C43.9787 9.4541 43.9787 6.43444 42.1231 4.57836L39.4369 1.89242C37.5813 0.036338 34.5614 0.0366813 32.7057 1.89242L9.5675 25.0317C9.53934 25.0595 9.51325 25.0894 9.48785 25.1196C9.47926 25.1299 9.47102 25.1405 9.46278 25.1512C9.44699 25.1714 9.43188 25.192 9.41747 25.213C9.40854 25.2257 9.39961 25.2387 9.39137 25.2518C9.37798 25.2727 9.36562 25.294 9.35361 25.3156C9.34571 25.3297 9.33747 25.3438 9.32992 25.3579C9.31481 25.3877 9.30108 25.4176 9.28803 25.4485C9.28151 25.464 9.27602 25.4801 9.26984 25.4959C9.26263 25.5158 9.25542 25.5361 9.24889 25.5563C9.24374 25.5728 9.23894 25.5893 9.23447 25.6058C9.22864 25.627 9.22349 25.6487 9.21868 25.6707C9.21525 25.6858 9.21181 25.7009 9.20907 25.716C9.20804 25.7204 9.20701 25.7246 9.20632 25.7287L7.8114 33.8143L5.47337 33.8153C2.73091 33.8167 0.5 36.0491 0.5 38.7913V40.5241C0.5 43.2681 2.73228 45.5005 5.47612 45.5005H24.5144C27.2582 45.5005 29.4905 43.2681 29.4905 40.5241C29.4905 39.2119 30.5579 38.1441 31.8701 38.1441H44.2019C44.9188 38.1441 45.5 37.5632 45.5 36.8463C45.5 36.1291 44.9188 35.5481 44.2019 35.5481ZM11.3387 28.6388L15.3775 32.6778L10.4969 33.5197L11.3387 28.6388ZM30.7011 7.56849L32.656 9.52346L14.2758 27.9044L12.3209 25.9494L30.7011 7.56849ZM18.0665 31.6952L16.1116 29.7402L34.492 11.3593L36.4469 13.3143L18.0665 31.6952ZM34.5415 3.72791C35.385 2.88467 36.7573 2.88467 37.6012 3.72791L40.287 6.41419C41.1305 7.25777 41.1305 8.63043 40.287 9.47402L38.2823 11.4788L32.5368 5.73266L34.5415 3.72791Z"
        fill={color}
      />
    </svg>
  )
);

export default FreeDrawing;