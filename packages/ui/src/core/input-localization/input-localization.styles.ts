import styled, { css } from 'styled-components';

import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import { InputSize } from '../../utils/types';
import type { InputLocalizationProps } from './input-localization.props';
import { sizeInputLabelMixin } from './input-localization.mixin';

const baseClassName = 'InputLocalization';

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    display: flex;
    flex-shrink: 0;
    color: ${palette[PColor.IconsPrimary]};

    &:first-child {
      margin-right: 4px;
      margin-bottom: 2px;
    }

    &:last-child {
      margin-left: 6px;
      margin-top: 1px;
    }
  `
);

const Container = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Container'),
})`
  display: inline-flex;
`;

const InputLocalization = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ size = InputSize.Md, disabled, theme }: With<WithTheme, InputLocalizationProps>) => css`
    position: relative;
    display: flex;
    align-items: center;
    transition: all 100ms ease-out;
    cursor: ${disabled ? 'default' : 'pointer'};
    color: ${disabled ? theme.palette[PColor.ButtonDisabledText] : theme.palette[PColor.LinkStateless]};

    &:hover {
      ${!disabled && `color: ${theme.palette[PColor.LinkHover]};`}
    }

    ${disabled &&
    css`
      ${Icon} {
        color: ${theme.palette[PColor.ButtonDisabledText]};
        cursor: default;
      }
    `}

    ${sizeInputLabelMixin[size]}
  `
);

const Label = styled.label.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})`
  flex-grow: 1;
`;

const Styled = applyDisplayNames({
  Container,
  InputLocalization,
  Label,
  Icon,
});

export default Styled;
