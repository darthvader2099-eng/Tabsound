chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const targetURL = "https://chat.openai.com"; // Change this to your desired tab

  if (changeInfo.status === "complete" && tab.url.startsWith(targetURL)) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: () => {
        const audio = new Audio("https://example.com/greeting.mp3");
        audio.play();
      }
    });
  }
});
