package ext.zip_dir

@JsModule("zip-dir")
external fun zipdir(pathToBeZipped: String, options: dynamic, callback: (error: Throwable?, buffer: dynamic) -> Unit)
