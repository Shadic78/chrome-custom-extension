const getUrlIdentifier = () => {
  return location.href.match('\=([A-Za-z0-9+/=]+)')[1];
};

const getLink = async (id) => {
  const data = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ id }),
  }
  const response = await fetch('https://referen.app/wp-json/page/decrypt', data);
  const { url } = await response.json();
  return url;
};

const redirect = async () => {
  const id = getUrlIdentifier();
  const link = await getLink(id);
  location.href = link;
};

redirect();
