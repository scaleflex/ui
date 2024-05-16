import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import { Color as PaletteColor } from '../../utils/types/palette';
import IStyled from '../input/input.styles';
import BStyled from '../button/button.styles';

const baseClassName = 'UploadInput';

const FileInput = styled.input.attrs({
  className: generateClassNames(baseClassName, 'FileInput'),
})`
  display: none;
`;

const UploadInput = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<WithTheme>(
  ({ theme }) => css`
    position: relative;

    ${IStyled.Input} {
      padding: unset;
      width: 299px;
      column-gap: 0;
      transition: all 100ms ease-out;

      &:hover {
        ${BStyled.Button} {
          background-color: ${theme.palette[PaletteColor.AccentPrimaryHover]};
          transition: all 100ms ease-out;
          border: none;
        }
      }
    }

    ${IStyled.Base} {
      padding: 12px 8px 12px 12px;
    }

    ${BStyled.Button} {
      border-radius: 0 4px 4px 0;
    }
  `
);

const Styled = applyDisplayNames({
  UploadInput,
  FileInput,
});

export default Styled;
