const optionsForm = document.getElementById('optionsForm');
const options = {};

const handleChangeOption = (e) => {
  const name = e.target.name;
  const value = e.target.checked;
  options[name] = value;
  chrome.storage.sync.set({ options });
};

const onPageLoad = () => {
  // Get config
  chrome.storage.sync.get('options', (data) => {
    Object.assign(options, data.options);
    for(key in options) {
      optionsForm[key].checked = Boolean(options[key]);
    }
  });
  // Save changes
  const checkNodes = document.querySelectorAll('input');
  checkNodes.forEach(check => {
    check.addEventListener('click', handleChangeOption);
  });
};

onPageLoad();
