import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import type { StatusLabelProps } from './status-label.props';
import { fontLabelMixin, statusLabelMixin } from './status-label.mixin';
import { StatusLabelTypesType } from './status-label.props';
import { Size, Type, Variant } from './types';

const baseClassName = 'StatusLabel';

const StatusLabel = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})`
  display: flex;
  align-items: center;
  border-radius: inherit;
`;

const StatusIcon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ type = Type.Received, iconSize }: { type: StatusLabelTypesType; iconSize: number }) => css`
    width: ${iconSize}px;
    height: ${iconSize}px;
    border-radius: 50%;
    display: inline-flex;
    margin-right: 4px;
    margin-bottom: 2px;
    box-sizing: border-box;

    ${statusLabelMixin[type]}
  `
);

const StatusLabelWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ size = Size.Md, type = Type.Default, variant = Variant.Filled, theme }: With<WithTheme, StatusLabelProps>) => css`
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 2px 8px;
    background-color: ${theme.palette[PColor.Success]};
    color: ${theme.palette[PColor.BackgroundSecondary]};
    border-radius: ${theme.shape.borderRadius[BRSize.Md]};
    box-sizing: border-box;

    ${variant === Variant.Text &&
    css`
      background: transparent;
      color: ${theme.palette[PColor.TextPrimary]};

      ${StatusLabel} {
        ${fontLabelMixin[size]}
      }
    `}

    ${variant === Variant.Filled &&
    type !== Type.Default &&
    css`
      background-color: ${theme.palette[PColor.BackgroundStateless]};
      color: ${theme.palette[PColor.TextSecondary]};
      padding: 2px 4px;
      box-shadow: 0px 1px 3px rgba(77, 78, 78, 0.15);
    `}
  `
);

const Styled = applyDisplayNames({
  StatusLabel,
  StatusIcon,
  StatusLabelWrapper,
});

export default Styled;
