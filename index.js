register("chat", (message) => {
    if (message.toLowerCase().includes("rizz")) {
        const sound = new Sound({source: "rizzsound.ogg"}).play()
    }
}).setCriteria("${message}")

register("command", () => {
        const sound = new Sound({
                    source: "rizzsound.ogg",
                    volume: 1.0
                }).play()
}).setName("rizzmanual")

register("command", () => {
    ChatLib.chat("&r&r[&6&lRizz&d&lNotifier&f] &bCommand List!")
    ChatLib.chat("&a----------------------------------")
    ChatLib.chat("/rizzhelp - Opens this list!")
    ChatLib.chat(ChatLib.getChatBreak(" "));    
    ChatLib.chat("/rizzguild - Sends the name of the best guild!")
    ChatLib.chat(ChatLib.getChatBreak(" "));
    ChatLib.chat("/rizzmanual - Triggers the event when &erizz&f is said in chat")
    ChatLib.chat("&a----------------------------------")
}).setName("rizzhelp")

register("command", () => {
    ChatLib.chat("&r&r[&6&lRizz&d&lNotifier&f] &2/g join Skyblock Rizzlers! &7(requires skyblock level &6160&7)")
}).setName("rizzguild")

register("gameLoad", () => {
    ChatLib.chat("&r&r[&6&lRizz&d&lNotifier&f] &bLoaded! &cDo /rizzhelp for help!&r")
    const sound = new Sound({source: "rizzsound.ogg"}).play()
})