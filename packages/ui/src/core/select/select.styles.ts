import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
// import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import InputStyled from '../input/input.styles';
import type { SelectProps } from './select.props';
import { fontSizeInputMixin } from '../input/input.mixin';
import { Size } from '../menu-item/types';

const baseClassName = 'Select';

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ theme: { palette }, size }: With<WithTheme, SelectProps>) => css`
    display: flex;
    flex-shrink: 0;
    color: ${palette[PColor.IconsPrimary]};
    padding: ${size === Size.Md ? 5 : 4}px;
  `
);

const TickIcon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'tickIcon'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    color: ${palette[PColor.AccentStateless]};
  `
);

const Container = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Container'),
})(
  ({ fullWidth = false }: { fullWidth: boolean }) => css`
    position: relative;
    display: inline-flex;
    ${fullWidth ? 'width: 100%' : ''}
  `
);

const Select = styled(InputStyled.Input).attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ theme: { palette }, disabled, readOnly, size = 'sm' }: With<WithTheme, SelectProps>) => css`
    cursor: ${disabled || readOnly ? 'default' : 'pointer'};
    user-select: none;
    background: ${disabled ? palette[PColor.BackgroundHover] : palette[PColor.BackgroundStateless]};

    ${fontSizeInputMixin[size]};
  `
);

const Label = styled.label.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})`
  flex-grow: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Placeholder = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Placeholder'),
})(
  ({ theme: { palette }, size }: With<WithTheme, SelectProps>) => css`
    width: 100%;
    color: ${palette[PColor.TextPlaceholder]};
    margin-right: ${size === Size.Md ? 10 : 6}px;
  `
);

const Input = styled.input.attrs({
  className: generateClassNames(baseClassName, 'Input'),
  'aria-hidden': 'true',
  tabindex: '-1',
})`
  left: 0;
  width: 100%;
  bottom: 0;
  opacity: 0;
  position: absolute;
  pointer-events: none;
  box-sizing: border-box;
`;

const Styled = applyDisplayNames({
  Container,
  Select,
  Label,
  Icon,
  TickIcon,
  Input,
  Placeholder,
});

export default Styled;
