import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NoResult, Ai } from '@scaleflex/icons'

import Autocomplete from '../../src/core/autocomplete';
import { AutocompleteValueType } from '../../src/core/autocomplete/autocomplete.props';
import { InputSize } from '../../src/utils/types';
import Styled from './autocomplete.stories.styled';

const meta: Meta<typeof Autocomplete> = {
  title: 'Inputs/Autocomplete',
  component: Autocomplete,
  excludeStories: ['Autocomplete'],
  argTypes: {
    scroll: {
      description: 'Prop directly change scroll design',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

const defaultArgs = {
  placeholder: 'placeholder',
  label: 'Label',
  readOnly: false,
  hint: 'Some hint goes here',
  size: InputSize.Md,
  options: [
    'item1',
    'item2',
    'item3',
    'item4',
    'item5',
    'item6',
    'item7',
    'item8',
    'item9',
    'item10',
    'item11',
    'item12',
  ],
  multiple: false,
  fullWidth: false,
};

const BasicTemplate = ({ ...args }): JSX.Element => {
  const [value, setValue] = useState<AutocompleteValueType>(args.multiple ? [] : '');

  return (
    <Styled.Container $fullWidth={Boolean(args.fullWidth)}>
      <Autocomplete
        {...args}
        value={value}
        options={args.options}
        getOptionValue={(option: any) => option}
        getOptionLabel={(option: any) => option}
        getOptionDisabled={(option: any) => option === defaultArgs.options[3]}
        onChange={setValue}
      />
    </Styled.Container>
  );
};

const AutocompleteObjectsTemplate = ({ ...args }): JSX.Element => {
  const [value, setValue] = useState<AutocompleteValueType>(args.multiple ? [] : '');

  return (
    <Autocomplete
      {...args}
      value={value}
      options={args.options}
      onChange={setValue}
      getOptionValue={(option: any) => option?.uuid}
      getOptionLabel={(option: any) => option?.name}
      getOptionDisabled={(option: any) => option.uuid === defaultArgs.options[3]}
    />
  );
};

const WithIconsTemplate = ({ ...args }): JSX.Element => {
  const [value, setValue] = useState<AutocompleteValueType>(args.multiple ? [] : '');

  return (
    <Styled.Container $fullWidth={Boolean(args.fullWidth)}>
      <Autocomplete
        {...args}
        value={value}
        options={args.options}
        onChange={setValue}
        getOptionValue={(option: any) => option?.uuid}
        getOptionLabel={(option: any) => option?.name}
        getOptionDisabled={(option: any) => option?.disabled}
        renderSearchEmptyMenuItem={() => (
          <Styled.NoSearchResultsContainer>
            <NoResult width={150} size={60} />
            <div>Try another search.</div>
          </Styled.NoSearchResultsContainer>
        )}
        renderLabelIconEnd={({ option }: any) => option?.endIcon}
        renderOptionLabel={(option: any) => (
          <Styled.OptionLabel>
            {option.name}
            <Styled.OptionLabelIconWrapper>{option?.endIcon}</Styled.OptionLabelIconWrapper>
          </Styled.OptionLabel>
        )}
      />
    </Styled.Container>
  );
};

const optionsWithIconsAndFavorite = [
  { uuid: 'en', name: 'English', endIcon: <Ai />, favorite: true },
  { uuid: 'fr', name: 'French', endIcon: <Ai />, favorite: true },
  { uuid: 'de', name: 'German', favorite: true },
  { uuid: 'it', name: 'Italian' },
  { uuid: 'es', name: 'Spanish', disabled: true },
  { uuid: 'ua', name: 'Ukrainian', endIcon: <Ai /> },
];

const options = [
  { uuid: '1_scaleflex', name: 'sfx1' },
  { uuid: '2_scaleflex', name: 'sfx2' },
  { uuid: '3_scaleflex', name: 'sfx3' },
  { uuid: '4_scaleflex', name: 'sfx4' },
  { uuid: '5_scaleflex', name: 'sfx5' },
  { uuid: '6_scaleflex', name: 'sfx6' },
  { uuid: '7_scaleflex', name: 'sfx7' },
];

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};

export const AutocompleteObjects: Story = {
  args: {
    ...defaultArgs,
    options,
  },
  render: (args) => <AutocompleteObjectsTemplate {...args} />,
};

export const WithIcons: Story = {
  args: { ...defaultArgs, label: 'Languages', placeholder: 'Select language', options: optionsWithIconsAndFavorite },
  render: (args) => <WithIconsTemplate {...args} />,
};

export const WithGroups: Story = {
  args: { ...WithIcons.args, groupBy: (option: any) => option?.favorite },
  render: (args) => <WithIconsTemplate {...args} />,
};
