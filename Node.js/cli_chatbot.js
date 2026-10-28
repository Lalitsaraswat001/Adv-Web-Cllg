/* Using Node's readline module, write a program that:
1. Prompts the user with"You: "
2. Converts input to lowercase.
3. Replies based on the message:
    1. "hello"/"hi"->greeting
    2. "how are you"->status reply
    3. "What is your name"->name reply
    4. "bye"->farewell
    5. Any other input->default reply
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('You: ', (message) => {
    message = message.toLowerCase();
    if (message === "hello" || message === "hi") {
        console.log("Bot: Hello! How can I help you today?");
    } else if (message === "how are you") {
        console.log("Bot: I'm just a bot, but I'm doing great! How about you?");
    } else if (message === "what is your name") {
        console.log("Bot: I'm ChatBot, your friendly assistant!");
    } else if (message === "bye") {
        console.log("Bot: Goodbye! Have a great day!");
    } else {
        console.log("Bot: I'm not sure how to respond to that. Can you ask something else?");
    }
    rl.close();
});