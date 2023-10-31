Module.register("MMM-OctoprintMonitor", {
  defaults: {
    text: "Hello World!"
  },
  startTime: undefined,
  printer: undefined,
  async start() {
    Log.log("Started: MMM-OctoprintMonitor");
  },
  getStyles() {
    return [this.file("style.css")];
  },
  getScripts() {
    return ["moment.js", this.file("utils.js"), this.file("octoprint.js")];
  },
  async getDom() {
    const data = await octoprint.getData();
    console.log(data);
    

    var wrapper = document.createElement("div");
    
    const container = document.createElement("div");
    container.classList.add("main-container");

    const hotendTemp = utils.createProgressBar("HOTEND TEMP", "74&deg");
    const percentComplete = utils.createProgressBar("BED TEMP", "8%");

    container.innerHTML = hotendTemp + percentComplete;

    wrapper.appendChild(container);
    return wrapper;
  }
});
