import ca.randytarampi.configureEnvironment
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.async
import kotlin.test.Test
import kotlin.test.assertNull

class ConfigureEnvironmentTest {
    @Test
    fun worksAsExpected() = GlobalScope.async {
        try {
            configureEnvironment()
        } catch (error: Throwable) {
            assertNull(error, "`error` is null")
        }
    }
}
