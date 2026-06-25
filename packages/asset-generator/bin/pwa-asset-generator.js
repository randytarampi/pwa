#!/usr/bin/env node

import { createRequire } from "node:module";
import { program } from "commander";
import { errorMessage } from "@randy.tarampi/generic-icon-splash-generate";
import { generateIcons, generateSplashScreens } from "../src/index.js";

const require = createRequire(import.meta.url);
const packageJson = require("../package.json");

program
    .version(packageJson.version)
    .usage("[options] <inputImagePath> [outputImageDirectoryPath]")
    .description(packageJson.description)
    .argument("[inputImagePath]", "Path to the source image")
    .argument("[outputImageDirectoryPath]", "Path to the output image directory")
    .option("--icon <iconInputImagePath>", "Path to a distinct icon source image")
    .option("--splash <splashInputImagePath>", "Path to a distinct splash screen source image")
    .option("-f, --format <outputImageFormat>", "Generate files for a particular file format {png|jpeg|jpg|tiff|webp}")
    .action((inputImagePath, outputImageDirectoryPath, options, command) => {
        if (typeof inputImagePath !== "string") {
            command.help();
            return;
        }
        if (typeof outputImageDirectoryPath !== "string") {
            outputImageDirectoryPath = undefined;
        }

        const iconInputImagePath = options.icon || inputImagePath;
        const splashInputImagePath = options.splash || inputImagePath;
        const outputImageFormat = options.format;

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

program.parse(process.argv);
