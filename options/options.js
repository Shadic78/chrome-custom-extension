const handleChangeOption = (e) => {
  const value = e.target.checked;
  chrome.storage.sync.set({ autoRedirect: value });
};

const onPageLoad = () => {
  chrome.storage.sync.get('autoRedirect', ({autoRedirect}) => {
    const checkbox = document.getElementById('checkRedirect');
    checkbox.checked = autoRedirect || false;
    checkbox.addEventListener('click', handleChangeOption);
  });
};

onPageLoad();
