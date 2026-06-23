package ca.randytarampi

import ext._randytarampi.lambda_logger.LambdaLogger
import ext._randytarampi.lambda_logger.createLogger

val packageJson: dynamic = try {
    require("../../package.json")
} catch (e: Throwable) {
    try {
        require("../../../../../../package.json")
    } catch (e2: Throwable) {
        js("{}")
    }
}
val logger: LambdaLogger = createLogger(packageJson)
