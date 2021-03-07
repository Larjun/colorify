document.querySelector('#myBtn3').addEventListener('click', () => {
    console.log('run?')
    chrome.tabs.query({currentWindow:true, active:true}, (tabs) => {
        var tab = tabs[0];
        console.log(tab);
        chrome.tabs.sendMessage(tab.id, {command: "changeClr"});
    });
});