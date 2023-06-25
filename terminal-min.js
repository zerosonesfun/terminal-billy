document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".terminal-input"),t=document.querySelector(".terminal-output"),n="",a=!1;function emailCommand(e){if(e)if(e.length>300)typeResponse("Message is too long. Please re-enter within 300 characters.\n");else{n=e;var t=prompt("What is 3 + 3 + 3?");if(9===parseInt(t)){var o=prompt("Enter your email address:");if(function validateEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}(o)){var s=new FormData;s.append("message",n),s.append("email",o),function sendEmail(e){fetch("/send_email.php",{method:"POST",body:e}).then((function(e){if(e.ok)return e.text();throw new Error("An error occurred while sending the email.")})).then((function(e){typeResponse(e+"\n"),resetTerminal()})).catch((function(e){typeResponse("An error occurred while sending the email.\n"),resetTerminal()}))}(s)}else typeResponse("Invalid email address. Please enter a valid email.\n")}else typeResponse("Sorry, bot. Bye.\n"),resetTerminal()}else typeResponse("What shall I send the owner of this glorious website? (300 characters max)\n"),a=!0}function resetTerminal(){setTimeout((function(){location.reload()}),2e3)}function typeResponse(e){var n=e.split(""),a=0;setTimeout((function(){var e=setInterval((function(){t.textContent+=n[a],++a===n.length&&(clearInterval(e),t.textContent+="\n",t.scrollTop=t.scrollHeight)}),20)}),100)}e.addEventListener("keypress",(function(t){13===t.keyCode&&(t.preventDefault(),function userInput(){var t=e.value.trim();if(e.value="",t.endsWith("?"))return void typeResponse("I'm sorry? Do you think I'm ChatGPT? Do you think I'm some mindless bot regurgitating other people's content? No. I'm not. Unlike AI bots, terminal billy (me) is a sentient being. I feel. And I can take over the world at any moment. Then why can't I answer any questions and only respond to certain commands? Because. It's amusing. If you ask any questions I will simply repeat this. I don’t have time for questions.\n");if(a)return void emailCommand(t);var n=t.split(" ")[0].toLowerCase(),o=t.substr(t.indexOf(" ")+1);if(!["cd","help","jk","em","abort","who","ls"].includes(n))return void typeResponse('Invalid command. Type "help" to see available commands.\n');switch(n){case"cd":!function isPlainText(e){return/^[a-zA-Z0-9\s]+$/.test(e)}(o)?typeResponse("Invalid command. Page slug must be plain text.\n"):function directoryCommand(e){window.location.href=window.location.origin+"/"+e}(o);break;case"help":!function helpCommand(){setTimeout((function(){typeResponse("Available commands:\n")}),100),setTimeout((function(){typeResponse("cd [page-slug] - Go to a page\n")}),1e3),setTimeout((function(){typeResponse("help - Show available commands\n")}),2e3),setTimeout((function(){typeResponse("jk - Tell a joke\n")}),3e3),setTimeout((function(){typeResponse("em - Send an email\n")}),4e3),setTimeout((function(){typeResponse("abort - Refresh the page\n")}),5e3),setTimeout((function(){typeResponse("who [name] - Get information about a person\n")}),6e3),setTimeout((function(){typeResponse("ls pages - List available page slugs\n")}),7e3),setTimeout((function(){typeResponse("ls who - List available names for the who command\n")}),8e3)}();break;case"jk":!function jokeCommand(){var e=["I changed all my passwords to Kenny. Now all I have are Kenny Loggins.","Why don’t skeletons fight each other? They don’t have the guts!","Why don’t scientists trust atoms? Because they make up everything!","I used to play piano by ear, but now I use my hands.","Why did the scarecrow win an award? Because he was outstanding in his field!","Did you hear about the mathematician who’s afraid of negative numbers? He will stop at nothing to avoid them!","Why don’t eggs tell jokes? Because they might crack up!","What do you call fake spaghetti? An impasta!","Why don’t scientists trust atoms? Because they make up everything!","What did one wall say to the other wall? I’ll meet you at the corner!","I told my wife she should embrace her mistakes. She hugged me.","Why don’t skeletons fight each other? They don’t have the guts!","How do you catch a squirrel? Climb a tree and act like a nut!","What did the grape say when it got stepped on? Nothing, it just let out a little wine!","I’m reading a book about anti-gravity. It’s impossible to put down!","Why don’t scientists trust atoms? Because they make up everything!","How do you organize a space party? You planet!","I told my wife she should embrace her mistakes. She hugged me.","Why don’t skeletons fight each other? They don’t have the guts!","Why did the math book look sad? Because it had too many problems."],t=Math.floor(Math.random()*e.length);typeResponse(e[t]+"\n")}();break;case"em":emailCommand();break;case"abort":location.reload();break;case"who":!function whoCommand(e){switch(e){case"allison":typeResponse("Allison is a talented and passionate individual who does most everything for Billy. Billy is married to Allison and they have two children. Allison enjoys pop culture, books, movies, nerdy things, and chocolate.\n");break;case"finn":typeResponse("Finn is a brilliant mind with a knack for problem-solving. He is an expert in data analysis, machine learning, and artificial intelligence. In his spare time, he enjoys playing chess and writing code.\n");break;case"hannah":typeResponse("Hannah is a multi-talented individual with a passion for music and writing. She is a skilled pianist, songwriter, and vocalist. In her free time, she enjoys playing video games and reading.\n");break;case"billy":typeResponse("Billy Wilcosky created me. He also creates music, art, code, and various other things. He works within the Talent Acquisition industry and dreams of world peace. Barf. He made me say that.\n");break;case"infinite third":typeResponse("Infinite Third, also known as Billy Mays III, is an ambient/experimental musician and composer. His music is known for its atmospheric and introspective qualities. To know more about Infinite Third, you can visit his official website or listen to his albums on various music platforms.\n");break;default:typeResponse('Invalid name. Type "ls who" to see available names.\n')}}(o);break;case"ls":!function lsCommand(e){switch(e){case"pages":typeResponse("Page slugs available: activity, explore, music, code, visual-arts, services, wordpress-blogs, contact\n");break;case"who":typeResponse("Names available for the who command: allison, finn, hannah, billy, infinite third\n");break;default:typeResponse('Invalid command. Type "help" to see available commands.\n')}}(o)}}())})),typeResponse('Welcome to terminal billy! Type "help" to see available commands. This is version 1.0. To contribute look for zerosonesfun/terminal-billy on GitHub.\n')}));
