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
    color: ${theme.palette[PColor.IconsSecondary]};
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
    color: ${theme.palette[PColor.TextPrimary]};
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
    transition: all 100ms ease-out;
    background-color: ${theme.palette[PColor.BordersSecondary]};
    border: 1px solid ${theme.palette[PColor.BorderPrimaryStateless]};
    border-radius: ${theme.shape.borderRadius[BRSize.Md]};

    ${sizeTagLabelMixin[size]}

    &:hover {
      background-color: ${theme.palette[PColor.BackgroundActive]};
      border: 1px solid ${theme.palette[PColor.IconsSecondaryHover]};

      ${Label} {
        color: ${theme.palette[PColor.TextPrimary]};
      }

      ${Cross} {
        color: ${theme.palette[PColor.IconsSecondaryHover]};
      }

      ${type === Type.Suggested &&
      onSelect &&
      css`
        cursor: pointer;
      `}

      ${type === Type.Suggested &&
      css`
        border: 1px dashed ${theme.palette[PColor.IconsSecondaryHover]};
        background-color: ${theme.palette[PColor.BackgroundActive]};

        ${Label} {
          color: ${theme.palette[PColor.LinkHover]};
        }

        ${Cross} {
          color: ${theme.palette[PColor.IconsSecondaryHover]};
        }
      `}
    }

    &:not(:hover) {
      ${type === Type.Suggested &&
      css`
        border: 1px dashed ${theme.palette[PColor.BorderPrimaryStateless]};
        background: transparent;

        ${Label} {
          color: ${theme.palette[PColor.LinkStateless]};
        }

        ${Cross} {
          color: ${theme.palette[PColor.IconsSecondary]};
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
