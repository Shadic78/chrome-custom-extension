const skipBtn = document.getElementById('skipBtn');

skipBtn.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['/scripts/ctv-bypass.js'],
  });
});
