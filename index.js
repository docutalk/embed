const scriptTag = document.currentScript;
const botId = scriptTag.getAttribute("data-bot-id");

const params = {
  title: scriptTag.getAttribute("data-title"),
  hint: scriptTag.getAttribute("data-hint"),
  avatar: scriptTag.getAttribute("data-avatar"),
  welcome: scriptTag.getAttribute("data-welcome"),
  botbg: scriptTag.getAttribute("data-botbg"),
  sendbg: scriptTag.getAttribute("data-sendbg"),
  userbg: scriptTag.getAttribute("data-userbg"),
  noheader: scriptTag.getAttribute("data-noheader"),
};

const embedParams = new URLSearchParams(
  Object.fromEntries(
    Object.entries(params).filter(
      ([_, value]) => value !== undefined && value !== null
    )
  )
);
const embedUrl = new URL(`https://docutalk.co/embed/${botId}`);
embedUrl.search = embedParams.toString();

function setupPushToChatButton() {
  const btnChat = document.createElement("button");
  btnChat.setAttribute("id", "docutalk-push-to-talk");

  if (params.avatar) {
    btnChat.innerHTML = `<img style="width: 30px;" src="${params.avatar}" alt="Button Image"/>`;
  } else {
    btnChat.innerHTML = `<span style="font-size: 20px;">🤖</span>`;
  }

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
  btnChat.style.fontSize = "20px";
  return btnChat;
}

function setupChatFrame(botId) {
  // create the iframe element
  const iframe = document.createElement("iframe");
  iframe.src = embedUrl.toString();

  // add styles to position the iframe and hide it initially
  iframe.style.position = "fixed";
  iframe.style.bottom = "80px";
  iframe.style.height = "600px";
  iframe.style.maxHeight = "80dvh";
  iframe.style.display = "none";
  iframe.style.border = "none";
  iframe.style.zIndex = "101";
  iframe.style.border = "1px solid black";
  iframe.style.borderRadius = "5px";

  return iframe;
}

const btnChat = setupPushToChatButton();
const chatFrame = setupChatFrame(botId);

const mediaQuery = window.matchMedia("(min-width: 768px)");

function handleScreenResize() {
  if (mediaQuery.matches) {
    // larger screen
    chatFrame.style.right = "20px";
    chatFrame.style.width = "500px";
    chatFrame.style.maxWidth = "100dvw";
  } else {
    // mobile screen
    chatFrame.style.right = "5px";
    chatFrame.style.width = "500px";
    chatFrame.style.maxWidth = "98dvw";
  }
}

mediaQuery.addEventListener("change", handleScreenResize);
handleScreenResize();

document.body.appendChild(btnChat);
document.body.appendChild(chatFrame);

// set up the button image swapping logic
const buttonImg = btnChat.querySelector("img");
let isChatOpen = false;

// add a click event listener to the button
btnChat.addEventListener("click", function () {
  // toggle the visibility of the iframe
  if (isChatOpen) {
    chatFrame.style.display = "none";
  } else {
    chatFrame.style.display = "block";
  }
  isChatOpen = !isChatOpen;
});
