import type { Values } from '@sfx-ui/utils/types';
import { FontVariant } from '@sfx-ui/utils/types/typography';

export interface TypographyProps {
  readonly htmlFontSize: string;
  readonly fontFamily: string;
  readonly baseLineHeight: string | number;
  readonly font: Readonly<Record<Values<typeof FontVariant>, CSSObject>>;
}
