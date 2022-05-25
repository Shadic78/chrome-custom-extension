const getEncodedUrl = () => {
  return location.href.match('/#([A-Za-z0-9+/=]+)')[1];
};

const getDecodedUrl = (url) => {
  return atob(url);
};

const encodedUrl = getEncodedUrl();
location.href = getDecodedUrl(encodedUrl);
