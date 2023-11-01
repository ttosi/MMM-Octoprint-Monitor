const octoprint = {
  apikey: "62F0E17AE5E7459D8AC5FE734F1C4331",
  url: "http://192.168.0.25/api",
  async getData() {
    const printer = await this.get("printer?history=false&limit=1");
    const job = await this.get("job");
    console.log(job)
    console.log(printer)

    // printer is off or not connected
    if (printer.error) {
      return {
        state: "Offline",
        printing: false
      };
    }

    // printer is on but not printing
    if (!printer.state.flags.printing) {
      return {
        state: "Idle",
        printing: false
      }
    }

    return {
      printing: true,
      filename: job.job.file.name,
      precentComplete: Math.ceil(job.progress.completion),
      time: {
        estimated: job.estimatedPrintTime,
        actual: job.progress.printTime,
        left: job.progress.printTimeLeft,
      },
      temp: {
        hotend: {
          acutal: printer.temperature.tool0.actual,
          target: printer.temperature.tool0.target
        },
        bed: {
          actual: printer.temperature.bed.actual,
          target: printer.temperature.bed.target
        }
      }
    }

    // return {
    //   printing: true,
    //   filename: "test-print.gcode",
    //   datetimeToComplete: 5000,
    //   precentComplete: 100,
    //   time: {
    //     estimated: 1000,
    //     actual: 1125,
    //     left: 500
    //   },
    //   temp: {
    //     hotend: {
    //       acutal: 30,
    //       target: 210
    //     },
    //     bed: {
    //       actual: 28,
    //       target: 60
    //     }
    //   }
    // };
  },
  async get(endpoint) {
    return fetch(`${this.url}/${endpoint}`, {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Api-Key": this.apikey
      }
    }).then((response) => response.json());
  }
};
