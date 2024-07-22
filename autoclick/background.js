function repeatAction() {
  chrome.tabs.onActivated.addListener((activeInfo) => {
    // chrome.scripting.executeScript(tab.id, {file: "content.js"});
    chrome.scripting.executeScript({
      target: { tabId: activeInfo.tabId, allFrames: true },
      files: ["content.js"],
    });
  });
}

//(h2seconds - h1seconds) * 1000 + 9000
