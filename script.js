console.log("Colorify Running...");
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
    if (message.txt == "gray") {
        document.body.style = document.body.style + ";filter: grayscale(100%);"
    } else if (message.txt == "saturate") {
        document.body.style = document.body.style + ";filter: saturate(5000%);"
    } else if (message.txt == "none") {
        document.body.style = document.body.style + ";filter: none;"
        location.reload()
    } else if (message.txt == "highVis") {
        para = document.querySelectorAll("p");
        div = document.querySelectorAll("div");
        for (let i = 0; i < div.length; i++) {
            div[i].style = div[i].style + ";color: #ff00ff;";
        }
        for (let i = 0; i < para.length; i++) {
            para[i].style = para[i].style + ";color: #00f0f0;";
        }
        h1 = document.querySelectorAll("h1");
        for (let i = 0; i < h1.length; i++) {
            h1[i].style = h1[i].style + ";color: #39FF14;";
        }
        h2 = document.querySelectorAll("h2");
        for (let i = 0; i < h2.length; i++) {
            h2[i].style = h2[i].style + ";color: #39FF14;";
        }
        h3 = document.querySelectorAll("h3");
        for (let i = 0; i < h3.length; i++) {
            h3[i].style = h3[i].style + ";color: #00ffff;";
        }
        h4 = document.querySelectorAll("h4");
        for (let i = 0; i < h4.length; i++) {
            h4[i].style = h4[i].style + ";color: #00ffff;";
        }
        h5 = document.querySelectorAll("h5");
        for (let i = 0; i < h5.length; i++) {
            h5[i].style = h5[i].style + ";color: #00ffff;";
        }
        h5 = document.querySelectorAll("h5");
        for (let i = 0; i < h5.length; i++) {
            h5[i].style = h5[i].style + ";color: #00ffff;";
        }
        li = document.querySelectorAll("li");
        for (let i = 0; i < li.length; i++) {
            li[i].style = li[i].style + ";color: #00ffff;";
        }
        anchor = document.querySelectorAll("a");
        for (let i = 0; i < anchor.length; i++) {
            anchor[i].style = anchor[i].style + ";color: #00ffff;";
        }
        code = document.querySelectorAll("code");
        for (let i = 0; i < code.length; i++) {
            code[i].style = code[i].style + ";color: #00ffff;";
        }
        div = document.querySelectorAll("div");
        for (let i = 0; i < div.length; i++) {
            div[i].style.backgroundColor = "#000000";
        }
        table = document.querySelectorAll("tbody");
        for (let i = 0; i < table.length; i++) {
            table[i].style = table[i].style + ";color: #00F0F0;";
            table[i].style.backgroundColor = "#000000";
        }

        document.body.style.backgroundColor = "#000000";
        document.body.style = document.body.style + ";filter: saturate(100%)";
    }
}