import androidIcons from "@randy.tarampi/android-icons";
import androidSplash from "@randy.tarampi/android-splash";
import {
    iconsGenerator,
    splashScreensGenerator
} from "@randy.tarampi/generic-icon-splash-generate";
import iosIcons from "@randy.tarampi/ios-icons";
import iosSplash from "@randy.tarampi/ios-splash";

export const icons = [...androidIcons(), ...iosIcons()];
export const splashes = [...androidSplash(), ...iosSplash()];
export const images = [...icons, ...splashes];

const generateIconsGenerator = templates => (inputFile, outputDirectory = process.cwd(), format, type) => iconsGenerator(
    templates, inputFile, outputDirectory, format, type);
const generateSplashScreensGenerator = templates => (
    inputFile, outputDirectory = process.cwd(), format, type) => splashScreensGenerator(templates, inputFile,
    outputDirectory, format, type);

export const generateIcons = generateIconsGenerator(icons);
export const generateSplashScreens = generateSplashScreensGenerator(splashes);

const api = {
    icons,
    splashes,
    images,
    generateIcons,
    generateSplashScreens
};

export default api;
