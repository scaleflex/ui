import styled, { css } from 'styled-components';

import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import type { LabelProps } from './label.props';
import { fontSizeLabelMixin } from './label.mixin';
import { LabelSize } from './types/size';

const baseClassName = 'Label';

const Label = styled.label.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<With<With<WithTheme, LabelProps>, { $error?: boolean }>>(
  ({ size = LabelSize.Md, $error = false, disabled = false, htmlFor, theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.palette[PColor.TextSecondary]};
    font-style: normal;
    font-weight: normal;

    ${disabled &&
    css`
      color: ${theme.palette[PColor.ButtonDisabledText]};
      ${Icon} {
        color: ${theme.palette[PColor.IconsMuted]};
      }
    `}

    ${fontSizeLabelMixin[size]}

    cursor: ${htmlFor && 'pointer'};

    ${$error &&
    css`
      color: ${theme.palette[PColor.Error]} !important;
    `};
  `
);

const Text = styled.span.attrs({
  className: generateClassNames(baseClassName, 'text'),
})`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})<With<WithTheme, { $end: boolean }>>(
  ({ theme: { palette }, $end = false }) => css`
    display: flex;
    ${$end ? 'margin-left: 4px' : 'margin-right: 4px'};
    color: ${palette[PColor.IconsSecondary]};
  `
);

const Styled = applyDisplayNames({
  Label,
  Icon,
  Text,
});

export default Styled;
