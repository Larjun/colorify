
function gray(){
    console.log("gray func called")
    let params = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(params,gotTabs)
    function gotTabs(tabs){
        // let message = input
        let msg = {
            txt: "gray"
        }
        chrome.tabs.sendMessage(tabs[0].id,msg);
    }
}
function saturate(){
    console.log("saturate func called")
    let params = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(params,gotTabs)
    function gotTabs(tabs){
        // let message = input
        let msg = {
            txt: "saturate"
        }
        chrome.tabs.sendMessage(tabs[0].id,msg);
    }
}
function none(){
    console.log("none func called")
    let params = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(params,gotTabs)
    function gotTabs(tabs){
        // let message = input
        let msg = {
            txt: "none"
        }
        chrome.tabs.sendMessage(tabs[0].id,msg);
    }
}
window.onload=function(){
    var button1 = document.getElementById("myBtn1")
    var button2 = document.getElementById("myBtn2")
    var button3 = document.getElementById("myBtn3")
    button1.addEventListener("click", gray)
    button2.addEventListener("click", saturate)
    button3.addEventListener("click",none)
}

