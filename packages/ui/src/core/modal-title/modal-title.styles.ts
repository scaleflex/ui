import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import type { ModalTitleProps, ModalTitleVariantType } from './modal-title.props';
import { Variant } from './types';

const baseClassName = 'ModalTitle';

const Icon = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ theme: { palette } }: With<WithTheme, { iconShadow: boolean }>) => css`
    display: flex;
    margin-bottom: 8px;
    padding: 14.5px;
    border-radius: 50%;
    background: ${palette[PColor.Accent_1_2_Opacity]};
    color: ${palette[PColor.AccentStateless]};
  `
);

const LabelPrimary = styled.div.attrs({
  className: generateClassNames(baseClassName, 'LabelPrimary'),
})(
  ({ variant = Variant.Default }: { variant?: ModalTitleVariantType }) => css`
    font-size: 18px;
    line-height: 27px;
    font-weight: ${variant === Variant.Default ? 400 : 500};
  `
);

const LabelSecondary = styled.div.attrs({
  className: generateClassNames(baseClassName, 'LabelSecondary'),
})`
  font-size: 12px;
  line-height: 14px;
  margin-top: 4px;
`;

const Close = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Close'),
})(
  ({ variant = Variant.Default, theme: { palette } }: With<WithTheme, { variant?: ModalTitleVariantType }>) => css`
    position: absolute;
    display: flex;
    top: ${variant === Variant.WithIcon ? 2 : 8}px;
    right: ${variant === Variant.WithIcon ? 2 : 8}px;
    color: ${palette[PColor.IconsSecondary]};
    &:hover {
      color: ${palette[PColor.AccentPrimary]};
    }
    cursor: pointer;
  `
);

const ModalTitle = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({
    variant = Variant.Default,
    theme: {
      palette,
      shape: { borderRadius },
    },
  }: With<WithTheme, ModalTitleProps>) => css`
    position: relative;
    color: ${palette[PColor.TextPrimary]};
    border-radius: ${borderRadius[BRSize.Md]} ${borderRadius[BRSize.Md]} 0px 0px;

    ${() => {
      const paddingY = variant === Variant.WithIcon ? 26 : 14;
      const paddingX = variant === Variant.WithIcon ? 12 : 14;
      const paddingLeft = 18;
      const paddingRight = variant === Variant.WithIcon ? paddingLeft : 40;

      return css`
        padding: ${paddingY}px ${paddingRight}px ${paddingX}px ${paddingLeft}px;
      `;
    }}

    ${variant === Variant.Default &&
    css`
      background: ${palette[PColor.BackgroundPrimary]};
      border-bottom: 1px solid ${palette[PColor.BordersSecondary]};
    `}

    ${variant === Variant.WithIcon &&
    css`
      display: flex;
      align-items: center;
      flex-direction: column;
    `}
  `
);

const Styled = applyDisplayNames({
  ModalTitle,
  LabelPrimary,
  LabelSecondary,
  Close,
  Icon,
});

export default Styled;
