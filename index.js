const commands = require("./config/commands");
const files = require("./config/files");
const paths = require("./config/paths")
const fs = require("fs");
const { commandDir } = require("yargs");


let projectPath;

try{
    console.log(commands.path);
    projectPath = fs.readdirSync(commands.path);
}catch (e) {
    throw new Error("Directory Not found");
}

files.cart.forEach((file, index) => {
    // review path builder
    let folder = Object.keys(files)[index];
    console.log(file, index, folder);
    fs.copyFile(`${commands.path}${paths.woocommerce}${folder}/${file}`, `${commands.path}${paths.themes}${commands.theme}${paths.childtheme}${folder}/`, (data) => {
        console.log(data);
    });
});