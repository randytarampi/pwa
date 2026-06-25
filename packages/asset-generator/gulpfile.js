import gulp from "gulp";
import eslint from "gulp-eslint-new";
import gulpIf from "gulp-if";
import mocha from "gulp-mocha";
import mochaConfig from "./mocha.config.js";

function isFixed(file) {
    return file.eslint && file.eslint.fixed;
}

gulp.task("eslint", () => {
    return gulp.src(["**/*.js", "!node_modules/**"])
        .pipe(eslint({fix: true}))
        .pipe(eslint.format())
        .pipe(gulpIf(isFixed, gulp.dest("./")))
        .pipe(eslint.failAfterError());
});

gulp.task("lint", gulp.parallel(["eslint"]));

gulp.task("test.unit", () => {
    return gulp.src("test/unit/**/*.js", {read: false})
        .pipe(mocha(mochaConfig));
});

gulp.task("test.integration", () => {
    return gulp.src("test/integration/**/*.js", {read: false})
        .pipe(mocha(mochaConfig));
});

gulp.task("test", gulp.parallel(["test.unit", "test.integration"]));
