const androidIcons = require("@randy.tarampi/android-icons");
const androidSplash = require("@randy.tarampi/android-splash");
const {
    iconsGenerator,
    splashScreensGenerator,
} = require("@randy.tarampi/generic-icon-splash-generate");
const iosIcons = require("@randy.tarampi/ios-icons");
const iosSplash = require("@randy.tarampi/ios-splash");

const icons = [...androidIcons(), ...iosIcons()];
const splashes = [...androidSplash(), ...iosSplash()];
const images = [...icons, ...splashes];

const generateIconsGenerator = icons => (inputFile, outputDirectory = process.cwd(), format, type) => iconsGenerator(
    icons, inputFile, outputDirectory, format, type);
const generateSplashScreensGenerator = splashes => (
    inputFile, outputDirectory = process.cwd(), format, type) => splashScreensGenerator(splashes, inputFile,
    outputDirectory, format, type);

module.exports = {
    icons,
    splashes,
    images,
    generateIcons: generateIconsGenerator(icons),
    generateSplashScreens: generateSplashScreensGenerator(splashes)
};
