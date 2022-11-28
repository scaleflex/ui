import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import PT from 'prop-types';
import type { IconProps } from '@scaleflex/icons/icon.props';
import ArrowSidebarLeftOutline from '@scaleflex/icons/arrow-sidebar-left-outline';
import ArrowSidebarRightOutline from '@scaleflex/icons/arrow-sidebar-right-outline';

import { intrinsicComponent } from '../../utils/functions';
import type { DrawerProps } from './drawer.props';
import DrawerItemText from './drawer-item-text-component';
import DrawerItemIcon from './drawer-item-icon.component';
import DrawerContext from './drawer.context';
import Backdrop from '../backdrop';
import Styled from './drawer.styles';

const Drawer = intrinsicComponent<DrawerProps, HTMLDivElement>(
  (
    {
      children,
      open,
      iconsSize = 20,
      collapsed = false,
      top,
      hideBackdrop,
      disablePortal,
      collapseButtonLabel = 'Collapse menu',
      persistentDrawerStyles = {},
      temproryDrawerStyles = {},
      onClose,
      onCollapse,
      ...rest
    },
    ref
  ): JSX.Element => {
    const [isCollapsed, setIsCollapsed] = useState(collapsed);

    const DrawerIconsSize = useMemo(() => iconsSize, [iconsSize]);

    const target = document.querySelector('body')!;

    useEffect(() => {
      setIsCollapsed(collapsed);
    }, [collapsed]);

    useEffect(() => {
      if (onCollapse) {
        onCollapse(isCollapsed);
      }
    }, [isCollapsed]);

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
      <Styled.Drawer open={open} top={top} {...rest} isCollapsed={showCollapsedButton ? isCollapsed : false} ref={ref}>
        {children}
        {showCollapsedButton && (
          <Styled.CollapsedButton onClick={() => setIsCollapsed(!isCollapsed)} isCollapsed={isCollapsed}>
            <DrawerItemIcon>
              {isCollapsed
                ? (props: IconProps) => <ArrowSidebarRightOutline {...props} size={iconsSize} />
                : (props: IconProps) => <ArrowSidebarLeftOutline {...props} size={iconsSize} />}
            </DrawerItemIcon>
            <DrawerItemText>{collapseButtonLabel}</DrawerItemText>
          </Styled.CollapsedButton>
        )}
      </Styled.Drawer>
    );

    const renderBackdrop = (): JSX.Element | null => (!hideBackdrop && open ? <Backdrop onClick={onClose} /> : null);

    const temproryDrawer = (): JSX.Element =>
      disablePortal ? (
        <Styled.TemproryDrawer style={{ ...temproryDrawerStyles }} open={open}>
          {renderBackdrop()}
          {renderDrawer(false)}
        </Styled.TemproryDrawer>
      ) : (
        createPortal(
          <Styled.TemproryDrawer style={{ ...temproryDrawerStyles }} open={open}>
            {renderBackdrop()}
            {renderDrawer(false)}
          </Styled.TemproryDrawer>,
          target
        )
      );

    const persistentDrawer = (): JSX.Element => (
      <Styled.PersistentDrawer style={{ ...persistentDrawerStyles }}>{renderDrawer(true)}</Styled.PersistentDrawer>
    );

    // using two conontex provider is a temprory fix until we support javascript media query
    // to be able to hide/show depening on the breakpoint
    return (
      <>
        <DrawerContext.Provider
          value={{
            isCollapsed,
            size: DrawerIconsSize,
          }}
        >
          {persistentDrawer()}
        </DrawerContext.Provider>
        <DrawerContext.Provider
          value={{
            isCollapsed: false,
            size: DrawerIconsSize,
          }}
        >
          {temproryDrawer()}
        </DrawerContext.Provider>
      </>
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
  onCollapse: PT.func,
  children: PT.node.isRequired,
  top: PT.number,
  iconsSize: PT.number,
  open: PT.bool,
  hideBackdrop: PT.bool,
  collapsed: PT.bool,
  disablePortal: PT.bool,
  collapseButtonLabel: PT.string,
  persistentDrawerStyles: PT.object,
  temproryDrawerStyles: PT.object,
};

Drawer.propTypes = propTypes;

export default Drawer;
