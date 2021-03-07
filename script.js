//console.log(matches.values)
console.log("Content is running");
//alert("Clicked");
// chrome.runtime.onMessage.addListner(gotMessage);
// function gotMessage(message, sender, sendResponse) {
//     alert("clicked");
//     var all = document.getElementsByTagName("*")
//     var max = all.length
//     //var matches = document.querySelectorAll("*");   
//     for (var i = 0; i < max; i++) {
//         //all[i].style="opacity: 0%"
//         // var bgColor = all[i].style.background-color
//         // var color = all[i].style="color"
//         // console.log(bgColor)
//         // console.log(color)
//         var all = document.getElementsByTagName("*")
//         var max = all.length
//     
//         var style = getComputedStyle(all[i])
//         //all[i].style = all[i].style + ";filter: grayscale(100%);"
//         //all[i].style = all[i].style + ";filter: contrast(200%); filter: saturate(2);"
//         //document.body.style.background = "#000";
//         //style.filter = "saturate(4)"
//         //console.log(style.backgroundColor)
//     
//         //background-color: rgb(255,0,0);color: rgb(255,0,0);filter: saturate(2);
//     }
// }

chrome.runtime.onMessage.addListener((msg, sender, response) => {
    console.log(msg);
    if (msg.command == "changeClr") {
        var all = document.getElementsByTagName("*");
        for (var i = 0; i < all.length; i++) {
            all[i].style = all[i].style + ";filter: contrast(200%); filter: saturate(2);"
        }
    }

});



// function contrast() {
//     var all = document.getElementsByTagName("*")
//     var max = all.length
//     var matches = document.querySelectorAll("*");   
//     for(var i = 0;i < max;i++){
//         //all[i].style="opacity: 0%"
//         // var bgColor = all[i].style.background-color
//         // var color = all[i].style="color"
//         // console.log(bgColor)
//         // console.log(color)
//         var all = document.getElementsByTagName("*")
//         var max = all.length

//         var style = getComputedStyle(all[i])
//         //all[i].style = all[i].style + ";filter: grayscale(100%);"
//         all[i].style = all[i].style + ";filter: contrast(200%);"

//         //style.filter = "saturate(4)"
//         //console.log(style.backgroundColor)

//         //background-color: rgb(255,0,0);color: rgb(255,0,0);filter: saturate(2);
//     }
// }

// window.onload = function () {
//     var button = document.getElementById("myBtn1")
//     console.log(button.innerHTML)
//     button.onclick = contrast()
// }
// window.onload = function () {
//     document.getElementById("myBtn2").onclick = grayScale()
// }
// window.onload = function () {
//     document.getElementById("myBtn3").onclick = grayScale()
// }
//document.getElementById("myBtn").addEventListener("click", grayScale);