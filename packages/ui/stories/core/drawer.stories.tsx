import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import styled, { css } from 'styled-components';
import Hub from '@scaleflex/icons/hub';
import Assets from '@scaleflex/icons/assets';
import Menu from '@scaleflex/icons/menu';
import { IconProps } from '@scaleflex/icons/icon.props';
import Share from '@scaleflex/icons/share';
import Folders from '@scaleflex/icons/folders';
import Collections from '@scaleflex/icons/collections';
import Products from '@scaleflex/icons/products';
import Heart from '@scaleflex/icons/heart';
import Airbox from '@scaleflex/icons/airbox';
import Remove from '@scaleflex/icons/remove';
import Label from '@scaleflex/icons/label';
import QuestionMark from '@scaleflex/icons/question-mark';

import { ButtonColor, ButtonSize } from '../../src/utils/types';
import Drawer, {
  DrawerList,
  DrawerItem,
  DrawerItemButton,
  DrawerItemText,
  DrawerItemIcon,
  DrawerHeader,
  DrawerFooter,
  DrawerBody,
  DrawerAccordion,
} from '../../src/core/drawer';
import Divder from '../../src/core/divider';
import IconButton from '../../src/core/icon-button';
import { FontVariant } from '../../src/utils/types/typography';
import { Color } from '../../src/utils/types/palette';

const meta: Meta<typeof Drawer> = {
  title: 'Navigation/Drawer',
  component: Drawer,
  excludeStories: ['Drawer'],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

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

const libraryItems = [
  {
    // title: 'Hub',
    icon: (props: IconProps) => <Hub {...props} />,
  },
  {
    // title: 'Assets',
    icon: (props: IconProps) => <Assets {...props} />,
  },
  {
    // title: 'Folders',
    icon: (props: IconProps) => <Folders {...props} />,
    selected: true,
  },
  {
    // title: 'Collections',
    icon: (props: IconProps) => <Collections {...props} />,
  },
  {
    // title: 'Labels',
    icon: (props: IconProps) => <Label {...props} />,
  },
  {
    // title: 'Products',
    icon: (props: IconProps) => <Products {...props} />,
  },
  {
    // title: 'My favorites ',
    icon: (props: IconProps) => <Heart {...props} />,
  },
];

const analyticsItems = [
  {
    // title: 'Sharebox',
    icon: (props: IconProps) => <Share {...props} />,
  },
  {
    // title: 'Airbox',
    icon: (props: IconProps) => <Airbox {...props} />,
  },
  {
    // title: 'Trash',
    icon: (props: IconProps) => <Remove {...props} />,
  },
];

const BasicTemplate = ({ ...args }): JSX.Element => {
  const [open, setOpen] = useState(true);
  const [analyticsOpen, setAnalyticsOpen] = useState(false);
  const [isDrawerOpened, setIsDrawerOpened] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onCollapse = (state: boolean): void => {
    setIsCollapsed(state);
  };

  return (
    <div>
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
      <Drawer
        {...args}
        open={isDrawerOpened}
        collapsed={isCollapsed}
        onClose={() => setIsDrawerOpened(false)}
        onCollapse={onCollapse}
        style={{
          marginTop: '46px',
        }}
      >
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
            <DrawerItem>
              <DrawerItemText font={FontVariant.LabelLargeEmphasis}>Home</DrawerItemText>
            </DrawerItem>
            <DrawerAccordion label="Library" fullWidth expanded={open} onChange={(value) => setOpen(value)} selected>
              {libraryItems.map((item) => (
                <DrawerItemButton key={item.title} selected={item.selected}>
                  <DrawerItemIcon>{item.icon}</DrawerItemIcon>
                  <DrawerItemText>{item.title}</DrawerItemText>
                </DrawerItemButton>
              ))}
            </DrawerAccordion>
            {isCollapsed && <Divder style={{ margin: '8px 0px' }} />}
            <DrawerAccordion
              label="Analytics"
              fullWidth
              expanded={analyticsOpen}
              onChange={(value) => setAnalyticsOpen(value)}
            >
              {analyticsItems.map((item) => (
                <DrawerItemButton key={item.title}>
                  <DrawerItemIcon>{item.icon}</DrawerItemIcon>
                  <DrawerItemText>{item.title}</DrawerItemText>
                </DrawerItemButton>
              ))}
            </DrawerAccordion>
          </DrawerList>
        </DrawerBody>
        <DrawerFooter>
          <DrawerItemButton>
            <DrawerItemIcon>{(props: IconProps) => <QuestionMark {...props} />}</DrawerItemIcon>
            <DrawerItemText>Help</DrawerItemText>
          </DrawerItemButton>
        </DrawerFooter>
      </Drawer>
    </div>
  );
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
