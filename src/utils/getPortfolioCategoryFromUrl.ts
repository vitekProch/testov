export const getPortfolioCategoryFromUrl = (url: unknown) => {
  if (typeof url !== 'string') return null;

  const regex = /portfolio\/([^/\d]+)\/?$/;

  const match = url.match(regex);
  if (!match || match.length < 2) return null;
  return match[1];
};
