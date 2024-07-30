import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Denied = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg width={size} height={size} viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest} ref={ref}>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M31.14 9.26637C31.097 8.31928 31.097 7.41525 31.097 6.51121C31.097 5.77937 30.5373 5.21973 29.8055 5.21973C24.4243 5.21973 20.3346 3.66996 16.9337 0.355157C16.4171 -0.118386 15.6423 -0.118386 15.1257 0.355157C11.7248 3.66996 7.63509 5.21973 2.25392 5.21973C1.52208 5.21973 0.962442 5.77937 0.962442 6.51121C0.962442 7.41525 0.962442 8.31928 0.919393 9.26637L0.918643 9.30573C0.746479 18.3427 0.51082 30.7125 15.5992 35.9139L16.0297 36L16.4602 35.9139C31.5275 30.7049 31.3122 18.3498 31.14 9.26637ZM20.5175 12.2565C20.3443 12.2899 20.1822 12.3742 20.0582 12.5094L15.9274 16.6702L15.9274 16.6702L20.0583 12.5094C20.1822 12.3742 20.3443 12.2899 20.5175 12.2565ZM11.1665 12.27C10.93 12.2665 10.6925 12.3562 10.5093 12.5393C10.3297 12.7189 10.2399 12.9285 10.2399 13.1679C10.2399 13.4074 10.3297 13.6469 10.5093 13.8265L14.6402 17.9574L10.5093 22.0882C10.3297 22.2678 10.2399 22.4774 10.2399 22.7168C10.2399 22.9563 10.3297 23.1958 10.5093 23.3754C10.6441 23.5101 10.8125 23.5943 10.9877 23.628C10.8125 23.5943 10.6441 23.5101 10.5094 23.3754C10.3298 23.1958 10.24 22.9563 10.24 22.7169C10.24 22.4774 10.3298 22.2678 10.5094 22.0882L14.6403 17.9574L10.5094 13.8265C10.3298 13.6469 10.24 13.4074 10.24 13.1679C10.24 12.9285 10.3298 12.7189 10.5094 12.5393C10.6925 12.3562 10.9301 12.2665 11.1665 12.27ZM15.9274 19.2446L20.0582 23.3754C20.193 23.5101 20.3445 23.5943 20.5256 23.628C20.3446 23.5943 20.193 23.5101 20.0583 23.3754L15.9274 19.2445L15.9274 19.2446ZM21.6786 21.7506L17.8277 17.9551L21.6509 14.132C21.9116 13.8712 22.0468 13.5517 22.0468 13.1679C22.0468 12.7842 21.9116 12.4647 21.6509 12.2039C21.1329 11.6859 20.2548 11.664 19.7462 12.2105L15.9263 16.0582L12.102 12.2339C11.5741 11.706 10.7318 11.706 10.2039 12.2339C9.9487 12.489 9.80793 12.8064 9.80793 13.1679C9.80793 13.5143 9.93795 13.866 10.2039 14.132L14.0293 17.9574L10.2039 21.7828C9.9487 22.0379 9.80793 22.3553 9.80793 22.7168C9.80793 23.0632 9.93795 23.4149 10.2039 23.6809C10.7217 24.1987 11.5993 24.2208 12.1079 23.6749L15.9274 19.8555L19.7528 23.6809C20.0135 23.9416 20.333 24.0768 20.7168 24.0768C21.1005 24.0768 21.42 23.9416 21.6808 23.6809C21.9416 23.4201 22.0767 23.1006 22.0767 22.7168C22.0767 22.3331 21.9416 22.0136 21.6808 21.7528L21.6786 21.7506Z" fill={color}/>
    </svg>
  )
);

export default Denied;
