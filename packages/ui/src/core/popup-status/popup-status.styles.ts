import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { PopupStatusProps } from './popup-status.props';

const baseClassName = 'PopupStatus';

const PopupStatus = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<PopupStatusProps>(
  () => css`
    display: flex;
  `
);

const Styled = applyDisplayNames({ PopupStatus });

export default Styled;
