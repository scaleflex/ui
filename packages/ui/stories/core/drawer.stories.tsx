import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
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
import Divider from '../../src/core/divider';
import IconButton from '../../src/core/icon-button';
import { FontVariant } from '../../src/utils/types/typography';
import DrawerDocsTemplate from '../docs/drawer.mdx';
import Button from '../../src/core/button';
import { Variant } from '../../src/core/drawer/types';

const meta: Meta<typeof Drawer> = {
  title: 'Navigation/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DrawerDocsTemplate,
      subtitle:
        'The navigation drawers (or "sidebars") provide ergonomic access to destinations in a site or app functionality such as switching accounts.',
    },
  },
  argTypes: {
    variant: {
      description: 'The variant of the drawer. `auto`, `temporary`, `persistent`',
      options: Object.values(Variant),
      control: {
        type: 'select',
      },
    },
    open: {
      description: 'if true the drawer is open.',
    },
    collapsed: {
      description: 'if true, the drawer will show as mini drawer.',
    },
    hideScroll: {
      description: 'if true, the window scroll is hidden.',
    },
    top: {
      description: 'the top position of the drawer.',
    },
    onCollapse: {
      description: 'Callback function fired when the drawer is collapsed.',
    },
    onCollapseClick: {
      description: 'Callback function fired when collapse button is clicked.',
    },
    onClose: {
      description: 'Callback function fired when the drawer is closed.',
    },
    collapseButtonLabel: {
      description: 'The label of the collapse button.',
    },
    collapseButtonStyle: {
      description: 'The style of the collapse button.',
    },
    disablePortal: {
      description: 'If true, the portal is disabled.',
    },
    persistentDrawerStyles: {
      description: 'The style of the persistent drawer.',
    },
    temproryDrawerStyles: {
      description: 'The style of the temporary drawer.',
    },
    iconsSize: {
      description: 'The size of the icons in the drawer.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const defaultArgs = {
  collpased: false,
  top: 64,
};

const libraryItems = [
  {
    title: 'Hub',
    icon: (props: IconProps) => <Hub {...props} />,
  },
  {
    title: 'Assets',
    icon: (props: IconProps) => <Assets {...props} />,
  },
  {
    title: 'Folders',
    icon: (props: IconProps) => <Folders {...props} />,
    selected: true,
  },
  {
    title: 'Collections',
    icon: (props: IconProps) => <Collections {...props} />,
  },
  {
    title: 'Labels',
    icon: (props: IconProps) => <Label {...props} />,
  },
  {
    title: 'Products',
    icon: (props: IconProps) => <Products {...props} />,
  },
  {
    title: 'My favorites ',
    icon: (props: IconProps) => <Heart {...props} />,
  },
];

const analyticsItems = [
  {
    title: 'Sharebox',
    icon: (props: IconProps) => <Share {...props} />,
  },
  {
    title: 'Airbox',
    icon: (props: IconProps) => <Airbox {...props} />,
  },
  {
    title: 'Trash',
    icon: (props: IconProps) => <Remove {...props} />,
  },
];

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => {
    const [open, setOpen] = useState(false);
    const [analyticsOpen, setAnalyticsOpen] = useState(false);
    const [isDrawerOpened, setIsDrawerOpened] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const onCollapse = (state: boolean): void => {
      setIsCollapsed(state);
    };

    return (
      <div>
        <Button onClick={() => setIsDrawerOpened(!isDrawerOpened)}>Toggle Drawer</Button>

        <Drawer
          {...args}
          open={isDrawerOpened}
          collapsed={isCollapsed}
          onClose={() => setIsDrawerOpened(false)}
          onCollapse={onCollapse}
          hideScroll={true}
          variant={Variant.Temporary}
          style={{
            height: '100%',
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
              {isCollapsed && <Divider style={{ margin: '8px 0px' }} />}
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
  },
};
