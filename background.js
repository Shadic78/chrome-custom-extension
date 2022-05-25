chrome.runtime.onInstalled.addListener(() => {
  const defaultConfig = {
    ctAutoRedirect: true,
    jpShowLinks: true,
    animepls: true,
  };
  chrome.storage.sync.set({ options: defaultConfig });
});

const runOnCurrentTab = ({ option, files, hostsSuffixes }) => {
  chrome.webNavigation.onCompleted.addListener(
    async () => {
      chrome.storage.sync.get('options', async ({ options }) => {
        if (!options[option]) return;
        let [tab] = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files,
        });
      });
    },
    {
      url: [...hostsSuffixes.map((hostSuffix) => ({ hostSuffix }))],
    }
  );
};

runOnCurrentTab({
  option: 'ctAutoRedirect',
  files: ['/scripts/ctv-bypass.js'],
  hostsSuffixes: ['compul.us', 'compul.in', 'ctvout.buzz'],
});

runOnCurrentTab({
  option: 'jpShowLinks',
  files: ['/scripts/jp-bypass.js'],
  hostsSuffixes: ['biblioteca.japan-paw.net', 'biblioteca.japan-paw.wtf'],
});

runOnCurrentTab({
  option: 'animepls',
  files: ['/scripts/animpls-bypass.js'],
  hostsSuffixes: ['animepls.ga'],
});
