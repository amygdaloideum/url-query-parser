import queryString from 'query-string';

const search = queryString.parse(location.search);

const params = {
  url: search.url,
};

export const getFragment = () => window.location.hash && window.location.hash.substring(1);

export default params;

export function parse(url) {
  var queryString = url.substring(url.indexOf('?') + 1);
  const searchParams = new URLSearchParams(queryString);
  const arr = [];
  searchParams.forEach((value, key) => {
    arr.push({ key: key, value });
  });
  return arr;
}
