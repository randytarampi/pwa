package ca.randytarampi

import ext._randytarampi.lambda_logger.configureLogger
import ext.temp.track
import kotlinx.coroutines.await

suspend fun configureEnvironment() {
    val packageJson: dynamic = try {
        require("../../package.json")
    } catch (e: Throwable) {
        try {
            require("../../../../../../package.json")
        } catch (e2: Throwable) {
            js("{}")
        }
    }

    try {
        track()
        return configureLogger(packageJson).await()
    } catch (error: Throwable) {
        logger.fatal(error, "Unexpected error configuring the lambda environment")
        throw error
    }
}
