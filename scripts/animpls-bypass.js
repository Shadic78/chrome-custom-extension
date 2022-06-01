const animes = document.querySelectorAll('.c');

const extractDirectLink = (originalLink) => {
  const directLink = originalLink.slice(24); // Remove ad link
  return directLink;
};

animes.forEach((anime) => {
  const links = anime.querySelectorAll('a');
  links.forEach((link) => {
    const directLink = extractDirectLink(link.href);
    link.setAttribute('href', directLink);
  });
});
