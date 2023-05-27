# DocuTalk Embed Widget

This repository contains the docutalk Widget that you can Embed in your own website.

You are free to fork this and customise it to your needs.

## Usage

```html
<script
  async
  src="https://cdn.jsdelivr.net/gh/docutalk/embed@latest/index.min.js"
  data-bot-id="<your-bot-id>"
  data-welcome="Hi, how may i assist you today?"
  data-hint="Just ask me your question here"
  data-sendbg="#151515"
  data-userbg="#151515"
  data-botbg="#151515"
/>
```

You can pass any of the attributes listed below as `data-<attribute>="<value>"` on this script tag to further customise.

### Floating Chat Button

The following attributes apply to the floating-chat-button. The embed js has some customisation available.

| Attribute | Description                                                                                   |
| --------- | --------------------------------------------------------------------------------------------- |
| fabbg     | Background color for the Floating chat Button                                                 |
| fabicon   | Image to be used in the Floating Image Button.                                                |
|           | If the value does not start with `http://` or `https://` or `/`, it will be treated as text. |

### Chat Interface

You can pass the following attributes to override chat interface appearance. If not passed,
values configured in your DocuTalk control panel will be used automatically.

| Attribute  | Description                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------ |
| `title`    | Title for the chat window                                                                                          |
| `avatar`   | The avatar image to be shown in the chat window. Empty value will either use config from DocuTalk or the 🤖 emoji. |
| `noheader` | Setting this to `true` will disable the header.                                                                    |
| `welcome`  | A welcome message to be shown when a new chat begins                                                               |
| `hint`     | Placeholder to show in the query input textbox                                                                     |
| `sendbg`   | Background color for the send button                                                                               |
| `userbg`   | Background color for the user message bubble                                                                       |
| `botbg`    | Background color for the bot message bubble                                                                        |
