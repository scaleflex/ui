import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
// import type { WithTheme } from '../../theme/entity';
// import { Color as PColor } from '../../utils/types/palette';

const baseClassName = 'TabPanel';

const TabPanel = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  () => css`
    margin-top: 20px;
  `
);

const Styled = applyDisplayNames({
  TabPanel,
});

export default Styled;
