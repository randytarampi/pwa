const sharp = require("sharp");
const mkdirp = require("mkdirp");
const path = require("path");
const colors = require("colors");

const errorMessage = error => console.error(colors.red("ERROR"), typeof error === "string" ? error : error.message); // eslint-disable-line no-console
const logMessage = (...args) => console.log(colors.green("OK"), ...args); // eslint-disable-line no-console

const getFileFormatFromFilename = filename => {
    const extname = path.extname(filename);
    return extname && extname.slice(1);
};

const generateAssetDestination = (outputDirectory, template, format) => {
    return path.join(outputDirectory, path.basename(template.name, path.extname(template.name)) + "." + format);
};

const generateImageForTemplate = (image, outputDirectory, template, format) => {
    const outputFormat = format || getFileFormatFromFilename(template.name);

    return image
        .clone()
        .resize(template.width, template.height || template.width)
        .toFormat(outputFormat)
        .toFile(generateAssetDestination(outputDirectory, template, outputFormat))
        .then(() => {
            logMessage("Image resized to", template.width, "x", template.height || template.width, "and written to",
                outputDirectory);
        })
        .catch(errorMessage);
};

const generateAssetsGenerator = generator => (templates, input, outputDirectory, format) => {
    const image = sharp(input);

    return new Promise((resolve, reject) => {
        mkdirp(path.resolve(outputDirectory), error => {
            if (error) {
                return reject(error);
            }

            resolve();
        });
    })
        .then(() => Promise.all(templates.map(template => generator(image, outputDirectory, template, format))));
};

module.exports = {
    errorMessage,
    logMessage,
    iconsGenerator: generateAssetsGenerator(generateImageForTemplate),
    splashScreensGenerator: generateAssetsGenerator(generateImageForTemplate),
};
