const { execFile } = require("child_process");
const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const rimraf = require("rimraf");
const { expect } = require("chai");
const { images } = require("../../../src");

describe("pwa-asset-generator", function () {
    this.timeout(60000);

    const inputImagePath = path.join(__dirname, "../../resources/ʕつ•ᴥ•ʔつ.png");
    const outputImageDirectoryPath = path.join(__dirname, "../../tmp");
    const binPath = path.join(__dirname, "../../../bin/pwa-asset-generator.js");

    beforeEach(function () {
        return mkdirp(outputImageDirectoryPath);
    });

    afterEach(function (done) {
        rimraf(outputImageDirectoryPath, done);
    });

    it("requires an `inputImagePath`", function (done) {
        const args = [];
        const options = {
            cwd: outputImageDirectoryPath,
        };

        execFile(binPath, args, options, (error, stdout, stderr) => {
            try {
                if (error) {
                    throw error;
                }

                expect(stdout).to.contain("[options] <inputImagePath> [outputImageDirectoryPath]");
                expect(stderr).to.eql("");
                done();
            } catch (error) {
                done(error);
            }
        });
    });

    it("generates images for `inputImagePath` (for no given `outputImageDirectoryPath`)", function (done) {
        const args = [inputImagePath];
        const options = {
            cwd: outputImageDirectoryPath,
        };

        execFile(binPath, args, options, (error, stdout, stderr) => {
            console.log(stdout); // eslint-disable-line no-console
            console.error(stderr); // eslint-disable-line no-console

            if (error) {
                return done(error);
            }

            try {
                images.forEach(
                    template => expect(fs.existsSync(path.join(outputImageDirectoryPath, template.name))).to.eql(true));
                done();
            } catch (error) {
                done(error);
            }
        });
    });

    it("generates images for `inputImagePath` (for given `outputImageDirectoryPath`)", function (done) {
        const args = [inputImagePath, outputImageDirectoryPath];
        const options = {
            cwd: __dirname,
        };

        execFile(binPath, args, options, (error, stdout, stderr) => {
            console.log(stdout); // eslint-disable-line no-console
            console.error(stderr); // eslint-disable-line no-console

            if (error) {
                return done(error);
            }

            try {
                images.forEach(
                    template => expect(fs.existsSync(path.join(outputImageDirectoryPath, template.name))).to.eql(true));
                done();
            } catch (error) {
                done(error);
            }
        });
    });

    it("handles errors", function (done) {
        const args = [inputImagePath, "--icon=woof.png", "--splash=meow.jpg"];
        const options = {
            cwd: outputImageDirectoryPath,
        };

        execFile(binPath, args, options, (error, stdout, stderr) => {
            try {
                if (error) {
                    throw error;
                }

                expect(stdout).to.contain("");
                expect(stderr).to.contain("Input file is missing");
                done();
            } catch (error) {
                done(error);
            }
        });
    });
});
