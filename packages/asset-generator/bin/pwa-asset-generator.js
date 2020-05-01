#!/usr/bin/env node

const commander = require("commander");
const { errorMessage } = require("@randy.tarampi/generic-icon-splash-generate");
const { generateIcons, generateSplashScreens } = require("../src");
const packageJson = require("../package.json");

commander
    .version(packageJson.version)
    .usage("[options] <inputImagePath> [outputImageDirectoryPath]")
    .description(packageJson.description)
    .option("--icon <iconInputImagePath>", "Path to a distinct icon source image")
    .option("--splash <splashInputImagePath>", "Path to a distinct splash screen source image")
    .option("-f --format <outputImageFormat>", "Generate files for a particular file format {png|jpeg|jpg|tiff|webp}",
        /^(png|jpeg|jpg|tiff|webp)$/gm)
    .action((commander, [inputImagePath, outputImageDirectoryPath] = []) => {
        if (typeof inputImagePath !== "string") {
            commander.help();
            process.exit(1);
        }
        if (typeof outputImageDirectoryPath !== "string") {
            outputImageDirectoryPath = undefined;
        }

        const iconInputImagePath = commander.icon || inputImagePath;
        const splashInputImagePath = commander.splash || inputImagePath;
        const outputImageFormat = commander.format;

        return Promise.all([
            generateIcons(iconInputImagePath, outputImageDirectoryPath, outputImageFormat),
            generateSplashScreens(splashInputImagePath, outputImageDirectoryPath, outputImageFormat)
        ])
            .then(() => {
                return process.exit(0);
            })
            .catch(error => {
                errorMessage(error);
                return process.exit(1);
            });
    });

commander.parse(process.argv);
