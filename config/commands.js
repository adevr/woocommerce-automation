const yargs = require("yargs");

const argv = yargs
	.command("--path", "Path to the Woocommerce project directory",{
		path : {
			alias : "-p",
			type: "string"
		}
	})
	.command("--theme", "Theme folder name", {
		theme : {
			alias: "-t",
			type: "string"
		}
	})
	.argv;

module.exports = argv;

