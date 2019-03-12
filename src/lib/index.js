const sharp = require("sharp");
const mkdirp = require("mkdirp");
const path = require("path");
const colors = require("colors");

const errorMessage = error => console.error(colors.red("ERROR"), typeof error === "string" ? error : error.message); // eslint-disable-line no-console

const getFileFormatFromFilename = filename => {
    const extname = path.extname(filename);
    return extname && extname.slice(1);
};

const generateAssetDestination = (outputDirectory, template, format) => {
    return path.join(outputDirectory, path.basename(template.name, path.extname(template.name)) + "." + format);
};

const generateIcon = (image, outputDirectory, iconTemplate, format) => {
    const outputFormat = format || getFileFormatFromFilename(iconTemplate.name);

    return image
        .clone()
        .resize(iconTemplate.width, iconTemplate.height || iconTemplate.width)
        .toFormat(outputFormat)
        .toFile(generateAssetDestination(outputDirectory, iconTemplate, outputFormat))
        .then(() => {
            console.info(colors.green("OK"), "Image resized to", iconTemplate.width, "x", // eslint-disable-line no-console
                iconTemplate.height || iconTemplate.width, "and written to", outputDirectory);
        })
        .catch(errorMessage);
};

const generateSplashScreen = (image, outputDirectory, splashScreenTemplate, format) => {
    const outputFormat = format || getFileFormatFromFilename(splashScreenTemplate.name);

    return image
        .clone()
        .resize(splashScreenTemplate.width, splashScreenTemplate.height || splashScreenTemplate.width)
        .toFormat(outputFormat)
        .toFile(generateAssetDestination(outputDirectory, splashScreenTemplate, outputFormat))
        .then(() => {
            console.info(colors.green("OK"), "Image scaled and cropped to", splashScreenTemplate.width, "x", // eslint-disable-line no-console
                splashScreenTemplate.height || splashScreenTemplate.width, "and written to", outputDirectory);
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
    iconsGenerator: generateAssetsGenerator(generateIcon),
    splashScreensGenerator: generateAssetsGenerator(generateSplashScreen),
};
