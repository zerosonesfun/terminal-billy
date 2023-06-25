# terminal billy ($b)

A command line interface for any website that anyone with very basic website coding knowledge can get up and running and customize quickly and easily.

[Demo](https://zerosonesfun.github.io/terminal-billy/terminal.html)

[Generate your own](https://zerosonesfun.github.io/terminal-billy/generator.html)

##### The email command won't fully work in the demo. It also won't work in your version unless you know what to do with the provided send_email.php file. If you know what you're doing you may also implement something better than the provided email sending php mail code. A version without the email command may be added here at a later date.

---

## Mission
1. Create a fun and nerdy way to interact with websites.
2. Keep it as simple as adding a hamburger menu to a website. Beginner webmasters should be able to copy/paste the code and have a version up and running quickly.

---

## Installation
1. Copy the code in terminal.html and paste it where you want it.
2. If pasting into an existing page you may delete from `<html>` to `<body>` and delete `</body>` and `</html>` at the end.
3. Replace the response verbiage you see throughout with your own.

Or, use the generator to create a custom version more easily. The generator will provide the JavaScript. Paste it in between <script></script> tags. Above the JavaScript ensure you have the placeholder div:

~~~
<div class="terminal-container">
  <pre class="terminal-output"></pre>
  $b <input type="text" class="terminal-input" autofocus>
</div>
~~~

Finally, to get the email working, edit and include the send_email.php file in the proper spot on your server. Also, create an empty ratelimit.txt file in the same spot for some added protection.

---

## Notes

- $b = "terminal billy" and/or terminal is ready to accept commands, type them here.
- This readme won't list available commands since the "help" command lists them.
- em = The email command. At my personal blog, it is set up to email me only. Editing this function requires some coding knowledge and the provided send_email.php file.
- If you have an idea, go to the discussion board (look for the tab within this repository's menu above).
- If you want to report a bug look for the issues tab above.
- If you are a developer, I accept pull requests.
