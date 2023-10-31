const utils = {
  createProgressBar(title, value, type) {
    const progressContainer = `
      <div class="progress-container">
        <span class="progress-title">${title}</span>
        <svg class="progress-svg">
            <circle class="progress-bg" cx="57" cy="57" r="52"></circle>
            <circle class="progress-bar" cx="57" cy="57" r="52"></circle>
        </svg>
        <span class="progress-text">${value}</span>
      </div>
    `;
    return progressContainer;
  }
};
