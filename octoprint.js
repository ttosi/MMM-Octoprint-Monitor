const octoprint = {
  apikey: "62F0E17AE5E7459D8AC5FE734F1C4331",
  url: "http://192.168.0.25/api",
  async getData() {
    // const printer = await this.get("printer?history=false&limit=1");
    // const job = await this.get("job");
    // console.log(job)
    // console.log(printer)

    // // printer is off or not connected
    // if (printer.error) {
    //   return {
    //     state: "Offline",
    //     printing: false
    //   };
    // }

    // printer is on but not printing
    if (!printer.state.flags.printing) {
      return {
        state: "Idle",
        printing: false
      }
    }
    const printer = {
      sd: {
        ready: false
      },
      state: {
        error: "",
        flags: {
          cancelling: false,
          closedOrError: false,
          error: false,
          finishing: false,
          operational: true,
          paused: false,
          pausing: false,
          printing: true,
          ready: false,
          resuming: false,
          sdReady: false
        },
        text: "Printing"
      },
      temperature: {
        W: {
          actual: 0,
          offset: 0,
          target: null
        },
        bed: {
          actual: 32,
          offset: 0,
          target: 0
        },
        tool0: {
          actual: 28,
          offset: 0,
          target: 0
        }
      }
    };

    const job = {
      job: {
        averagePrintTime: 6772.698994748993,
        estimatedPrintTime: 6959.166164009886,
        filament: {
          tool0: {
            length: 3009.7319335862994,
            volume: 7.239253669681824
          }
        },
        file: {
          date: 1698806928,
          display: "NASA Fabric 4x4.gcode",
          name: "NASA Fabric 4x4.gcode",
          origin: "local",
          path: "NASA Fabric 4x4.gcode",
          size: 6022830
        },
        lastPrintTime: 6772.698994748993,
        user: "ttosi"
      },
      progress: {
        completion: 0,
        filepos: 104741,
        printTime: 885,
        printTimeLeft: 6148,
        printTimeLeftOrigin: "genius"
      },
      state: "Printing"
    };

    return {
      printing: true,
      modelName: job.job.file.name,
      precentComplete: job.progress.completion,
      state: job.state,
      time: {
        startDate: new Date(),
        estimated: job.job.estimatedPrintTime,
        actual: job.progress.printTime,
        remaining: job.progress.printTimeLeft
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
    };

    

    // return {
    //   printing: true,
    //   filename: "test.gcode",
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
