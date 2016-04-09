chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
  //chrome.tabs.executeScript(tab.id, {
  //  "file": "contentscript.js"
  //}, function () { // Execute your code
  //  console.log("Script Executed .. "); // Notification on Completion
  //});
  alert('icon click');
});

chrome.runtime.onMessage.addListener(function (msg, sender) {
  // First, validate the message's structure
  if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
    // Enable the page-action for the requesting tab
    chrome.pageAction.show(sender.tab.id);
  }
});