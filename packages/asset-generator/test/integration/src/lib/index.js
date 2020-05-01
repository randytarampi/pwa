const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const rimraf = require("rimraf");
const { expect } = require("chai");
const { icons, splashes, generateIcons, generateSplashScreens } = require("../../../../src");

describe("lib", function () {
    this.timeout(60000);

    const outputDirectory = path.join(__dirname, "../../../tmp");
    const inputFile = path.join(__dirname, "../../../resources/ʕつ•ᴥ•ʔつ.png");

    beforeEach(function () {
        return mkdirp(outputDirectory);
    });

    afterEach(function (done) {
        rimraf(outputDirectory, done);
    });

    describe("generateIcons", function () {
        it("generates icons for templates", function () {
            return generateIcons(inputFile, outputDirectory)
                .then(() => {
                    icons.forEach(template => {
                        expect(fs.existsSync(path.join(outputDirectory, template.name))).to.eql(true);
                    });
                });
        });

        it("supports a different format", function () {
            const format = "webp";

            return generateIcons(inputFile, outputDirectory, format)
                .then(() => {
                    icons.forEach(template => {
                        expect(fs.existsSync(path.join(outputDirectory, path.basename(template.name, path.extname(template.name)) + "." + format))).to.eql(true);
                    });
                });
        });

        it("throws on an unsupported format", function () {
            const format = "woof";

            return generateIcons(inputFile, outputDirectory, format)
                .then(() => {
                    throw new Error("Wtf? This should've thrown");
                })
                .catch(error => {
                    expect(error.message).to.contain(`for format but received ${format} of type string`);
                });
        });
    });

    describe("generateSplashScreens", function () {
        it("generates splash screens for templates", function () {
            return generateSplashScreens(inputFile, outputDirectory)
                .then(() => {
                    splashes.forEach(template => {
                        expect(fs.existsSync(path.join(outputDirectory, template.name))).to.eql(true);
                    });
                });
        });

        it("supports a different format", function () {
            const format = "webp";

            return generateSplashScreens(inputFile, outputDirectory, format)
                .then(() => {
                    splashes.forEach(template => {
                        expect(fs.existsSync(path.join(outputDirectory, path.basename(template.name, path.extname(template.name)) + "." + format))).to.eql(true);
                    });
                });
        });

        it("throws on an unsupported format", function () {
            const format = "woof";

            return generateSplashScreens(inputFile, outputDirectory, format)
                .then(() => {
                    throw new Error("Wtf? This should've thrown");
                })
                .catch(error => {
                    expect(error.message).to.contain(`for format but received ${format} of type string`);
                });
        });
    });
});
