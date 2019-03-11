const sharp = require("sharp");
const mkdirp = require("mkdirp");
const path = require("path");
const colors = require("colors");

const errorMessage = error => console.error(colors.red("ERROR"), typeof error === "string" ? error : error.message); // eslint-disable-line no-console

const generateAssetDestination = (output, template) => path.join(output, template.name);

const generateIcon = (image, output, iconTemplate) => image
    .clone()
    .resize(iconTemplate.width, iconTemplate.height || iconTemplate.width, {
        fit: "contain",
    })
    .toFile(generateAssetDestination(output, iconTemplate))
    .then(() => {
        console.info(colors.green("OK"), "Image resized to", iconTemplate.width, "x", // eslint-disable-line no-console
            iconTemplate.height || iconTemplate.width, "and written to", output);
    })
    .catch(errorMessage);

const generateSplashScreen = (image, output, splashScreenTemplate) => image
    .clone()
    .resize(splashScreenTemplate.width, splashScreenTemplate.height || splashScreenTemplate.width)
    .toFile(generateAssetDestination(output, splashScreenTemplate))
    .then(() => {
        console.info(colors.green("OK"), "Image scaled and cropped to", splashScreenTemplate.width, "x", // eslint-disable-line no-console
            splashScreenTemplate.height || splashScreenTemplate.width, "and written to", output);
    })
    .catch(errorMessage);

const generateAssetsGenerator = generator => (templates, input, output) => {
    const image = sharp(input);

    return new Promise((resolve, reject) => {
        mkdirp(path.resolve(output), error => {
            if (error) {
                return reject(error);
            }

            resolve();
        });
    })
        .then(() => Promise.all(templates.map(template => generator(image, output, template))));
};

module.exports = {
    errorMessage,
    iconsGenerator: generateAssetsGenerator(generateIcon),
    splashScreensGenerator: generateAssetsGenerator(generateSplashScreen),
};
