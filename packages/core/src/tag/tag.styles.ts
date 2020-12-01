import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
import type { With } from '@sfx-ui/utils/types';
import type { WithTheme } from '@sfx-ui/theme/entity';
import { Color as PaletteColor } from '@sfx-ui/utils/types/palette';
import type { TagProps } from './tag.props';
import { sizeTagLabelMixin, sizeTagCrossMixin } from './tag.mixin';
import { Size, Type } from './types';

const baseClassName = 'Tag';

const Cross = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ theme }: WithTheme) => css`
    position: absolute;
    display: none; // inline-flex
    width: 6px;
    height: 6px;
    right: 3px;
    top: 3px;
    color: ${theme.palette[PaletteColor.TextPrimaryInvert]};
    cursor: pointer;
  `
);

const Label = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})(({ theme }: WithTheme) => `
  display: flex;
  align-items: center;
  color: ${theme.palette[PaletteColor.BackgroundSecondary]};
  padding: 6px 16px;
  border-radius: inherit;
`);

const Tag = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<TagProps>(
  ({ size = Size.Md, type = Type.Default, theme }: With<WithTheme, TagProps>) => css`
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.palette[PaletteColor.Tag]};
    border-radius: 2px;
    box-sizing: border-box;

    &:hover {
      background-color: ${theme.palette[PaletteColor.Error]};

      ${Label} {
        border-color: ${theme.palette[PaletteColor.Error]};
      }

      ${type === Type.Default && css`
        ${Cross} {
          display: inline-flex;
        }
      `}
    }

    &:not(:hover) {
      ${type === Type.Suggested && css`
        background-color: ${theme.palette[PaletteColor.BackgroundSecondary]};

        ${Label} {
          border: 1px dashed ${theme.palette[PaletteColor.BackgroundPrimaryActive]};
          color: ${theme.palette[PaletteColor.TextSecondary]};
        }
      `}
    }

    ${Label} {
      border: 1px solid ${theme.palette[PaletteColor.Tag]};
      ${sizeTagLabelMixin[size]}

      &:hover {
        background-color: ${theme.palette[PaletteColor.BackgroundPrimaryActive]};
        border-color: ${theme.palette[PaletteColor.BackgroundPrimaryActive]};
      }
    }

    ${Cross} {
      ${sizeTagCrossMixin[size]}
    }
  `
);

const Styled = {
  Tag,
  Label,
  Cross,
};

export default Styled;
