const sharp = require("sharp");
const mkdirp = require("mkdirp");
const path = require("path");
const colors = require("colors");

const errorMessage = error => console.error(colors.red("ERROR"), typeof error === "string" ? error : error.message); // eslint-disable-line no-console

const generateAssetDestination = (outputDirectory, template) => path.join(outputDirectory, template.name);

const generateIcon = (image, outputDirectory, iconTemplate) => image
    .clone()
    .resize(iconTemplate.width, iconTemplate.height || iconTemplate.width)
    .toFile(generateAssetDestination(outputDirectory, iconTemplate))
    .then(() => {
        console.info(colors.green("OK"), "Image resized to", iconTemplate.width, "x", // eslint-disable-line no-console
            iconTemplate.height || iconTemplate.width, "and written to", outputDirectory);
    })
    .catch(errorMessage);

const generateSplashScreen = (image, outputDirectory, splashScreenTemplate) => image
    .clone()
    .resize(splashScreenTemplate.width, splashScreenTemplate.height || splashScreenTemplate.width)
    .toFile(generateAssetDestination(outputDirectory, splashScreenTemplate))
    .then(() => {
        console.info(colors.green("OK"), "Image scaled and cropped to", splashScreenTemplate.width, "x", // eslint-disable-line no-console
            splashScreenTemplate.height || splashScreenTemplate.width, "and written to", outputDirectory);
    })
    .catch(errorMessage);

const generateAssetsGenerator = generator => (templates, input, outputDirectory) => {
    const image = sharp(input);

    return new Promise((resolve, reject) => {
        mkdirp(path.resolve(outputDirectory), error => {
            if (error) {
                return reject(error);
            }

            resolve();
        });
    })
        .then(() => Promise.all(templates.map(template => generator(image, outputDirectory, template))));
};

module.exports = {
    errorMessage,
    iconsGenerator: generateAssetsGenerator(generateIcon),
    splashScreensGenerator: generateAssetsGenerator(generateSplashScreen),
};
