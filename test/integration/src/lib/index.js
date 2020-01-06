const {Buffer} = require("buffer");
const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const rimraf = require("rimraf");
const { expect } = require("chai");
const { iconsGenerator, splashScreensGenerator } = require("../../../../src");

describe("lib", function () {
    this.timeout(60000);

    const output = path.join(__dirname, "../../../tmp");

    beforeEach(function (done) {
        mkdirp(output, done);
    });

    afterEach(function (done) {
        rimraf(output, done);
    });

    describe("iconsGenerator", function () {
        it("generates icons for templates (to file)", function () {
            const templates = [
                { name: "woof.icon.png", width: 100, height: 100 },
                { name: "meow.icon.png", width: 1000, height: 1000 },
                { name: "grr.splash.png", width: 1000 },
            ];
            const input = path.join(__dirname, "../../../resources/com.appbusinesspodcast.www.icon.png");

            return iconsGenerator(templates, input, output)
                .then(() => {
                    templates.forEach(template => {
                        expect(fs.existsSync(path.join(output, template.name))).to.eql(true);
                    });
                });
        });

        it("generates icons for templates (to buffer)", function () {
            const templates = [
                { name: "woof.icon.png", width: 100, height: 100 },
                { name: "meow.icon.png", width: 1000, height: 1000 },
                { name: "grr.splash.png", width: 1000 },
            ];
            const input = path.join(__dirname, "../../../resources/com.appbusinesspodcast.www.icon.png");

            return iconsGenerator(templates, input, output, undefined, "buffer")
                .then(buffers => {
                    expect(buffers).to.have.length(templates.length);

                    buffers.forEach(buffer => {
                        expect(buffer).to.be.instanceOf(Buffer);
                    });
                });
        });

        it("supports a different format", function () {
            const templates = [
                { name: "woof.icon.png", width: 100, height: 100 },
                { name: "meow.icon.png", width: 1000, height: 1000 },
                { name: "grr.splash.png", width: 1000 },
            ];
            const input = path.join(__dirname, "../../../resources/com.appbusinesspodcast.www.icon.png");
            const format = "webp";

            return iconsGenerator(templates, input, output, format)
                .then(() => {
                    templates.forEach(template => {
                        expect(fs.existsSync(path.join(output, path.basename(template.name, path.extname(template.name)) + "." + format))).to.eql(true);
                    });
                });
        });

        it("throws on an unsupported format", function () {
            const templates = [
                { name: "woof.icon.png", width: 100, height: 100 },
                { name: "meow.icon.png", width: 1000, height: 1000 },
                { name: "grr.splash.png", width: 1000 },
            ];
            const input = path.join(__dirname, "../../../resources/com.appbusinesspodcast.www.icon.png");
            const format = "woof";

            return iconsGenerator(templates, input, output, format)
                .then(() => {
                    throw new Error("Wtf? This should've thrown");
                })
                .catch(error => {
                    expect(error.message).to.contain(`for format but received ${format} of type string`);
                });
        });
    });

    describe("splashScreensGenerator", function () {
        it("generates splash screens for templates (to file)", function () {
            const templates = [
                { name: "woof.splash.png", width: 900, height: 1600 },
                { name: "meow.splash.png", width: 1600, height: 1000 },
                { name: "grr.splash.png", width: 1600 },
            ];
            const input = path.join(__dirname, "../../../resources/com.appbusinesspodcast.www.splash.png");

            return splashScreensGenerator(templates, input, output)
                .then(() => {
                    templates.forEach(template => {
                        expect(fs.existsSync(path.join(output, template.name))).to.eql(true);
                    });
                });
        });

        it("generates splash screens for templates (to buffer)", function () {
            const templates = [
                { name: "woof.splash.png", width: 900, height: 1600 },
                { name: "meow.splash.png", width: 1600, height: 1000 },
                { name: "grr.splash.png", width: 1600 },
            ];
            const input = path.join(__dirname, "../../../resources/com.appbusinesspodcast.www.splash.png");

            return splashScreensGenerator(templates, input, output, undefined, "buffer")
                .then(buffers => {
                    expect(buffers).to.have.length(templates.length);

                    buffers.forEach(buffer => {
                        expect(buffer).to.be.instanceOf(Buffer);
                    });
                });
        });

        it("supports a different format", function () {
            const templates = [
                { name: "woof.splash.png", width: 900, height: 1600 },
                { name: "meow.splash.png", width: 1600, height: 1000 },
                { name: "grr.splash.png", width: 1600 },
            ];
            const input = path.join(__dirname, "../../../resources/com.appbusinesspodcast.www.splash.png");
            const format = "jpeg";

            return splashScreensGenerator(templates, input, output, format)
                .then(() => {
                    templates.forEach(template => {
                        expect(fs.existsSync(path.join(output, path.basename(template.name, path.extname(template.name)) + "." + format))).to.eql(true);
                    });
                });
        });

        it("throws on an unsupported format", function () {
            const templates = [
                { name: "woof.splash.png", width: 900, height: 1600 },
                { name: "meow.splash.png", width: 1600, height: 1000 },
                { name: "grr.splash.png", width: 1600 },
            ];
            const input = path.join(__dirname, "../../../resources/com.appbusinesspodcast.www.splash.png");
            const format = "woof";

            return splashScreensGenerator(templates, input, output, format)
                .then(() => {
                    throw new Error("Wtf? This should've thrown");
                })
                .catch(error => {
                    expect(error.message).to.contain(`for format but received ${format} of type string`);
                });
        });
    });
});
