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

| Attribute  | Description                                                                                                                                |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `title`    | Title for the chat window                                                                                                                  |
| `avatar`   | The avatar image to be shown in the floating button and the chat window. Empty value will either use config from DocuTalk or the 🤖 emoji. |
| `noheader` | Setting this to `true` will disable the header.                                                                                            |
| `welcome`  | A welcome message to be shown when a new chat begins                                                                                       |
| `hint`     | Placeholder to show in the query input textbox                                                                                             |
| `sendbg`   | Background color for the send button                                                                                                       |
| `userbg`   | Background color for the user message bubble                                                                                               |
| `botbg`    | Background color for the bot message bubble                                                                                                |
