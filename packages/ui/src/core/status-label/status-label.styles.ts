import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import type { StatusLabelProps } from './status-label.props';
import { sizeStatusLabelMixin } from './status-label.mixin';
import { Size, Type } from './types';

const baseClassName = 'StatusLabel';

const StatusLabel = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})(
  ({ theme }: WithTheme) => `
  display: flex;
  align-items: center;
  color: ${theme.palette[PColor.BackgroundSecondary]};
  padding: 6px 16px;
  border-radius: inherit;
`
);

const StatusLabelWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ size = Size.Md, type = Type.Default, theme }: With<WithTheme, StatusLabelProps>) => css`
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: ${type === 'default' ? theme.palette[PColor.Tag] : theme.palette[type]};
    border-radius: ${theme.shape.borderRadius[BRSize.Sm]};
    box-sizing: border-box;

    ${StatusLabel} {
      border: 1px solid ${type === 'default' ? theme.palette[PColor.Tag] : theme.palette[type]};
      ${sizeStatusLabelMixin[size]}
    }
  `
);

const Styled = applyDisplayNames({
  StatusLabel,
  StatusLabelWrapper,
});

export default Styled;
