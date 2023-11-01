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
    const printer = await octoprint.getData();
    console.log(printer);

    var wrapper = document.createElement("div");

    const container = document.createElement("div");
    container.classList.add("main-container");

    if (!printer.printing) {
      const stateText = document.createElement("div")
      stateText.innerHTML = `Printer ${printer.state}`
      container.appendChild(stateText)
     
      wrapper.appendChild(container);
    } else {
      const percentComplete = utils.createProgressBar(
        "COMPLETED", "percent", printer.precentComplete);
      const hotendTemp = utils.createProgressBar(
        "HOTEND TEMP", "temp", printer.temp.hotend.acutal, printer.temp.hotend.target, "#aa0000");
      const bedTemp = utils.createProgressBar(
        "BED TEMP", "temp", printer.temp.bed.actual, printer.temp.bed.target, "#aa0000");
      
      container.innerHTML =
        percentComplete + hotendTemp + bedTemp;
     
        wrapper.appendChild(container);
    }

    return wrapper;
  }
});
