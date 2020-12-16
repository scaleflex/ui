import React from 'react';
import type { Meta, Story } from '@storybook/react';
// import CountryIcon from '@sfx-ui/icons/country';
// import DownloadIcon from '@sfx-ui/icons/download';
import _ModalTitle, { ModalTitleProps } from '../src/modal-title';
// import { Size } from '../src/modal-title/types';
import { StoryGroup } from './types';

export const ModalTitle = _ModalTitle;

export default {
  title: `${StoryGroup.DataDisplay}/ModalTitle`,
  component: ModalTitle,
  excludeStories: ['ModalTitle'],
} as Meta;

const defaultArgs = {
  // size: Size.Md,
  // children: 'France',
  // active: false,
  primary: 'Delete file?'
};

const BasicTemplate: Story<ModalTitleProps> = ({
  ...args
}) => (
  <ModalTitle {...args} />
);

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };

// // Active
// export const Active = BasicTemplate.bind({});
// Active.args = {
//   ...defaultArgs,
//   active: true,
// };

// const WithIconTemplate: Story<ModalTitleProps> = ({
//   children, ...args
// }) => (
//   <ModalTitle {...args}>
//     <ModalTitleIcon>
//       <CountryIcon size={args.size === 'md' ? 16 : 12} />
//     </ModalTitleIcon>

//     <ModalTitleLabel>{children}</ModalTitleLabel>
//   </ModalTitle>
// );

// // WithIcon
// export const WithIcon = WithIconTemplate.bind({});
// WithIcon.args = { ...defaultArgs };

// const WithIconAndActionsTemplate: Story<ModalTitleProps> = ({
//   children, ...args
// }) => (
//   <ModalTitle {...args}>
//     <ModalTitleIcon>
//       <CountryIcon size={args.size === 'md' ? 16 : 12} />
//     </ModalTitleIcon>

//     <ModalTitleLabel>{children}</ModalTitleLabel>

//     <ModalTitleActions>
//       <DownloadIcon size={args.size === 'md' ? 15 : 12} />
//     </ModalTitleActions>
//   </ModalTitle>
// );

// // WithIconAndActions
// export const WithIconAndActions = WithIconAndActionsTemplate.bind({});
// WithIconAndActions.args = { ...defaultArgs };
