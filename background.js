chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const targetURL = "https://chatgpt.com"; // Change this to your desired tab

  if (changeInfo.status === "complete" && tab.url.startsWith(targetURL)) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: () => {
        const audio = new Audio("https://nickgreet.s3.us-east-2.amazonaws.com/greeting.mp3");
        audio.play();
      }
    });
  }
});


