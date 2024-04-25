import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import NoResult from '@scaleflex/icons/no-result';
import { AutocompleteValueType } from '@scaleflex/ui/core/autocomplete/autocomplete.props';

import _Autocomplete, { AutocompleteProps } from '../../src/core/autocomplete';
import { InputSize } from '../../src/utils/types';
import { StoryGroup } from './types';
import AiIcon from './icons/ai-icon';
import Styled from './autocomplete.story.styled';

export const Autocomplete = _Autocomplete;

export default {
  title: `${StoryGroup.Inputs}/Autocomplete`,
  component: Autocomplete,
  excludeStories: ['Autocomplete'],
  argTypes: {
    scroll: {
      description: 'Prop directly change scroll design',
    },
  },
} as Meta;

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
const BasicTemplate: Story<AutocompleteProps> = ({ ...args }) => {
  const [value, setValue] = useState<AutocompleteValueType>(args.multiple ? [] : '');

  return (
    <Styled.Container fullWidth={Boolean(args.fullWidth)}>
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

export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };

const AutocompleteObjectsTemplate: Story<AutocompleteProps> = ({ ...args }) => {
  const [value, setValue] = useState<AutocompleteValueType>(args.multiple ? [] : '');

  return (
    <Styled.Container fullWidth={Boolean(args.fullWidth)}>
      <Autocomplete
        {...args}
        value={value}
        options={args.options}
        onChange={setValue}
        getOptionValue={(option: any) => option?.uuid}
        getOptionLabel={(option: any) => option?.name}
        getOptionDisabled={(option: any) => option.uuid === defaultArgs.options[3]}
      />
    </Styled.Container>
  );
};

const options = [
  { uuid: '1_scaleflex', name: 'sfx1' },
  { uuid: '2_scaleflex', name: 'sfx2' },
  { uuid: '3_scaleflex', name: 'sfx3' },
  { uuid: '4_scaleflex', name: 'sfx4' },
  { uuid: '5_scaleflex', name: 'sfx5' },
  { uuid: '6_scaleflex', name: 'sfx6' },
  { uuid: '7_scaleflex', name: 'sfx7' },
];

export const AutocompleteObjects = AutocompleteObjectsTemplate.bind({});
AutocompleteObjects.args = {
  ...defaultArgs,
  options,
};

const WithIconsTemplate: Story<AutocompleteProps> = ({ ...args }) => {
  const [value, setValue] = useState<AutocompleteValueType>(args.multiple ? [] : '');

  return (
    <Styled.Container fullWidth={Boolean(args.fullWidth)}>
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
  { uuid: 'en', name: 'English', endIcon: <AiIcon />, favorite: true },
  { uuid: 'fr', name: 'French', endIcon: <AiIcon />, favorite: true },
  { uuid: 'de', name: 'German', favorite: true },
  { uuid: 'it', name: 'Italian' },
  { uuid: 'es', name: 'Spanish', disabled: true },
  { uuid: 'ua', name: 'Ukrainian', endIcon: <AiIcon /> },
];

export const WithIcons = WithIconsTemplate.bind({});
WithIcons.args = {
  ...defaultArgs,
  label: 'Languages',
  placeholder: 'Select language',
  options: optionsWithIconsAndFavorite,
};

export const WithGroups = WithIconsTemplate.bind({});
WithGroups.args = {
  ...WithIcons.args,
  groupBy: (option: any) => option?.favorite,
};
