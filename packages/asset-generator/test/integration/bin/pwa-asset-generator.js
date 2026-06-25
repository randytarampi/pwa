import { execFile } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { mkdirp } from "mkdirp";
import { rimraf } from "rimraf";
import { expect } from "chai";
import { images } from "../../../src/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe("pwa-asset-generator", function () {
    this.timeout(60000);

    const inputImagePath = path.join(__dirname, "../../resources/ʕつ•ᴥ•ʔつ.png");
    const outputImageDirectoryPath = path.join(__dirname, "../../tmp");
    const binPath = path.join(__dirname, "../../../bin/pwa-asset-generator.js");

    beforeEach(function () {
        return mkdirp(outputImageDirectoryPath);
    });

    afterEach(function (done) {
        rimraf(outputImageDirectoryPath).then(() => done());
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
