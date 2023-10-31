Module.register("octoprintmonitor", {
    defaults: {
        text: "Hello World!",
    },
    printer: undefined,
    async start() {
        Log.log("Started");
        this.print = await octoprint.getData()
        console.log(this.print)
        console.log(moment)
    },
    getScripts() {
        return [this.file("octoprint.js"), this.file("utils.js"), "moment.js"]
    },
    getDom() {
        var wrapper = document.createElement("div");

        // switch (this.printer.state) {
        //     case "printing":
        //         console.log("printing")
        //         break
        //     case "idle":
        //         break;
        //     default:
        //         console.log("dd")
        // }

        wrapper.innerHTML = this.config.text;
        return wrapper;
    },
});