import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';

const baseClassName = 'ModalContent';

const ModalContent = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  () => css`
    position: relative;
    padding: 15px 16px;
  `
);

const Styled = applyDisplayNames({
  ModalContent,
});

export default Styled;
