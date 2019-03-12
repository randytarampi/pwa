const { errorMessage, logMessage } = require("../../../../src");

describe("lib", function () {
    describe("errorMessage", function () {
        it("logs out `Error`s", function () {
            errorMessage(new Error("woof"));
        });

        it("logs out string errors", function () {
            errorMessage("woof");
        });
    });

    describe("logMessage", function () {
        it("logs out arguments (strings)", function () {
            logMessage("woof");
        });

        it("logs out arguments (objects)", function () {
            logMessage(new Error("woof"));
        });
    });
});
