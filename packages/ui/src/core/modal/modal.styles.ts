import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import type { ModalProps } from './modal.props';
import { modalSizeMixin } from './modal.mixin';
import { Size } from './types';

const baseClassName = 'Modal';

const Wrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Wrapper'),
})(
  ({ open }: { open: boolean }) => css`
    position: fixed;
    right: 0px;
    bottom: 0px;
    top: 0px;
    left: 0px;
    z-index: 1200;
    visibility: ${open ? 'visible' : 'hidden'};
  `
);

const Overlay = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Overlay'),
})(
  ({ open }: { open: boolean }) => css`
    position: fixed;
    right: 0px;
    bottom: 0px;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
    transition: opacity 251ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    opacity: ${open ? '1' : '0'};
  `
);

const Container = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Container'),
})(
  ({ theme, open = false, fullWidth = false, maxWidth = Size.Sm }: With<WithTheme, ModalProps>) => css`
    position: absolute;
    overflow-x: hidden;
    overflow-y: auto;
    transition: opacity 251ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 167ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    outline: 0;
    border-radius: ${theme.shape.borderRadius[BRSize.Md]};
    background-color: ${theme.palette[PColor.BackgroundSecondary]};
    box-shadow: 0px 2px 4px ${theme.palette[PColor.LightShadow]};

    visibility: ${open ? 'visible' : 'hidden'};
    opacity: ${open ? '1' : '0'};

    display: flex;
    max-height: calc(100% - 64px);
    flex-direction: column;

    ${fullWidth &&
    css`
      width: calc(100% - 64px);
    `}
    ${modalSizeMixin[maxWidth]}

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `
);

const Modal = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  () => css`
    position: relative;
    padding-top: 8px;
    padding-bottom: 8px;
    margin: 0;
    padding: 0;
    outline: 0;
    display: flex;
    flex-direction: column;
  `
);

const Styled = applyDisplayNames({
  Modal,
  Wrapper,
  Overlay,
  Container,
});

export default Styled;
