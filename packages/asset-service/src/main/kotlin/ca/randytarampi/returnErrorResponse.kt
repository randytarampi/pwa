package ca.randytarampi

import ext._randytarampi.serverless.Response
import ext._randytarampi.serverless.returnErrorResponseForLogger

fun returnErrorResponse(event: dynamic, context: dynamic, callback: (error: Throwable?, response: Response) -> Unit): ((error: dynamic) -> Unit) = {
    returnErrorResponseForLogger(logger)(event, context, callback)
}
