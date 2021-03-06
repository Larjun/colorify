var all = document.getElementsByTagName("*")
var max = all.length
for (var i = 0; i < max; i++) {
    //all[i].style="opacity: 0%"
    // var bgColor = all[i].style.background-color
    // var color = all[i].style="color"
    // console.log(bgColor)
    // console.log(color)
}

// function changeclr(clr) {
//     if (clr == "red") {
//         document.body.style.backgroundColor = "red";
//     } else if (clr == "green") {
//         document.body.style.backgroundColor = "green";
//     } else { clr == "blue"
//    document.body.style.backgroundColor = "blue";
//     }
// }

// function changeclr() {
//     var script = 'document.body.style.backgroundColor="red";';
//     // See https://developer.chrome.com/extensions/tabs#method-executeScript.
//     // chrome.tabs.executeScript allows us to programmatically inject JavaScript
//     // into a page. Since we omit the optional first argument "tabId", the script
//     // is inserted into the active tab of the current window, which serves as the
//     // default.
//     chrome.tabs.executeScript({
//         code: script
//     });
// }

// let changeColor = document.getElementById("changeclr");
// 
// // When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//     let [tab] = await chrome.tabs.query({
//         active: true,
//         currentWindow: true
//     });
// 
//     chrome.scripting.executeScript({
//         target: {
//             tabId: tab.id
//         },
//         function: setPageBackgroundColor,
//     });
// });
// 
// // The body of this function will be executed as a content script inside the
// // current page
// function setPageBackgroundColor() {
//     var script = 'document.body.style.backgroundColor="red";';
//     // See https://developer.chrome.com/extensions/tabs#method-executeScript.
//     // chrome.tabs.executeScript allows us to programmatically inject JavaScript
//     // into a page. Since we omit the optional first argument "tabId", the script
//     // is inserted into the active tab of the current window, which serves as the
//     // default.
//     chrome.tabs.executeScript({
//         code: script
//     });
// }

document.addEventListener('click', () => changeClr());

function changeClr() {
    document.body.style.backgroundColor = "red";
}