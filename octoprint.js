const octoprint = {
  apikey: "62F0E17AE5E7459D8AC5FE734F1C4331",
  url: "http://192.168.0.25/api",
  async getData() {
    const printer = await this.get("printer?history=false&limit=1")
    const job = await this.get("job")

    // printer is: not on, not connected, or not printing
    if (printer.error || !printer.state.flags.printing) {
      return false
    }

    console.log(job)

    return {
      filename: job.job.file.name,
      datetimeToComplete: job.job.estimatedPrintTime,
      precentComplete: job.progress.completion,
      endDateTime: "", // calculated
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
          target: printer.temperature.bed.actual
        }
      }
    }
  },
  async connect() {
    // const conn = await fe
    // POST /api/connection HTTP/1.1
    // Host: example.com
    // Content-Type: application/json
    // X-Api-Key: abcdef...

    // {
    //   "command": "connect",
    //   "port": "/dev/ttyACM0",
    //   "baudrate": 115200,
    //   "printerProfile": "my_printer_profile",
    //   "save": true,
    //   "autoconnect": true
    // }
  },
  async get(endpoint) {
    return fetch(`${this.url}/${endpoint}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-Api-Key": this.apikey,
      }
    })
      .then(response => response.json())
  },
}