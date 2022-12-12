import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import IconButtonStyled from '../icon-button/icon-button.styles';
import type { GalleryButtonProps } from './gallery-button.props';
import { Color as PColor } from '../../utils/types/palette';
import { With } from '@scaleflex/ui/utils/types';
import type { WithTheme } from '../../theme/entity';

const baseClassName = 'GalleryButton';

const GalleryButton = styled(IconButtonStyled.IconButton).attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ theme, active }: With<WithTheme, GalleryButtonProps>) => css`
    border: none;
    background-color: transparent;
    padding: 8px 6px;

    &:hover {
      background-color: white;

      ${MainRectangle} {
        background-color: ${theme.palette[PColor.IconsPrimary]};
      }

      ${SideRectangle} {
        background-color: ${theme.palette[PColor.IconsPrimaryHover]};
      }
    }

    &:active {
      background-color: ${theme.palette[PColor.BackgroundActive]};

      ${MainRectangle} {
        background-color: ${theme.palette[PColor.LinkHover]};
      }

      ${SideRectangle} {
        background-color: ${theme.palette[PColor.LinkActive]};
      }
    }

    &:focus {
      background-color: ${theme.palette[PColor.BackgroundActive]};
      border: none;

      ${MainRectangle} {
        background-color: ${theme.palette[PColor.LinkHover]};
      }

      ${SideRectangle} {
        background-color: ${theme.palette[PColor.LinkActive]};
      }
    }

    ${active &&
    css`
      background-color: ${theme.palette[PColor.BackgroundActive]};

      ${MainRectangle} {
        background-color: ${theme.palette[PColor.LinkHover]};
      }

      ${SideRectangle} {
        background-color: ${theme.palette[PColor.LinkActive]};
      }

      &:hover,
      &:active,
      &:focus {
        background-color: ${theme.palette[PColor.BackgroundActive]};

        ${MainRectangle} {
          background-color: ${theme.palette[PColor.LinkHover]};
        }

        ${SideRectangle} {
          background-color: ${theme.palette[PColor.LinkActive]};
        }
      }
    `}

    &:disabled {
      color: ${theme.palette[PColor.BordersDisabled]};
      background: ${theme.palette[PColor.Accent_1_2_Opacity]};
      border: none;
      cursor: default;

      ${MainRectangle} {
        background-color: ${theme.palette[PColor.IconsSecondary]};
      }

      ${SideRectangle} {
        background-color: ${theme.palette[PColor.IconsPrimary]};
      }
    }
  `
);

const Wrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'wrapper'),
})`
  width: 28px;
  height: 24px;
  gap: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SideRectangle = styled.div.attrs({
  className: generateClassNames(baseClassName, 'side-rectangle'),
})(
  ({ theme }: WithTheme) => css`
    width: 6px;
    height: 10px;
    border-radius: 1.33px;
    background-color: ${theme.palette[PColor.IconsPrimary]};
  `
);

const MainRectangle = styled.div.attrs({
  className: generateClassNames(baseClassName, 'main-recangle'),
})(
  ({ theme }: WithTheme) => css`
    width: 12px;
    height: 16px;
    border-radius: 2.67px;
    background-color: ${theme.palette[PColor.IconsSecondary]};
  `
);

const Styled = applyDisplayNames({
  GalleryButton,
  Wrapper,
  SideRectangle,
  MainRectangle,
});

export default Styled;
