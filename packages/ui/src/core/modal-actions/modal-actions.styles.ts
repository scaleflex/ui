import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { ModalActionsProps } from './modal-actions.props';
import { Align } from './types';

const baseClassName = 'ModalActions';

const ModalActions = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<ModalActionsProps>(
  ({ align = Align.Center }) => css`
    position: relative;
    display: flex;
    align-items: center;
    padding: 24px;
    justify-content: ${align === Align.Right ? 'flex-end' : align};
    gap: 12px;
  `
);

const Styled = applyDisplayNames({
  ModalActions,
});

export default Styled;
