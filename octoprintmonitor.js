Module.register("helloworld", {
	defaults: {
		text: "Hello World!!",
	},
	loaded(callback) {
		Log.log("Loaded")
		callback()
	},
	start() {
		octoprint.endpoint = this.config.endpoint
		Log.log("Started");
	},
	getScripts() {
		return [this.file("octoprint.js")];
	},
	getDom() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = octoprint.endpoint;
		return wrapper;
	}
});
