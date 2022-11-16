import React, { useState, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import PT from 'prop-types';
import type { IconProps } from '@scaleflex/icons/icon.props';
import ArrowSidebarLeftOutline from '@scaleflex/icons/arrow-sidebar-left-outline';
import ArrowSidebarRightOutline from '@scaleflex/icons/arrow-sidebar-right-outline';

import { intrinsicComponent } from '../../utils/functions';
import type { DrawerProps } from './drawer.props';
import DrawerItemButton from './drawer-item-button.component';
import DrawerItemText from './drawer-item-text-component';
import DrawerItemIcon from './drawer-item-icon.component';
import DrawerContext from './drawer.context';
import Styled from './drawer.styles';

const Drawer = intrinsicComponent<DrawerProps, HTMLDivElement>(
  ({ children, open, iconsSize = 20, collpased = false, top, hideBackdrop, onClose, ...rest }, ref): JSX.Element => {
    const [isCollapsed, setIsCollapsed] = useState(collpased);
    const collapsedButtonRef = useRef(null);

    const DrawerIconsSize = useMemo(() => iconsSize, [iconsSize]);

    const target = document.querySelector('body')!;

    useEffect(() => {
      setIsCollapsed(collpased);
    }, [collpased]);

    const handleClose = (): void => {
      if (typeof onClose === 'function') {
        onClose();
      }
    };

    useEffect(() => {
      const keyListener = (ev: KeyboardEvent): void => {
        if (ev.key === 'Escape') {
          handleClose();
        }
      };
      document.addEventListener('keydown', keyListener);

      return () => document.removeEventListener('keydown', keyListener);
    });

    const renderDrawer = (showCollapsedButton: boolean): JSX.Element => (
      <Styled.Drawer open={open} top={top} {...rest} isCollapsed={isCollapsed} ref={ref}>
        {children}
        {showCollapsedButton && (
          <DrawerItemButton onClick={() => setIsCollapsed(!isCollapsed)}>
            <DrawerItemIcon>
              {isCollapsed
                ? (props: IconProps) => <ArrowSidebarRightOutline {...props} size={iconsSize} />
                : (props: IconProps) => <ArrowSidebarLeftOutline {...props} size={iconsSize} />}
            </DrawerItemIcon>
            <DrawerItemText>Collapse menu</DrawerItemText>
          </DrawerItemButton>
        )}
      </Styled.Drawer>
    );

    const Backdrop = (): JSX.Element | null =>
      !hideBackdrop && open ? <Styled.BackdropComponent onClick={onClose} /> : null;

    const temproryDrawer = (): JSX.Element =>
      createPortal(
        <Styled.TemproryDrawer ref={collapsedButtonRef} open={open}>
          {Backdrop()}
          {renderDrawer(false)}
        </Styled.TemproryDrawer>,
        target
      );

    const persistentDrawer = (): JSX.Element => <Styled.PersistentDrawer>{renderDrawer(true)}</Styled.PersistentDrawer>;

    return (
      <DrawerContext.Provider
        value={{
          isCollapsed,
          size: DrawerIconsSize,
        }}
      >
        {persistentDrawer()}
        {temproryDrawer()}
      </DrawerContext.Provider>
    );
  }
);

export const defaultProps = {
  open: false,
  hideBackdrop: false,
  iconsSize: 20,
};

Drawer.defaultProps = defaultProps;

export const propTypes = {
  onClose: PT.func.isRequired,
  children: PT.node.isRequired,
  top: PT.number,
  iconsSize: PT.number,
  open: PT.bool,
  hideBackdrop: PT.bool,
  collpased: PT.bool,
};

Drawer.propTypes = propTypes;

export default Drawer;
