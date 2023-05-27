const scriptTag = document.currentScript;
const botId = scriptTag.getAttribute("data-bot-id");

const fabBg = scriptTag.getAttribute("data-fabbg") || "#000000";
const fabicon = scriptTag.getAttribute("data-fabicon") || "🤖";
const isFabiconUrl =
  fabicon.startsWith("http://") ||
  fabicon.startsWith("https://") ||
  fabicon.startsWith("/");

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

  if (isFabiconUrl) {
    btnChat.innerHTML = `<img style="width: 50px;" src="${fabicon}" alt="push to talk to docutalk"/>`;
  } else {
    btnChat.innerHTML = `<span style="font-size: 30px;">${fabicon}</span>`;
  }

  // add styles to position the button and make it circular
  btnChat.style.position = "fixed";
  btnChat.style.bottom = "20px";
  btnChat.style.right = "20px";
  btnChat.style.zIndex = "100";
  btnChat.style.width = "60px";
  btnChat.style.height = "60px";
  btnChat.style.borderRadius = "50%";
  btnChat.style.border = "1px solid " + fabBg;
  btnChat.style.backgroundColor = fabBg;
  btnChat.style.padding = "0";
  btnChat.style.cursor = "pointer";
  btnChat.style.visibility = "hidden";
  btnChat.style.fontSize = "20px";
  btnChat.style.boxShadow = "gray 3px 3px 3px 1px";

  return btnChat;
}

function setupChatFrame(botId) {
  // create the iframe element
  const iframe = document.createElement("iframe");
  iframe.src = embedUrl.toString();
  // add styles to position the iframe and hide it initially
  iframe.style.position = "fixed";
  iframe.style.bottom = "90px";
  iframe.style.height = "600px";
  iframe.style.maxHeight = "80dvh";
  iframe.style.display = "none";
  iframe.style.zIndex = "101";
  iframe.style.borderRadius = "10px";
  iframe.style.border = "1px solid gray";
  iframe.style.boxShadow = "gray 2px 2px 2px 1px";

  return iframe;
}

const btnChat = setupPushToChatButton();
const chatFrame = setupChatFrame(botId);
chatFrame.onload = () => {
  btnChat.style.visibility = "visible";
};

const mediaQuery = window.matchMedia("(min-width: 768px)");

function handleScreenResize() {
  if (mediaQuery.matches) {
    // larger screen
    chatFrame.style.right = "20px";
    chatFrame.style.width = "400px";
    chatFrame.style.maxWidth = "100dvw";
  } else {
    // mobile screen
    chatFrame.style.right = "20px";
    chatFrame.style.width = "400px";
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
