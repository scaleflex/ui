import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import InputStyled from '../input/input.styles';
import type { SelectProps, SelectSizeType } from './select.props';
import { fontSizeInputMixin } from '../input/input.mixin';
import { Size } from '../menu-item/types';
import CrossButton from '../cross-button/cross-button.component';

const baseClassName = 'Select';

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})<With<WithTheme, { size?: SelectSizeType }>>(
  ({ theme: { palette }, size }) => css`
    display: flex;
    flex-shrink: 0;
    color: ${palette[PColor.IconsPrimary]};
    padding: ${size === Size.Md ? '2.5px' : '2px'};
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
})<{ fullWidth: boolean }>(
  ({ fullWidth = false }) => css`
    position: relative;
    display: inline-flex;
    ${fullWidth ? 'width: 100%' : ''}
  `
);

const StyledCrossButton = styled(CrossButton).attrs({
  className: generateClassNames(baseClassName, 'CrossButton'),
})(
  () => css`
    display: none;
    margin-right: 6px;
  `
);

const Select = styled(InputStyled.Input).attrs({
  className: generateClassNames(baseClassName, 'root'),
})<With<With<WithTheme, SelectProps>, { isValueExists: boolean }>>(
  ({ theme: { palette }, disabled, readOnly, size = 'sm', isValueExists }) => css`
    cursor: ${disabled || readOnly ? 'default' : 'pointer'};
    user-select: none;
    gap: 0px;
    background: ${disabled ? palette[PColor.BackgroundHover] : palette[PColor.BackgroundStateless]};

    ${isValueExists &&
    `
    &:hover {
      ${StyledCrossButton} {
        display: flex;
      }
    }
    `}

    ${fontSizeInputMixin[size]};
  `
);

const Label = styled.label.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})<{ hideEllipsis: boolean; size?: SelectSizeType }>(
  ({ hideEllipsis, size = Size.Md }) => `
    flex-grow: 1;
    margin-right: ${size === Size.Md ? 8 : 12}px;

    ${
      !hideEllipsis &&
      css`
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      `
    }
  `
);

const Placeholder = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Placeholder'),
})<With<WithTheme, { size?: SelectSizeType }>>(
  ({ theme: { palette }, size }) => css`
    width: 100%;
    color: ${palette[PColor.TextPlaceholder]};
    margin-right: ${size === Size.Md ? 16 : 12}px;
  `
);

const Input = styled.input.attrs({
  className: generateClassNames(baseClassName, 'Input'),
  'aria-hidden': 'true',
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
  StyledCrossButton,
});

export default Styled;
