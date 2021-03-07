console.log("Colorify Running...");
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage (message, sender, sendResponse) {
    console.log(message.txt);
    if(message.txt == "gray"){
        document.body.style=  document.body.style + ";filter: grayscale(100%);"
    }
    else if(message.txt == "saturate"){
        document.body.style=  document.body.style + ";filter: saturate(5000%);"
    }
    else if(message.txt == "none"){
        document.body.style=  document.body.style + ";filter: none;"
    }
}
