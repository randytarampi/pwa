import ca.randytarampi.*
import ext._randytarampi.js.RequestError
import ext._randytarampi.serverless.responseBuilder
import kotlinext.js.Object
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.async
import kotlinx.coroutines.await

suspend fun parseFilesFromMultipartEvent(event: dynamic): dynamic = ext._randytarampi.serverless.parseFilesFromMultipartEvent(event).await()

suspend fun generateIcons(inputFile: dynamic, outputDirectory: String, format: String?, type: String?): dynamic = ext._randytarampi.pwa_asset_generator.generateIcons(inputFile = inputFile, outputDirectory = outputDirectory, format = format, type = type).await()

suspend fun generateSplashScreens(inputFile: dynamic, outputDirectory: String, format: String?, type: String?): dynamic = ext._randytarampi.pwa_asset_generator.generateSplashScreens(inputFile = inputFile, outputDirectory = outputDirectory, format = format, type = type).await()

@JsName("postAssets")
fun postAssets(event: dynamic, context: dynamic, callback: (Throwable?, dynamic) -> Unit) = GlobalScope.async {
    try {
        configureEnvironment()

        logger.debug("%s@%s handling request %s", context.functionName, context.functionVersion, context.awsRequestId, event, context)

        if (event.source == "serverless-plugin-warmup") {
            callbackOnWarmup(event, context, callback)
            return@async
        }

        if (event.headers["Content-Type"] == null && event.headers["content-type"] == null) {
            returnErrorResponse(event, context, callback)(RequestError("Missing Content-Type header", RequestError.codes.badRequest))
            return@async
        }

        val parsedMultipartEventFiles = parseFilesFromMultipartEvent(event)
        val parsedIconFile = parsedMultipartEventFiles.icon[Object.keys(parsedMultipartEventFiles.icon)[0]]
        val parsedSplashFile = parsedMultipartEventFiles.splash[Object.keys(parsedMultipartEventFiles.splash)[0]]

        val tempDirectoryPath = createTempDirectory()
        generateIcons(
            inputFile = parsedIconFile.data,
            outputDirectory = tempDirectoryPath,
            format = null,
            type = null
        )
        generateSplashScreens(
            inputFile = parsedSplashFile.data,
            outputDirectory = tempDirectoryPath,
            format = null,
            type = null
        )

        val zippedBuffer = zipDirectory(tempDirectoryPath)

        callback(null, responseBuilder(
            body = zippedBuffer.toString("base64"),
            statusCode = 200,
            isBase64Encoded = true,
            passedHeaders = js("JSON.parse( \"{\\\"Content-Type\\\":\\\"application/zip\\\",\\\"Content-Disposition\\\":\\\"attachment; filename=assets-.zip\\\"}\")")
        ))
    } catch (error: Throwable) {
        returnErrorResponse(event, context, callback)(error)
        throw error
    }
}


