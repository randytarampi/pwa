package ca.randytarampi

import ext._randytarampi.lambda_logger.configureLogger
import ext.temp.track
import kotlinext.js.require
import kotlinx.coroutines.await

suspend fun configureEnvironment() {
    val packageJson = require("../../package.json")

    try {
        track()
        return configureLogger(packageJson).await()
    } catch (error: Throwable) {
        logger.fatal(error, "Unexpected error configuring the lambda environment")
        throw error
    }
}
