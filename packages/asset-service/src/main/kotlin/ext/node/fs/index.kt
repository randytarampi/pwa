@file:JsModule("fs")

package ext.node.fs

external fun writeFile(path: dynamic, data: dynamic, options: dynamic, callback: (error: Throwable?) -> Unit)
external fun writeFile(path: dynamic, data: dynamic, callback: (error: Throwable?) -> Unit)
external fun writeFileSync(path: dynamic, data: dynamic, options: dynamic)
external fun writeFileSync(path: dynamic, data: dynamic)

external fun readFile(path: dynamic, options: dynamic, callback: (error: Throwable?, data: dynamic) -> Unit)
external fun readFile(path: dynamic, callback: (error: Throwable?, data: dynamic) -> Unit)
external fun readFileSync(path: dynamic, options: dynamic): dynamic
external fun readFileSync(path: dynamic): dynamic
