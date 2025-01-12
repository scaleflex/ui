import React, { useState } from 'react';
import styled from 'styled-components';
import type { Meta, StoryObj } from '@storybook/react';
import { NoResult, Ai } from '@scaleflex/icons';

import Autocomplete from '../../src/core/autocomplete';
import { AutocompleteValueType } from '../../src/core/autocomplete/autocomplete.props';
import { InputSize } from '../../src/utils/types';
import AutocompleteDocsTemplate from '../docs/autocomplete.mdx';

const meta: Meta<typeof Autocomplete> = {
  title: 'Inputs/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: AutocompleteDocsTemplate,
      subtitle: 'The autocomplete is a normal text input enhanced by a panel of suggested options.',
    },
  },
  argTypes: {
    placeholder: {
      description: 'The placeholder text to display in the input.',
    },
    size: {
      description: 'The size of the input.',
      options: Object.values(InputSize),
      control: {
        type: 'select',
      },
    },
    fullWidth: {
      description: 'if true, the input will take the full width of its container.',
    },
    error: {
      description: 'if true, the input will have an error state.',
    },
    disabled: {
      description: 'if true, the input will be disabled.',
    },
    readOnly: {
      description: 'if true, the input will be read only.',
    },
    value: {
      description: 'The value of the input.',
    },
    InputProps: {
      description:
        'The props of the input component. Please refer to the [Input](https://scaleflex.github.io/ui/?path=/docs/inputs-input--docs#api) component for more information.',
    },
    MenuProps: {
      description:
        'The props of the menu component. Please refer to the [Menu](https://scaleflex.github.io/ui/?path=/docs/navigation-menu--docs#api) component for more information.',
    },
    LabelProps: {
      description:
        'The props of the label component. Please refer to the [Label](https://scaleflex.github.io/ui/?path=/docs/datadisplay-label--docs#api) component for more information.',
    },
    hint: {
      description: 'The hint of the autocomplete.',
    },
    label: {
      description: 'The label of the autocomplete.',
    },
    clearAllButtonLabel: {
      description: 'The label of the clear all button.',
    },
    selectAllButtonLabel: {
      description: 'The label of the select all button.',
    },
    multiple: {
      description: 'If true, the autocomplete will allow multiple selections.',
    },
    disableTextEllipse: {
      description: 'If true, the text in label will not be ellipsed.',
    },
    closeMenuAfterSelection: {
      description: 'If true, the menu will close after option is selected. used only when multiple is true.',
    },
    focusOnOpen: {
      description: 'If true, the input will be focused on mount.',
    },
    maxMenuHeight: {
      description: 'The maximum height of the menu.',
    },
    hideArrow: {
      description: 'If true, the arrow icon will be hidden.',
    },
    onChange: {
      description: 'The callback function that is called when the value of the input changes.',
    },
    onOpen: {
      description: 'The callback function that is called when the menu is opened.',
    },
    onClose: {
      description: 'The callback function that is called when the menu is closed.',
    },
    onSelectAll: {
      description: 'The callback function that is called when the select all button is clicked.',
    },
    onClearAll: {
      description: 'The callback function that is called when the clear all button is clicked.',
    },
    options: {
      description: 'The options of the autocomplete.',
    },
    getOptionValue: {
      description: 'A function that returns the value of the option.',
    },
    getOptionLabel: {
      description: 'A function that returns the label of the option.',
    },
    getOptionDisabled: {
      description: 'A function that returns the disabled state of the option.',
    },
    groupBy: {
      description: 'A function that can be used to group options by a specific filter.',
    },
    submitOnBlur: {
      description: 'If true, the input will be submitted on blur.',
    },
    renderGroup: {
      description: 'A function that can be used to render a group of options instead of the default.',
    },
    renderSearchEmptyMenuItem: {
      description: 'A function that can be used to render a custom empty menu item when no options are found.',
    },
    renderTag: {
      description: 'A function that can be used to render a custom tag instead of the default.',
    },
    renderOptionLabel: {
      description: 'A function that can be used to render a custom option label instead of the default.',
    },
    renderLabelIconEnd: {
      description: 'A function that can be used to render a custom icon at the end of the label.',
    },
    renderMenuItem: {
      description: 'A function that can be used to render a custom menu item instead of the default.',
    },
    sortAlphabetically: {
      description: 'If true, the options will be sorted alphabetically.',
    },
    showClearIcon: {
      description: 'If true, the clear icon will be shown.',
    },
    noOptionsText: {
      description: 'The text to display when no options are found.',
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

const Container = styled.div<{ $fullWidth: boolean }>`
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : '300px')};
`;

const NoSearchResultsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin: 40px 0;
  color: #768a9f;

  svg {
    color: #dfe7ed;
  }
`;

const OptionLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const OptionLabelIconWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
`;

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
  render: (args) => {
    const [value, setValue] = useState<AutocompleteValueType>(args.multiple ? [] : '');

    return (
      <Container $fullWidth={Boolean(args.fullWidth)}>
        <Autocomplete
          {...args}
          value={value}
          options={args.options}
          getOptionValue={(option: any) => option}
          getOptionLabel={(option: any) => option}
          getOptionDisabled={(option: any) => option === defaultArgs.options[3]}
          onChange={setValue}
        />
      </Container>
    );
  },
};

export const AutocompleteObjects: Story = {
  args: {
    ...defaultArgs,
    options,
  },
  render: (args) => {
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
  },
};

export const GroupsAndIcons: Story = {
  args: {
    ...defaultArgs,
    label: 'Languages',
    placeholder: 'Select language',
    options: optionsWithIconsAndFavorite,
    groupBy: (option: any) => option?.favorite,
  },
  render: (args) => {
    const [value, setValue] = useState<AutocompleteValueType>(args.multiple ? [] : '');

    return (
      <Container $fullWidth={Boolean(args.fullWidth)}>
        <Autocomplete
          {...args}
          value={value}
          options={args.options}
          onChange={setValue}
          getOptionValue={(option: any) => option?.uuid}
          getOptionLabel={(option: any) => option?.name}
          getOptionDisabled={(option: any) => option?.disabled}
          renderSearchEmptyMenuItem={() => (
            <NoSearchResultsContainer>
              <NoResult width={150} size={60} />
              <div>Try another search.</div>
            </NoSearchResultsContainer>
          )}
          renderLabelIconEnd={({ option }: any) => option?.endIcon}
          renderOptionLabel={(option: any) => (
            <OptionLabel>
              {option.name}
              <OptionLabelIconWrapper>{option?.endIcon}</OptionLabelIconWrapper>
            </OptionLabel>
          )}
        />
      </Container>
    );
  },
};

export const Multiple: Story = {
  args: { ...defaultArgs, multiple: true },
  render: (args) => {
    const [value, setValue] = useState<AutocompleteValueType>(args.multiple ? [] : '');

    return (
      <Container $fullWidth={Boolean(args.fullWidth)}>
        <Autocomplete
          {...args}
          value={value}
          options={args.options}
          getOptionValue={(option: any) => option}
          getOptionLabel={(option: any) => option}
          getOptionDisabled={(option: any) => option === defaultArgs.options[3]}
          onChange={setValue}
        />
      </Container>
    );
  },
};
