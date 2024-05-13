import React, { useState, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import PT from 'prop-types';
import type { IconProps } from '@scaleflex/icons/icon.props';
import ArrowSidebarLeftOutline from '@scaleflex/icons/arrow-sidebar-left-outline';
import ArrowSidebarRightOutline from '@scaleflex/icons/arrow-sidebar-right-outline';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import { useMediaQuery, useTheme } from '../../theme/hooks';
import type { DrawerProps } from './drawer.props';
import DrawerItemText from './drawer-item-text-component';
import DrawerItemIcon from './drawer-item-icon.component';
import DrawerContext from './drawer.context';
import Backdrop from '../backdrop';
import Styled from './drawer.styles';
import { Variant } from './types';

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
      variant = Variant.Auto,
      onClose,
      onCollapse,
      onCollapseClick,
      ...rest
    },
    ref
  ): JSX.Element => {
    const theme = useTheme();
    const matchDownXl = useMediaQuery(theme.breakpoints.down('xl'));
    const [isCollapsed, setIsCollapsed] = useState(collapsed);

    const temporaryDrawerRef = useRef<HTMLDivElement>(null);

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

    const handleCollapse = (): void => {
      const newCollapseState = !isCollapsed;
      setIsCollapsed(newCollapseState);
      if (onCollapseClick) {
        onCollapseClick(newCollapseState);
      }
    };

    const handleClose = (): void => {
      if (typeof onClose === 'function') {
        onClose();
      }
    };

    const keyListener = (ev: KeyboardEvent): void => {
      let isTemporaryDrawer = false;
      if (temporaryDrawerRef?.current) {
        isTemporaryDrawer = temporaryDrawerRef?.current?.offsetWidth > 0;
      }

      if (ev.key === 'Escape' && isTemporaryDrawer) {
        handleClose();
      }
    };

    useEffect(() => {
      document.addEventListener('keydown', keyListener);

      return () => document.removeEventListener('keydown', keyListener);
    }, []);

    const renderDrawer = (showCollapsedButton: boolean): JSX.Element => (
      <Styled.Drawer open={open} top={top} {...rest} isCollapsed={showCollapsedButton ? isCollapsed : false} ref={ref}>
        {children}
        {showCollapsedButton && (
          <Styled.CollapsedButton onClick={handleCollapse} isCollapsed={isCollapsed}>
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

    const temporaryDrawer = (): JSX.Element =>
      disablePortal ? (
        <Styled.TemporaryDrawer ref={temporaryDrawerRef} style={{ ...temproryDrawerStyles }} open={open}>
          {renderBackdrop()}
          {renderDrawer(false)}
        </Styled.TemporaryDrawer>
      ) : (
        createPortal(
          <Styled.TemporaryDrawer ref={temporaryDrawerRef} style={{ ...temproryDrawerStyles }} open={open}>
            {renderBackdrop()}
            {renderDrawer(false)}
          </Styled.TemporaryDrawer>,
          target
        )
      );

    const persistentDrawer = (): JSX.Element => (
      <Styled.PersistentDrawer style={{ ...persistentDrawerStyles }}>{renderDrawer(true)}</Styled.PersistentDrawer>
    );

    const getDrawerVariant = (): JSX.Element => {
      switch (variant) {
        case Variant.Auto:
          return matchDownXl ? temporaryDrawer() : persistentDrawer();
        case Variant.Temporary:
          return temporaryDrawer();
        case Variant.Persistent:
          return persistentDrawer();
        default:
          return matchDownXl ? temporaryDrawer() : persistentDrawer();
      }
    };

    return (
      <DrawerContext.Provider
        value={{
          isCollapsed: !matchDownXl ? isCollapsed : false,
          size: DrawerIconsSize,
        }}
      >
        {getDrawerVariant()}
      </DrawerContext.Provider>
    );
  }
);

export const defaultProps = {
  open: false,
  hideBackdrop: false,
  iconsSize: 20,
  variant: Variant.Auto,
};

Drawer.defaultProps = defaultProps;

export const propTypes = {
  onClose: PT.func.isRequired,
  onCollapse: PT.func,
  onCollapseClick: PT.func,
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
  variant: PT.oneOf(objectValues(Variant)),
};

Drawer.propTypes = propTypes;

export default Drawer;
