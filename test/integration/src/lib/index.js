const fs = require("fs");
const path = require("path");
const rimraf = require("rimraf");
const { expect } = require("chai");
const { iconsGenerator, splashScreensGenerator } = require("../../../../src");

describe("lib", function () {
    const output = path.join(__dirname, "../../../tmp");

    beforeEach(function (done) {
        rimraf(output, done);
    });

    afterEach(function (done) {
        rimraf(output, done);
    });

    describe("iconsGenerator", function () {
        it("generates icons for templates", function () {
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
    });

    describe("iconsGenerator", function () {
        it("generates icons for templates", function () {
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
    });
});
