const navigateToDownload = () => {
  const getEncodedUrl = () => {
    return location.href.match('\/#([A-Za-z0-9+/=]+)')[1]
  };
  
  const getDecodedUrl = (url) => {
    return atob(url);
  };

  const encodedUrl = getEncodedUrl();
  location.href = getDecodedUrl(encodedUrl);
};

chrome.webNavigation.onBeforeNavigate.addListener(async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: navigateToDownload,
  });
}, {url: [{hostSuffix: 'compul.us'}, {hostSuffix: 'compul.in'}]});