const { errorMessage } = require("../../../../src");

describe("lib", function () {
    describe("errorMessage", function () {
        it("logs out `Error`s", function () {
            errorMessage(new Error("woof"));
        });

        it("logs out string errors", function () {
            errorMessage("woof");
        });
    });
});
