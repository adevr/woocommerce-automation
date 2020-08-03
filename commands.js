const yargs = require("yargs");

const argv = yargs
	.command("--path", "Path to the Woocommerce project directory",{
		path : {
			alias : "-p",
			type: "string"
		}
	}).argv;

module.exports = argv;