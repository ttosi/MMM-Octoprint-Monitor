const utils = {
  createProgressBar(title, type, value1, value2, color = "#0000ff") {
    const progressContainer = `
      <div>
        <div class="title">${title}</div>
          <div class="wrap-circles">
            <div class="circle" style="background-image: conic-gradient(${color} ${this.getIndicatorPos(
              type,
              value1,
              value2
            )}%, #222 0);">
            <div class="inner">${this.formatTextValue(
              type,
              value1,
              value2
            )}</div>
          </div>
        </div>
      </div>
    `;
    return progressContainer;
  },
  getIndicatorPos(type, value1, value2) {
    switch (type) {
      case "percent":
        return value1;
      case "temp":
        console.log("temp", ((value1 - 20) / (260 - 20)) * (100 - 1) + 1);
        return ((value1 - 20) / (value2 - 20)) * (100 - 1) + 1;
    }
  },
  formatTextValue(type, value1, value2) {
    let val = "";
    switch (type) {
      case "temp":
        return `${value1.toFixed()}&deg (${value2.toFixed()}&deg)`;
      case "percent":
        return `${value1.toFixed()}%`;
      case "hms": // hours:minutes:seconds
        break;
      default:
        return value1;
    }
  }
};
