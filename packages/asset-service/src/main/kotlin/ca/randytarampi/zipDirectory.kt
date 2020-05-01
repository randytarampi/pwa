package ca.randytarampi

import ext.zip_dir.zipdir
import kotlin.coroutines.resume
import kotlin.coroutines.resumeWithException
import kotlin.coroutines.suspendCoroutine

suspend fun zipDirectory(pathToBeZipped: String, options: dynamic): dynamic = suspendCoroutine { continuation ->
    zipdir(pathToBeZipped, options, { error: Throwable?, buffer: dynamic ->
        if (error != null) {
            continuation.resumeWithException(error)
            return@zipdir
        }

        continuation.resume(buffer)
    })
}

suspend fun zipDirectory(pathToBeZipped: String): dynamic = zipDirectory(pathToBeZipped = pathToBeZipped, options = null)
