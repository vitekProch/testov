import { getPortfolioCategoryFromUrl } from '@/utils/getPortfolioCategoryFromUrl';

describe('getPortfolioCategoryFromUrl', () => {
  it('should return null if url is not a string', () => {
    const url = 123; // not a string
    const result = getPortfolioCategoryFromUrl(url);
    expect(result).toBeNull();
  });

  it('should return null if url does not match expected format', () => {
    const url = '/portfolio/1234'; // incorrect format
    const result = getPortfolioCategoryFromUrl(url);
    expect(result).toBeNull();
  });

  it('should return correct category "abc" for "/portfolio/abc/"', () => {
    const url = '/portfolio/abc/';
    const result = getPortfolioCategoryFromUrl(url);
    expect(result).toEqual('abc');
  });

  it('should return correct category "xyz" for "/portfolio/xyz"', () => {
    const url = '/portfolio/xyz';
    const result = getPortfolioCategoryFromUrl(url);
    expect(result).toEqual('xyz');
  });

  it('should return correct category "def-ghi" for "/portfolio/def-ghi/"', () => {
    const url = '/portfolio/def-ghi/';
    const result = getPortfolioCategoryFromUrl(url);
    expect(result).toEqual('def-ghi');
  });

  it('should return correct category "jkl" for "/portfolio/jkl"', () => {
    const url = '/portfolio/jkl';
    const result = getPortfolioCategoryFromUrl(url);
    expect(result).toEqual('jkl');
  });

  it('should return null for "/portfolio/1234/"', () => {
    const url = '/portfolio/1234/';
    const result = getPortfolioCategoryFromUrl(url);
    expect(result).toBeNull();
  });

  it('should return null for "/portfolio/1234"', () => {
    const url = '/portfolio/1234';
    const result = getPortfolioCategoryFromUrl(url);
    expect(result).toBeNull();
  });

  it('should return null for "/price-list/abc"', () => {
    const url = '/price-list/abc';
    const result = getPortfolioCategoryFromUrl(url);
    expect(result).toBeNull();
  });

  it('should return null for "/homepage"', () => {
    const url = '/homepage';
    const result = getPortfolioCategoryFromUrl(url);
    expect(result).toBeNull();
  });
});
