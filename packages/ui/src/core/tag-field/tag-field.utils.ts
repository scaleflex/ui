import type { TagType } from './tag-field.props';

const tagsSuggestionsFilter = (
  suggestedTags: TagType[] = [],
  userInput = '',
  getTagLabel: (tag: TagType) => string
): TagType[] => {
  if (!userInput) {
    return [];
  }

  let suggestions = [...suggestedTags];

  if (userInput) {
    const regexp = new RegExp(userInput, 'i');

    suggestions = suggestions.filter((suggestion: TagType) => regexp.test(getTagLabel(suggestion)));
  }

  return suggestions;
};

export { tagsSuggestionsFilter };
