document.querySelector('myBtn1').addEventListener('click', () => {
    console.log('run?')
    chrome.tabs.query({currentWindow:true, active:true}, (tabs) => {
        var tab = tabs[0];
        chrome.tabs.sendMessage(tab.id, {command: "changeClr"});
    });
});