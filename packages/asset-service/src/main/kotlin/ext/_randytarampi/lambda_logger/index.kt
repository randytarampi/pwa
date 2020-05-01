@file:JsModule("@randy.tarampi/lambda-logger")

package ext._randytarampi.lambda_logger

import ext.bunyan.Logger
import kotlin.js.Promise

external class LambdaLogger : Logger

external val createLogger: (packageJson: dynamic) -> LambdaLogger
external val configureLogger: (packageJson: dynamic) -> Promise<Unit>
