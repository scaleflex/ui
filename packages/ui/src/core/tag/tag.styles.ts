import styled, { css } from 'styled-components';
import { generateClassNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
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
    color: ${theme.palette[PColor.TextPrimaryInvert]};
    cursor: pointer;
  `
);

const Label = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})(({ theme }: WithTheme) => `
  display: flex;
  align-items: center;
  color: ${theme.palette[PColor.BackgroundSecondary]};
  padding: 6px 16px;
  border-radius: inherit;
`);

const Tag = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({
    size = Size.Md, type = Type.Default, onSelect, hasRemoveHandler, theme
  }: With<WithTheme, TagProps & {hasRemoveHandler: boolean}>) => css`
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.palette[PColor.Tag]};
    border-radius: ${theme.shape.borderRadius[BRSize.Sm]};
    box-sizing: border-box;

    &:hover {
      background-color: ${theme.palette[PColor.Error]};

      ${Label} {
        border-color: ${theme.palette[PColor.Error]};
      }

      ${type === Type.Default && hasRemoveHandler && css`
        ${Cross} {
          display: inline-flex;
        }
      `}

      ${type === Type.Suggested && onSelect && css`
        cursor: pointer;
      `}
    }

    &:not(:hover) {
      ${type === Type.Suggested && css`
        background-color: ${theme.palette[PColor.BackgroundSecondary]};

        ${Label} {
          border: 1px dashed ${theme.palette[PColor.BackgroundPrimaryActive]};
          color: ${theme.palette[PColor.TextSecondary]};
        }
      `}
    }

    ${Label} {
      border: 1px solid ${theme.palette[PColor.Tag]};
      ${sizeTagLabelMixin[size]}

      &:hover {
        background-color: ${theme.palette[PColor.BackgroundPrimaryActive]};
        border-color: ${theme.palette[PColor.BackgroundPrimaryActive]};
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
