let rizzEnabled = true; // Default: enabled

// Chat trigger
register("chat", (message) => {
    if (rizzEnabled && message.toLowerCase().includes("rizz")) {
        new Sound({ source: "rizzsound.ogg" }).play();
    }
}).setCriteria("${message}");

// Manual trigger command
register("command", () => {
    if (rizzEnabled) {
        new Sound({ source: "rizzsound.ogg", volume: 1.0 }).play();
    } else {
        ChatLib.chat("&cRizz sound is currently disabled. Use /rizztoggle to enable it.");
    }
}).setName("rizzmanual");

// Toggle command
register("command", () => {
    rizzEnabled = !rizzEnabled;
    const status = rizzEnabled ? "&aenabled" : "&cdisabled";
    ChatLib.chat(`&r&r[&6&lRizz&d&lNotifier&f] &bRizz sound has been ${status}&b!`);
}).setName("rizztoggle");

// Help command
register("command", () => {
    ChatLib.chat("&r&r[&6&lRizz&d&lNotifier&f] &bCommand List!")
    ChatLib.chat("&a----------------------------------")
    ChatLib.chat("/rizzhelp - Opens this list!");
    ChatLib.chat("/rizzguild - Sends the name of the best guild!");
    ChatLib.chat("/rizzmanual - Triggers the event when &erizz&f is said in chat");
    ChatLib.chat("/rizztoggle - Enables or disables the sound effect");
    ChatLib.chat("&a----------------------------------");
}).setName("rizzhelp");

// Guild command
register("command", () => {
    ChatLib.chat("&r&r[&6&lRizz&d&lNotifier&f] &2/g join Skyblock Rizzlers! &7(requires skyblock level &6160&7)");
}).setName("rizzguild");

// Game load message
register("gameLoad", () => {
    ChatLib.chat("&r&r[&6&lRizz&d&lNotifier&f] &bLoaded! &cDo /rizzhelp for help!&r");
    new Sound({ source: "rizzsound.ogg" }).play();
});
