import { Shadows } from '../../../../utils/types/shadows';
import type { ShadowsMap } from './shadows-map';

export const shadows = {
  [Shadows.ShadowSm]: '0px 1px 2px 0px rgba(146, 166, 188, 0.2)',
  [Shadows.ShadowMd]: ' 0px 1px 4px 0px rgba(146, 166, 188, 0.24)',
  [Shadows.ShadowLg]: ' 0px 2px 6px 0px rgba(146, 166, 188, 0.32)',
  [Shadows.ShadowXl]: ' 0px 2px 6px 0px rgba(146, 166, 188, 0.5)',
  [Shadows.Label]: ' 0px 1px 3px 0px rgba(77, 78, 78, 0.15)',
  [Shadows.Header]: ' 0px 6px 10px 0px rgba(146, 166, 188, 0.2)',
  [Shadows.HeaderPopup]: ' 0px 3px 7px 0px rgba(146, 166, 188, 0.16)',
  [Shadows.FooterPopup]: ' 0px -4px 8px 0px rgba(208, 215, 220, 0.22)',
  [Shadows.LeftPanel]: ' 6px 8px 12px 0px rgba(146, 166, 188, 0.14)',
  [Shadows.RightPanel]: '-6px 8px 12px 0px rgba(146, 166, 188, 0.14)',
};

export const defaultShadows: ShadowsMap = shadows;
