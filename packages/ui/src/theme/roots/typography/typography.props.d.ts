import type { Values } from '../../../utils/types';
import { FontVariant } from '../../../utils/types/typography';

export interface TypographyProps {
  // readonly htmlFontSize: string;
  readonly fontFamily: string;
  readonly baseLineHeight: string | number;
  readonly font: Readonly<Record<Values<typeof FontVariant>, CSSObject>>;
}
