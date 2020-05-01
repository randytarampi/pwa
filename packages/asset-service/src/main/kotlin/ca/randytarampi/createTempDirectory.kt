package ca.randytarampi

import ext.temp.mkdir
import kotlin.coroutines.resume
import kotlin.coroutines.resumeWithException
import kotlin.coroutines.suspendCoroutine

suspend fun createTempDirectory(suffix: String?, prefix: String?, dir: String?): String = suspendCoroutine { continuation ->
    mkdir(object {
        val suffix: String? = suffix
        val prefix: String? = prefix
        val dir: String? = dir
    }, { error: Throwable?, path: String ->
        if (error != null) {
            continuation.resumeWithException(error)
            return@mkdir
        }

        continuation.resume(path)
    })
}

suspend fun createTempDirectory(suffix: String?, prefix: String?): String = createTempDirectory(suffix = suffix, prefix = prefix, dir = null)
suspend fun createTempDirectory(prefix: String?): String = createTempDirectory(prefix = prefix, suffix = null)
suspend fun createTempDirectory(): String = createTempDirectory(null)
