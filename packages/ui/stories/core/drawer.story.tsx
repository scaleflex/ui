import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import styled, { css } from 'styled-components';
import Hub from '@scaleflex/icons/hub';
import Assets from '@scaleflex/icons/assets';
import Menu from '@scaleflex/icons/menu';
import { IconProps } from '@scaleflex/icons/icon.props';
import Share from '@scaleflex/icons/share';

import { ButtonColor, ButtonSize } from '../../src/utils/types';
import _Drawer, {
  DrawerList,
  DrawerItem,
  DrawerProps,
  DrawerItemButton,
  DrawerItemText,
  DrawerItemIcon,
  DrawerHeader,
  DrawerFooter,
  DrawerBody,
  DrawerAccordion,
} from '../../src/core/drawer';
import Divider from '../../src/core/divider';
import IconButton from '../../src/core/icon-button';
import { StoryGroup } from './types';
import { FontVariant } from '../../src/utils/types/typography';
import { Color } from '../../src/utils/types/palette';

export const Drawer = _Drawer;

export default {
  title: `${StoryGroup.Navigation}/Drawer`,
  component: Drawer,
  excludeStories: ['Drawer'],
} as Meta;

const defaultArgs = {
  collpased: false,
  top: 64,
};

const StyledHeader = styled.div(
  ({ theme }) => css`
    background-color: ${theme.palette[Color.BackgroundStateless]};
    border-bottom: 1px solid ${theme.palette[Color.BordersSecondary]};
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    top: 0px;
    left: auto;
    right: 0px;
    height: 64px;
    font-size: 31px;
  `
);

const BasicTemplate: Story<DrawerProps> = ({ ...args }) => {
  const [open, setOpen] = useState(true);
  const [isDrawerOpened, setIsDrawerOpened] = useState(true);

  return (
    <>
      <StyledHeader>
        <IconButton
          style={{
            border: 'none',
            marginLeft: '2px',
            marginRight: '8px',
          }}
          color={ButtonColor.Basic}
          size={ButtonSize.Md}
          onClick={() => setIsDrawerOpened(!isDrawerOpened)}
        >
          {(props: IconProps) => <Menu {...props} />}
        </IconButton>
        Drawer
      </StyledHeader>
      <Drawer {...args} open={isDrawerOpened} onClose={() => setIsDrawerOpened(false)}>
        <DrawerHeader>
          <IconButton
            style={{
              border: 'none',
              marginLeft: '2px',
              marginRight: '8px',
            }}
            color={ButtonColor.Basic}
            size={ButtonSize.Md}
            onClick={() => setIsDrawerOpened(false)}
          >
            {(props: IconProps) => <Menu {...props} />}
          </IconButton>
          <DrawerItemText>Logo</DrawerItemText>
        </DrawerHeader>
        <DrawerBody>
          <DrawerList>
            <DrawerItem selected>
              <DrawerItemText font={FontVariant.LabelLargeEmphasis}>Home</DrawerItemText>
            </DrawerItem>

            <DrawerAccordion
              label="Library"
              fullWidth
              detailStyle={{ padding: '0 16px' }}
              expanded={open}
              onChange={(value) => setOpen(value)}
              selected
            >
              <DrawerItemButton selected>
                <DrawerItemIcon>{(props: IconProps) => <Hub {...props} />}</DrawerItemIcon>
                <DrawerItemText>Hub</DrawerItemText>
              </DrawerItemButton>

              <DrawerItemButton>
                <DrawerItemIcon>{(props: IconProps) => <Assets {...props} />}</DrawerItemIcon>
                <DrawerItemText>Assets</DrawerItemText>
              </DrawerItemButton>
              <Divider
                style={{
                  margin: '8px 0',
                }}
              />
              <DrawerItemButton>
                <DrawerItemIcon>{(props: IconProps) => <Share {...props} />}</DrawerItemIcon>
                <DrawerItemText>Sharebox</DrawerItemText>
              </DrawerItemButton>
            </DrawerAccordion>
          </DrawerList>
        </DrawerBody>
        <DrawerFooter>
          <DrawerItemButton>
            <DrawerItemIcon>{(props: IconProps) => <Assets {...props} />}</DrawerItemIcon>
            <DrawerItemText>Assets</DrawerItemText>
          </DrawerItemButton>
        </DrawerFooter>
      </Drawer>
    </>
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
