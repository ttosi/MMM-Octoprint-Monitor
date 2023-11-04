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
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "MMM-OctoprintMonitor",
			position: "bottom_bar"
		},
		//		{
		//			module: "MMM-Playground",
		//			position: "top_left"
		//		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
