@file:JsModule("@randy.tarampi/serverless")

package ext._randytarampi.serverless

import ext._randytarampi.lambda_logger.LambdaLogger
import kotlin.js.Promise

external interface Response {
    val statusCode: Int
    var body: String?
    val headers: dynamic
    val isBase64Encoded: Boolean?
}

external fun responseBuilder(
    body: String? = definedExternally,
    statusCode: Number? = definedExternally,
    passedHeaders: dynamic = definedExternally,
    isBase64Encoded: Boolean? = definedExternally
): Response

external fun returnErrorResponseForLogger(logger: LambdaLogger): (event: dynamic, context: dynamic, callback: (error: Throwable, response: Response) -> Unit) -> ((error: dynamic) -> Unit)

external fun configureAwsSdk(logger: LambdaLogger): dynamic

external fun parseFilesFromMultipartEvent(event: dynamic): Promise<dynamic>
