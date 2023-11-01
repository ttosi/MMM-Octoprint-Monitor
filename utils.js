const utils = {
  createProgressBar(title, type, value1, value2, color = "#0000ff") {
    
    const progressContainer = `
      <div class="progress-container">
        <span class="progress-title">${title}</span>
        <svg class="progress-svg">
            <circle class="progress-bg" cx="57" cy="57" r="52"></circle>
            <circle class="progress-bar" 
              style="stroke: ${color}; stroke-dashoffset: ${180}" 
              cx="57" cy="57" r="52"></circle>
        </svg>
        <span class="progress-text">${this.formatTextValue(type, value1, value2)}</span>
      </div>
    `;
    return progressContainer;
  },
  formatTextValue(type, value1, value2) {
    let val = ""
    switch (type) {
      case "temp":
        val = `${value1.toFixed()}&deg (${value2.toFixed()}&deg)`
        break;
      case "percent":
        val = `${value1.toFixed()}%`
        break;
      case "hms": // hours:minutes:seconds
        break;
      case "int":
      default:
    }
    return val
  }
};
