const commands = require("./config/commands");
const files = require("./config/files");
const paths = require("./config/paths")
const fs = require("fs");
const { commandDir } = require("yargs");


let projectPath;

try{
    projectPath = fs.readdirSync(commands.path);
}catch (e) {
    throw new Error("Directory Not found");
}

files.cart.forEach(file => {
    // review path builder
    fs.copyFile(`${commands.path}${paths.woocommerce}archive-product.php`, `${commands.path}${paths.themes}${commands.theme}`) 
});
