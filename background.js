chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ autoRedirect: true });
});

chrome.webNavigation.onBeforeNavigate.addListener(async () => {
  chrome.storage.sync.get('autoRedirect', async ({autoRedirect}) => {
    if(!autoRedirect) return;
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['/scripts/ctv-bypass.js'],
    });
  });
}, {url: [{hostSuffix: 'compul.us'}, {hostSuffix: 'compul.in'}, {hostSuffix: 'ctvout.buzz'}]});

chrome.webNavigation.onBeforeNavigate.addListener(async () => {
  chrome.storage.sync.get('autoRedirect', async ({autoRedirect}) => {
    if(!autoRedirect) return;
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['/scripts/jp-bypass.js'],
    });
  });
}, {url: [{hostSuffix: 'biblioteca.japan-paw.net'}]});
