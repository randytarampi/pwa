package ca.randytarampi

import ext._randytarampi.lambda_logger.LambdaLogger
import ext._randytarampi.lambda_logger.createLogger
import kotlinext.js.require

val packageJson = require("../../package.json")
val logger: LambdaLogger = createLogger(packageJson)
