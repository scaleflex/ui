import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
// import { Color as PColor } from '../../utils/types/palette';
import { FontVariant } from '../../utils/types/typography/font-variant';
// import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import { InputSize } from '../../utils/types';
import IStyled from '../input/input.styles';
import BStyled from '../button/button.styles';
import type { UploadInputProps } from './upload-input.props';

const baseClassName = 'UploadInput';

const sizeInputMixins = {
  [InputSize.Sm]: css`
    padding-top: 3px;
    padding-left: 3px;
    padding-bottom: 3px;
  `,

  [InputSize.Md]: css`
    padding-top: 5px;
    padding-left: 5px;
    padding-bottom: 5px;
  `,
};

const sizeButtonMixins = {
  [InputSize.Sm]: css`
    padding: 2px 4px;
  `,

  [InputSize.Md]: css`
    padding: 4px 8px;
  `,
};

const FileInput = styled.input.attrs({
  className: generateClassNames(baseClassName, 'FileInput'),
})`
  display: none;
`;

const UploadInput = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<UploadInputProps>(
  ({ size = InputSize.Md, theme }: With<WithTheme, UploadInputProps>) => css`
    position: relative;

    ${IStyled.Input} {
      ${sizeInputMixins[size]}
    }

    ${BStyled.Button} {
      margin-right: 8px;
      ${sizeButtonMixins[size]}

      ${BStyled.Label} {
        ${theme.typography.font[FontVariant.ButtonXs]}
      }
    }
  `
);

const Styled = applyDisplayNames({
  UploadInput,
  FileInput,
});

export default Styled;
