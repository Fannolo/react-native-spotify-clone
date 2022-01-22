const getCollapsedValues = (input: number): string => {
  if (input >= 1000000) return `${(input / 1000000).toFixed(1)}M`;
  if (input >= 1000) return `${(input / 1000).toFixed(1)}K`;
  return `${input}`;
};

export default getCollapsedValues;
