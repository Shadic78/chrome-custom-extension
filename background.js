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

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ autoRedirect: true });
});

chrome.webNavigation.onBeforeNavigate.addListener(async () => {
  chrome.storage.sync.get('autoRedirect', async ({autoRedirect}) => {
    if(!autoRedirect) return;
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: navigateToDownload,
    });
  });
}, {url: [{hostSuffix: 'compul.us'}, {hostSuffix: 'compul.in'}]});