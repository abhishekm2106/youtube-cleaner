

chrome.tabs.onUpdated.addListener((tabId, tab) => {
    console.log({ tab }, tab.url)
    if (tab.url && tab.url.includes("youtube.com/shorts")) {
        chrome.tabs.sendMessage(tabId, { type: 'alert-user' })
        console.log("message sent")
        chrome.tabs.goBack(tabId)
    }
});

chrome.webRequest.onCompleted.addListener(details => {
    tabId = details.tabId;
    chrome.tabs.sendMessage(tabId, { type: 'page-rendered' })

}, { urls: ['*://*.youtube.com/*'] })