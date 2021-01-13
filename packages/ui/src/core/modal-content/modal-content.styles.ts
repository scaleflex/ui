import styled, { css } from 'styled-components';
import { generateClassNames } from '../../utils/functions';

const baseClassName = 'ModalContent';

const ModalContent = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  () => css`
    position: relative;
    padding: 15px 16px;
  `
);

const Styled = {
  ModalContent,
};

export default Styled;
