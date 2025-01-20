document.addEventListener("DOMContentLoaded", async () => {
  const languageSelect = document.getElementById("language-select");
  const spinner = document.getElementById("loading-spinner");

  // Load languages
  const response = await fetch(chrome.runtime.getURL("languages.json"));
  const { languages } = await response.json();

  // Populate dropdown
  languages.forEach((lang) => {
    const option = document.createElement("option");
    option.value = lang.code;
    option.textContent = lang.name;
    languageSelect.appendChild(option);
  });

  // Handle selection
  languageSelect.addEventListener("change", async () => {
    const selectedLanguage = languageSelect.value;
    spinner.style.display = "block";

    // Send message to content script for translation
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "translate",
        language: selectedLanguage,
      });
    });
  });
});
