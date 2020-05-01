package ca.randytarampi

fun callbackOnWarmup(event: dynamic, context: dynamic, callback: (Throwable?, String) -> Unit) {
    try {
        logger.debug("%s@%s warmed up request %s", context.functionName, context.functionVersion, context.awsRequestId, event, context)
        callback(null, "Lambda is warm!")
    } catch (error: Throwable) {
        callback(error, "Lambda warmup failed")
    }
}
