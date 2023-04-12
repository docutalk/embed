const scriptTag = document.currentScript;
const botId = scriptTag.getAttribute("data-bot-id");

const btnChat = document.createElement("button");
btnChat.setAttribute("id", "docutalk-push-to-talk");
btnChat.innerHTML =
  '<img style="width: 30px;" src="https://docutalk.co/logo.png" alt="Button Image"/>';

// add styles to position the button and make it circular
btnChat.style.position = "fixed";
btnChat.style.bottom = "20px";
btnChat.style.right = "20px";
btnChat.style.zIndex = "100";
btnChat.style.width = "50px";
btnChat.style.height = "50px";
btnChat.style.borderRadius = "50%";
btnChat.style.backgroundColor = "#fff";
btnChat.style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0.3)";
btnChat.style.padding = "0";
btnChat.style.cursor = "pointer";

// append the button to the document body
document.body.appendChild(btnChat);

// create the iframe element
const iframe = document.createElement("iframe");
iframe.src = "https://docutalk.co/embed/" + botId;

// add styles to position the iframe and hide it initially
iframe.style.position = "fixed";
iframe.style.bottom = "80px";
iframe.style.right = "20px";
iframe.style.width = "500px";
iframe.style.height = "600px";
iframe.style.maxHeight = "80dvh";
iframe.style.maxWidth = "100dvw";
iframe.style.display = "none";
iframe.style.border = "none";
iframe.style.zIndex = "101";
iframe.style.border = "1px solid black";
iframe.style.borderRadius = "5px";

document.body.appendChild(iframe);

// set up the button image swapping logic
const buttonImg = btnChat.querySelector("img");
const buttonImgSrc = buttonImg.getAttribute("src");
const buttonImgSrcX = "https://docutalk.co/logo.png";
let isChatOpen = false;

// add a click event listener to the button
btnChat.addEventListener("click", function () {
  // toggle the visibility of the iframe
  if (isChatOpen) {
    iframe.style.display = "none";
    buttonImg.setAttribute("src", buttonImgSrc);
  } else {
    iframe.style.display = "block";
    buttonImg.setAttribute("src", buttonImgSrcX);
  }
  isChatOpen = !isChatOpen;
});
