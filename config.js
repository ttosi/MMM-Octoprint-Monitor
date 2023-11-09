let config = {
	address: "localhost",
	port: 8080,
	basePath: "/",
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],
	useHttps: false,
	httpsPrivateKey: "",
	httpsCertificate: "",

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR", "DEBUG"],
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "clock",
			position: "top_center",
			config: {
				displaySeconds: false
			}
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Tucson",
				locationID: "5318313",
				roundTemp: true,
				showFeelsLike: false,
				showSun: false,
				apiKey: "ae6dbaf77e2819425bc0237b0b9a26b1"
			}
		},
		{
			module: "weather",
			position: "top_left",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Tucson",
				locationID: "5318313",
				roundTemp: true,
				showHumidity: true,
				showFeelsLike: false,
				showSun: false,
				showUVIndex: true,
				showWindDirectionAsArrow: true,
				apiKey: "ae6dbaf77e2819425bc0237b0b9a26b1"
			}
		},
		{
			module: "MMM-OctoprintMonitor",
			position: "middle_center"
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
