// @ts-check
import sharp from "sharp";
import { mkdirp } from "mkdirp";
import path from "node:path";
import colors from "colors";

/** @param {*} error - Or an Error. @returns {void} */
export const errorMessage = error => console.error(colors.red("ERROR"), typeof error === "string" ? error : error.message);
/** @param {...*} args - Whatever you want to print. @returns {void} */
export const logMessage = (...args) => console.log(colors.green("OK"), ...args);

const getFileFormatFromFilename = filename => {
    const extname = path.extname(filename);
    return extname && extname.slice(1);
};

const generateAssetDestination = (outputDirectory, template, format) => {
    return path.join(outputDirectory, path.basename(template.name, path.extname(template.name)) + "." + format);
};

const generateImageForTemplateInternal = (image, outputDirectory, template, format) => {
    const outputFormat = format || getFileFormatFromFilename(template.name);

    return image
        .clone()
        .resize(template.width, template.height || template.width)
        .toFormat(outputFormat);
};

const generateImageForTemplateToFile = (image, outputDirectory, template, format) => {
    const outputFormat = format || getFileFormatFromFilename(template.name);
    const assetDestination = generateAssetDestination(outputDirectory, template, outputFormat);

    return generateImageForTemplateInternal(image, outputDirectory, template, format)
        .toFile(assetDestination)
        .then(info => {
            logMessage("Image resized to", info.width, "x", info.height, "and written to",
                outputDirectory);
        })
        .catch(errorMessage);
};

const generateImageForTemplateToBuffer = (image, outputDirectory, template, format) => {
    return generateImageForTemplateInternal(image, outputDirectory, template, format)
        .toBuffer({ resolveWithObject: true })
        .then(({ data, info }) => {
            logMessage("Image resized to", info.width, "x", info.height, "and returned as buffer");
            return data;
        })
        .catch(errorMessage);
};

const generateImageForTemplate = (image, outputDirectory, template, format, type) => {
    switch (type) {
        case "buffer":
            return generateImageForTemplateToBuffer(image, outputDirectory, template, format);

        case "file":
        default:
            return generateImageForTemplateToFile(image, outputDirectory, template, format);
    }
};

const generateAssetsGenerator = generator => (templates, input, outputDirectory, format, type = "file") => {
    const image = sharp(input);

    return mkdirp(path.resolve(outputDirectory))
        .then(() => Promise.all(templates.map(template => generator(image, outputDirectory, template, format, type))));
};

/** @type {ReturnType<typeof generateAssetsGenerator>} */
export const iconsGenerator = generateAssetsGenerator(generateImageForTemplate);
/** @type {ReturnType<typeof generateAssetsGenerator>} */
export const splashScreensGenerator = generateAssetsGenerator(generateImageForTemplate);

const api = {
    errorMessage,
    logMessage,
    iconsGenerator,
    splashScreensGenerator
};

/** @type {{errorMessage: typeof errorMessage, logMessage: typeof logMessage, iconsGenerator: typeof iconsGenerator, splashScreensGenerator: typeof splashScreensGenerator}} */
export default api;
