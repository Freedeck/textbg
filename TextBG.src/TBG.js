const path = require("path");
const Plugin = require(path.resolve('./src/classes/Plugin'));

class TBG extends Plugin {
    wantedText = "Loading...";
    constructor() {
        // With JS Hooks, you must keep the ID of your plugin the name of the source folder.
        super('Text Background', 'Freedeck', 'TextBG', false);
        let msg = this.getFromSaveData('message');
        if(msg != undefined && msg != '')
            this.wantedText = msg;
        else
            this.setToSaveData("message", "Your message here!");
    }

    onInitialize () {
        this.setJSServerHook("tbg/server.js");
        this.setJSClientHook("tbg/client.js");
        this.setJSSocketHook("tbg/socket.js");
        this.addImport('tbg/_tbg.css');
        console.log('[TBG] Initialized!')
        // This is all you need to do. Freedeck will do all of the logic for you.
        return true;
    }

}

module.exports = {
	exec: () => new TBG(),
 	class: TBG
}