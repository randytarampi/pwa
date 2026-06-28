package ca.randytarampi

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull
import kotlin.test.assertNull

class CallbackOnWarmupTest {
    @Test
    fun worksAsExpected() {
        val stubEvent =
            object {
                val body: String = "woof"
                val headers =
                    object {
                        val meow: String = "grr"
                    }
                val isBase64Encoded: Boolean = false
                val source: String = "rawr"
            }
        val stubContext =
            object {
                val functionName: String = "argh"
                val functionVersion: String = "ugh"
                val awsRequestId: String = "ahh"
            }
        val stubCallback: (Throwable?, String?) -> Unit = { error, response ->
            assertNull(error, "`error` is null")
            assertEquals(
                "Lambda is warm!",
                response,
                "`message` is not `\"Lambda is warm!\"`",
            )
        }

        callbackOnWarmup(stubEvent, stubContext, stubCallback)
    }

    @Test
    fun handlesErrors() {
        val stubEvent =
            object {
                val body: String = "woof"
                val headers =
                    object {
                        val meow: String = "grr"
                    }
                val isBase64Encoded: Boolean = false
                val source: String = "rawr"
            }
        val stubContext = null
        val stubCallback: (Throwable?, String?) -> Unit = { error, response ->
            assertNotNull(error, "`error` is not null")
            assertEquals(
                "Lambda warmup failed",
                response,
                "`message` is not `\"Lambda warmup failed\"`",
            )
        }

        callbackOnWarmup(stubEvent, stubContext, stubCallback)
    }
}
