chrome.runtime.onInstalled.addListener(() => {
  const defaultConfig = {
    ctAutoRedirect: true,
    jpShowLinks: true,
  };
  chrome.storage.sync.set({ options: defaultConfig });
});

chrome.webNavigation.onBeforeNavigate.addListener(
  async () => {
    chrome.storage.sync.get('options', async ({ options }) => {
      if (!options.ctAutoRedirect) return;
      let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['/scripts/ctv-bypass.js'],
      });
    });
  },
  {
    url: [
      { hostSuffix: 'compul.us' },
      { hostSuffix: 'compul.in' },
      { hostSuffix: 'ctvout.buzz' },
    ],
  }
);

chrome.webNavigation.onBeforeNavigate.addListener(
  async () => {
    chrome.storage.sync.get('options', async ({ options }) => {
      if (!options.jpShowLinks) return;
      let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['/scripts/jp-bypass.js'],
      });
    });
  },
  {
    url: [
      { hostSuffix: 'biblioteca.japan-paw.net' },
      { hostSuffix: 'biblioteca.japan-paw.wtf' },
    ],
  }
);
