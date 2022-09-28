import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
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
    display: inline-flex;
    color: ${theme.palette[PColor.TagLabel]};
    cursor: pointer;
  `
);

const Label = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})(
  ({ theme }: WithTheme) => css`
    display: flex;
    align-items: center;
    outline: none;
    color: ${theme.palette[PColor.TagLabel]};
  `
);

const Tag = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ size = Size.Md, type = Type.Default, onSelect, theme }: With<WithTheme, TagProps>) => css`
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background-color: ${theme.palette[PColor.TagBackground]};
    border: 1px solid ${theme.palette[PColor.TagBorder]};
    border-radius: ${theme.shape.borderRadius[BRSize.Sm]};

    ${sizeTagLabelMixin[size]}

    &:hover {
      background-color: ${theme.palette[PColor.TagBackgroundHovered]};
      border: 1px solid ${theme.palette[PColor.TagBorderHovered]};

      ${Label} {
        color: ${theme.palette[PColor.TagLabelHovered]};
      }

      ${Cross} {
        color: ${theme.palette[PColor.TagLabelHovered]};
      }

      ${type === Type.Suggested &&
      onSelect &&
      css`
        cursor: pointer;
      `}

      ${type === Type.Suggested &&
      css`
        border: 1px dashed ${theme.palette[PColor.TagLabel]};
        background-color: ${theme.palette[PColor.TagBackgroundHovered]};

        ${Label} {
          color: ${theme.palette[PColor.TagLabelHovered]};
        }

        ${Cross} {
          color: ${theme.palette[PColor.TagLabelHovered]};
        }
      `}
    }

    &:not(:hover) {
      ${type === Type.Suggested &&
      css`
        border: 1px dashed ${theme.palette[PColor.TagLabel]};
        background: transparent;

        ${Label} {
          color: ${theme.palette[PColor.TagLabel]};
        }

        ${Cross} {
          color: ${theme.palette[PColor.TagLabel]};
        }
      `}
    }

    ${Cross} {
      ${sizeTagCrossMixin[size]}
    }
  `
);

const Styled = applyDisplayNames({
  Tag,
  Label,
  Cross,
});

export default Styled;
