// Listen for messages from the DevTools console
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.text.startsWith('desai')) {
      const userInput = message.text.substring(6).trim(); // Extract user input
      // Forward the user input to the content script
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { text: userInput });
      });
    }
  });
  