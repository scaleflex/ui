import type { Values } from '../../../utils/types';
import { FontVariant } from '../../../utils/types/typography';

export type FontObjectType = Readonly<Record<Values<typeof FontVariant>, CSSObject>>;

export type FontOverrideType = {
  fontFamily?: string;
  fontSize?: string | number;
  fontStyle?: string;
  fontWeight?: string;
};
export interface TypographyProps {
  // readonly htmlFontSize: string;
  readonly fontFamily: string;
  readonly baseLineHeight: string | number;
  readonly font: FontObjectType;
}
