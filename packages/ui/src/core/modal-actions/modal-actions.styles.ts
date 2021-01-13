import styled, { css } from 'styled-components';
import { generateClassNames } from '../../utils/functions';
import type { ModalActionsProps } from './modal-actions.props';
import { Align } from './types';

const baseClassName = 'ModalActions';

const ModalActions = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ align = Align.Center }: ModalActionsProps) => css`
    position: relative;
    display: flex;
    align-items: center;
    padding: 7px 16px;
    justify-content: ${align === Align.Right ? 'flex-end' : align};

    > *:not(:first-child) {
      margin-left: 8px;
    }
  `
);

const Styled = {
  ModalActions,
};

export default Styled;
