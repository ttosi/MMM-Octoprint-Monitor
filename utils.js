const utils = {
  createProgressBar(title, type, value1, value2, color = "#0000ff") {

    // calc strokedash-offest (.progress-bar) to <= 180 degrees
    //  type = percent (0 - 100)
    //  value1/100*360

    console.log(this.getIndicatorPos(type, value1));

    const progressContainer = `
      <div class="progress-container">
        <span class="progress-title">${title}</span>
        <svg class="progress-svg">
            <circle class="progress-bg" cx="57" cy="57" r="52"></circle>
            <circle class="progress-bar" 
              style="stroke: ${color}; stroke-dashoffset: ${this.getIndicatorPos(type, value1)}" 
              cx="57" cy="57" r="52"></circle>
        </svg>
        <span class="progress-text">${this.formatTextValue(type, value1, value2)}</span>
      </div>
    `;
    return progressContainer;
  },
  getIndicatorPos(type, value1) {
    switch (type) {
      case "percent":
        return (value1  / 100 * 360) - 360
      default:
        return value1
    }
  },
  formatTextValue(type, value1, value2) {
    let val = ""
    switch (type) {
      case "temp":
        return `${value1.toFixed()}&deg (${value2.toFixed()}&deg)`
      case "percent":
        return `${value1.toFixed()}%`
      case "hms": // hours:minutes:seconds
        break;
      default:
        return value1
    }
  }
};
