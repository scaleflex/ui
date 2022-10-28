import React, { useState, useEffect } from 'react';
import type { Meta, Story } from '@storybook/react';
import _SnackbarProvider, { useSnackbar, SnackbarProviderProps } from '@scaleflex/ui/snackbar';
import { StoryGroup } from './types';
import SnackbarProvider from '../../src/snackbar/snackbar-provider';

export const Snackbar = _SnackbarProvider;

export default {
  title: `${StoryGroup.Hooks}/Snackbar`,
  component: Snackbar,
  excludeStories: ['Snackbar'],

  argTypes: {
    children: {
      description: 'Menu contents, normally `MenuItem`s.',
    },
  },
} as Meta;

const defaultArgs = {
  message: 'goooooo',
};

const TestTemplate: Story<SnackbarProviderProps> = () => {
  const { showMessage } = useSnackbar();
  console.log(showMessage, 'showMessage');

  return <div>{showMessage}</div>;
};

// Test Template
export const Test = TestTemplate.bind({});
Test.args = { ...defaultArgs };

const BasicTemplate: Story<SnackbarProviderProps> = ({ message, children, ...args }) => {
  return (
    <SnackbarProvider message={message} status="success" {...args}>
     TestTemplate
    </SnackbarProvider>
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
