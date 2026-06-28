package ext.zipDir

@JsModule("zip-dir")
external fun zipdir(
    pathToBeZipped: String,
    options: dynamic,
    callback: (error: Throwable?, buffer: dynamic) -> Unit,
)
