console.log('background running');


chrome.browserAction.onClicked.addListener((tab) => {
    console.log('run?')
    chrome.tabs.query({currentWindow:true, active:true}, (tabs) => {
        var tab = tabs[0];
        console.log(tab);
        chrome.tabs.sendMessage(tab.id, {command: "changeClr"});
    });
})