import type { TagType, SuggestionsFilterFnType } from './tag-field.props';

const tagsSuggestionsFilter = <SuggestionsFilterFnType>((suggestedTags, userInput, getTagLabel) => {
  if (!userInput) {
    return [];
  }

  let suggestions = [...suggestedTags];

  if (userInput) {
    const regexp = new RegExp(userInput, 'i');

    suggestions = suggestions.filter((suggestion: TagType) => regexp.test(getTagLabel(suggestion)));
  }

  return suggestions;
});

export { tagsSuggestionsFilter };
