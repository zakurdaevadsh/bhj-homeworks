const btn = document.querySelector(".chat-widget__side")
btn.addEventListener("click", () => {
    const chat = document.querySelector(".chat-widget")
    chat.classList.toggle("chat-widget_active")
})

const bot = []
let botIndex = 0
/*for(let i = 0; i < 10; i++){
    bot.push(`1`)
}*/
bot[0] = "2"
bot[1] = "3"

document.addEventListener("keypress", (e) => {
    if (e.key !== "Enter") return
    const inputText = document.querySelector("#chat-widget__input")
    const messages = document.querySelector('.chat-widget__messages');
    // добавит
    messages.innerHTML += `
    <div class="message message_client">
    <div class="message__time">09:21</div>
    <div class="message__text">
      ${inputText.value}
    </div>
    </div>
    `;
    inputText.value = ""
    const message = bot[botIndex]
    botIndex++
    if(botIndex === bot.length) botIndex = 0
    messages.innerHTML += `
    <div class="message">
    <div class="message__time">09:21</div>
    <div class="message__text">
      ${message}
    </div>
    </div>
    `;
})