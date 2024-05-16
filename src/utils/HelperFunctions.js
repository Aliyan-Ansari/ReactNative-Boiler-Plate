export const excerpt = (text, length) => {
  return text.length > length ? text.substring(0, length) + '...' : text;
};
