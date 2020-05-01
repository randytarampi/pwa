@file:JsModule("temp")

package ext.temp

external interface TempModuleCreationOutput {
    val path: String
    val fd: dynamic
}

external interface TempModuleCleanupOutput {
    val files: Int
    val dirs: Int
}

external fun path(prefix: dynamic)
external fun track()

external fun mkdir(prefix: dynamic, callback: (error: Throwable?, createdDirectory: String) -> Unit)
external fun mkdirSync(prefix: dynamic): String

external fun open(prefix: dynamic, callback: (error: Throwable?, createdFile: TempModuleCreationOutput) -> Unit)
external fun openSync(prefix: dynamic): TempModuleCreationOutput

external fun cleanup(callback: (error: Throwable?, cleanupMetadata: TempModuleCleanupOutput) -> Unit)
external fun cleanupSync(): TempModuleCleanupOutput
