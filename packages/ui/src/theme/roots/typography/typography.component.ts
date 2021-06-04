import { createGlobalStyle, css } from 'styled-components';

const Typography = createGlobalStyle`
  ${({ theme }) => {
    const { /* htmlFontSize, fontFamily, */ baseLineHeight } = theme.typography;

    return css`
      /* html {
        font-size: {htmlFontSize};
      }

      body {
        font-family: {fontFamily};
      } */

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      small {
        line-height: ${baseLineHeight};
      }
    `;
  }};
`;

export default Typography;
