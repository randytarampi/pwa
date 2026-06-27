// @ts-check
import androidIcons from "@randy.tarampi/android-icons";
import androidSplash from "@randy.tarampi/android-splash";
import {
    iconsGenerator,
    splashScreensGenerator
} from "@randy.tarampi/generic-icon-splash-generate";
import iosIcons from "@randy.tarampi/ios-icons";
import iosSplash from "@randy.tarampi/ios-splash";

/** The icon templates. */
export const icons = [...androidIcons(), ...iosIcons()];
/** The splash templates. */
export const splashes = [...androidSplash(), ...iosSplash()];
/** Every template we know about. */
export const images = [...icons, ...splashes];

const generateIconsGenerator = templates => (inputFile, outputDirectory = process.cwd(), format, type) => iconsGenerator(
    templates, inputFile, outputDirectory, format, type);
const generateSplashScreensGenerator = templates => (
    inputFile, outputDirectory = process.cwd(), format, type) => splashScreensGenerator(templates, inputFile,
    outputDirectory, format, type);

/** Generate all icons. */
export const generateIcons = generateIconsGenerator(icons);
/** Generate all splash screens. */
export const generateSplashScreens = generateSplashScreensGenerator(splashes);

const api = {
    icons,
    splashes,
    images,
    generateIcons,
    generateSplashScreens
};

/** @type {{icons: typeof icons, splashes: typeof splashes, images: typeof images, generateIcons: typeof generateIcons, generateSplashScreens: typeof generateSplashScreens}} */
export default api;
