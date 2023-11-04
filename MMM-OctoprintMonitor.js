Module.register("MMM-OctoprintMonitor", {
  defaults: {},
  printer: undefined,
  start: function () {
    Log.log("Started: MMM-OctoprintMonitor");
    const self = this;
    setInterval(() => {
      self.updateDom();
    }, 1000);
  },
  getStyles() {
    return [this.file("style.css")];
  },
  getScripts() {
    return ["moment.js", this.file("utils.js"), this.file("octoprint.js")];
  },
  async getDom() {
    this.printer = await octoprint.getData();

    const wrapper = document.createElement("div");
    const container = document.createElement("div");
    container.classList.add("main-container");

    if (!this.printer.printing) {
      const stateText = document.createElement("div");
      stateText.innerHTML = `Printer ${this.printer.state}`;
      container.appendChild(stateText);
    } else {
      const infoPanel = `
          <div class="info-container">
            <div class="info-row">
              <div class="info-label">Model:</div>
              <div class="info-label">Estimated Time:</div>
              <div class="info-label">Time Elapsed:</div>
              <div class="info-label">Time Remaining:</div>
              <div class="info-label">Completion Time:</div>
            </div>
            <div class="info-row">
              <div class="info-value">${this.printer.modelName}</div>
              <div class="info-value">${utils.formatHoursMinsSecs(
                this.printer.time.estimated
              )}</div>
              <div class="info-value">${utils.formatHoursMinsSecs(
                this.printer.time.actual
              )}</div>
              <div class="info-value">${utils.formatHoursMinsSecs(
                this.printer.time.remaining
              )}</div>
              <div class="info-value">${utils.formatDateTime(
                this.printer.startDate,
                this.printer.time.estimated
              )}</div>
            </div>
          </div>
      `;

      const percentComplete = utils.createIndicator(
        "COMPLETED",
        "percent",
        Math.ceil(this.printer.precentComplete)
      );
      const hotendTemp = utils.createIndicator(
        "HOTEND TEMP",
        "temp",
        this.printer.temp.hotend.acutal,
        this.printer.temp.hotend.target,
        "#aa0000"
      );
      const bedTemp = utils.createIndicator(
        "BED TEMP",
        "temp",
        this.printer.temp.bed.actual,
        this.printer.temp.bed.target,
        "#aa0000"
      );

      container.innerHTML = percentComplete + hotendTemp + bedTemp + infoPanel;
    }

    wrapper.appendChild(container);
    return wrapper;
  }
});
