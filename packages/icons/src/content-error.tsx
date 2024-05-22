import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const ContentError = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 332 162"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M199.871 106.172L203.852 110.154L208.507 114.784L210.3 116.591L219.587 107.298L209.174 96.8688L199.871 106.172Z"
        fill="#97A6B6"
      />
      <path
        d="M229.056 107.236L261.103 139.281C263.514 141.685 265.01 145.022 265 148.693C265 152.369 263.513 155.703 261.103 158.117C258.699 160.518 255.37 161.999 251.693 161.999C248.018 161.999 244.692 160.518 242.282 158.109L210.237 126.06L229.056 107.236Z"
        fill={color}
      />
      <path
        d="M210.235 126.06L229.056 107.234L227.653 105.827C226.805 104.977 225.647 104.46 224.359 104.46C223.063 104.46 221.902 104.974 221.063 105.821L208.823 118.066C207.983 118.901 207.458 120.062 207.458 121.36C207.458 122.638 207.982 123.814 208.823 124.643L210.235 126.06Z"
        fill="#768A9F"
      />
      <path
        d="M103 60.1688C103 26.9443 129.94 0.00134277 163.171 0.00134277C196.405 0.00134277 223.344 26.9459 223.344 60.1688C223.344 93.4032 196.402 120.341 163.171 120.349C129.94 120.341 103 93.4023 103 60.1688Z"
        fill="#768A9F"
      />
      <path
        d="M163.171 113.829C192.798 113.829 216.828 89.8081 216.828 60.1678C216.828 30.5446 192.798 6.51575 163.171 6.51575C133.54 6.51638 109.512 30.5436 109.512 60.1684C109.512 89.8081 133.54 113.829 163.171 113.829Z"
        fill="#97A6B6"
      />
      <path
        d="M163.171 109.535C190.428 109.535 212.532 87.4395 212.532 60.1684C212.532 32.9176 190.428 10.8087 163.171 10.8087C135.914 10.8087 113.807 32.9176 113.807 60.1684C113.807 87.4379 135.909 109.535 163.171 109.535Z"
        fill="#DEE6ED"
      />
      <path
        d="M164.469 18.9129C163.629 17.6656 162.183 16.8848 160.593 16.9752C153.779 17.3891 147.34 19.3081 141.455 22.7247C139.384 23.9365 138.673 26.607 139.88 28.6886C141.087 30.7443 143.761 31.4758 145.826 30.2526C150.52 27.5448 155.658 26.0064 161.105 25.6745C163.497 25.5499 165.338 23.4859 165.189 21.0949C165.162 20.2662 164.884 19.521 164.469 18.9129Z"
        fill="white"
      />
      <path
        d="M136.52 33.224C136.288 32.8766 135.986 32.5542 135.655 32.2795C133.786 30.751 131.046 31.0484 129.535 32.9155C125.089 38.3748 122.028 44.9247 120.677 51.8955C119.079 60.1745 119.915 68.6511 123.09 76.4182C124.015 78.6571 126.561 79.7085 128.782 78.7932C131.01 77.8908 132.071 75.3538 131.159 73.1149C128.628 66.921 127.971 60.1565 129.256 53.5487C130.308 47.984 132.752 42.7595 136.299 38.4026C137.533 36.8858 137.565 34.7573 136.52 33.224Z"
        fill="white"
      />
      <path
        d="M46.6734 93.8984H7.23119C3.12278 93.8984 0 91.1081 0 86.3475C0 85.0339 0.328743 83.5571 1.1503 82.0791L40.0991 5.58185C42.0709 1.4774 45.6872 0 49.1381 0C52.9177 0 59.8202 3.28257 59.8202 8.20827C59.8202 9.02892 59.4914 10.0141 58.9986 10.9986L27.4451 74.0353H46.6734V56.7987C46.6734 52.0381 52.0968 50.0679 57.3555 50.0679C62.7789 50.0679 68.0376 52.0381 68.0376 56.7987V74.0353H75.7616C80.1994 74.0353 82.5 78.9598 82.5 84.0494C82.5 88.9739 79.2125 93.8984 75.7616 93.8984H68.0376V113.27C68.0376 117.702 62.7789 120 57.3555 120C52.0968 120 46.6734 117.702 46.6734 113.27V93.8984Z"
        fill={color}
      />
      <path
        d="M296.173 93.8984H256.731C252.623 93.8984 249.5 91.1081 249.5 86.3475C249.5 85.0339 249.829 83.5571 250.65 82.0791L289.599 5.58185C291.571 1.4774 295.187 0 298.638 0C302.418 0 309.32 3.28257 309.32 8.20827C309.32 9.02892 308.991 10.0141 308.499 10.9986L276.945 74.0353H296.173V56.7987C296.173 52.0381 301.597 50.0679 306.855 50.0679C312.279 50.0679 317.538 52.0381 317.538 56.7987V74.0353H325.262C329.699 74.0353 332 78.9598 332 84.0494C332 88.9739 328.713 93.8984 325.262 93.8984H317.538V113.27C317.538 117.702 312.279 120 306.855 120C301.597 120 296.173 117.702 296.173 113.27V93.8984Z"
        fill={color}
      />
    </svg>
  )
);

export default ContentError;