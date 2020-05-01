@file:JsModule("@randy.tarampi/js")
@file:Suppress("INTERFACE_WITH_SUPERCLASS", "OVERRIDING_FINAL_MEMBER", "RETURN_TYPE_MISMATCH_ON_OVERRIDE", "CONFLICTING_OVERLOADS", "EXTERNAL_DELEGATION", "NESTED_CLASS_IN_EXTERNAL_INTERFACE")

package ext.bunyan

import ext.events.EventEmitter

open external class Logger(options: Logger.LoggerOptions) : EventEmitter {
    open fun addStream(stream: Logger.Stream): Unit = definedExternally
    open fun addSerializers(serializers: Logger.Serializers): Unit = definedExternally
    open fun child(options: Any, simple: Boolean? = definedExternally /* null */): Logger = definedExternally
    open fun reopenFileStreams(): Unit = definedExternally
    open fun level(): Number = definedExternally
    open fun level(value: Number): Unit = definedExternally
    open fun level(value: String /* "trace" */): Unit = definedExternally
    open fun level(value: String /* "debug" */): Unit = definedExternally
    open fun level(value: String /* "info" */): Unit = definedExternally
    open fun level(value: String /* "warn" */): Unit = definedExternally
    open fun level(value: String /* "error" */): Unit = definedExternally
    open fun level(value: String /* "fatal" */): Unit = definedExternally
    open fun levels(): Array<Number> = definedExternally
    open fun levels(name: String): Number = definedExternally
    open fun levels(name: Number): Number = definedExternally
    open fun levels(name: String, value: dynamic /* Number | String /* "trace" */ | String /* "debug" */ | String /* "info" */ | String /* "warn" */ | String /* "error" */ | String /* "fatal" */ */): Unit = definedExternally
    open fun levels(name: Number, value: dynamic /* Number | String /* "trace" */ | String /* "debug" */ | String /* "info" */ | String /* "warn" */ | String /* "error" */ | String /* "fatal" */ */): Unit = definedExternally
    open var fields: Any = definedExternally
    open var src: Boolean = definedExternally
    open fun trace(): Boolean = definedExternally
    open fun trace(obj: Any, vararg params: Any): Unit = definedExternally
    open fun debug(): Boolean = definedExternally
    open fun debug(obj: Any, vararg params: Any): Unit = definedExternally
    open fun info(): Boolean = definedExternally
    open fun info(obj: Any, vararg params: Any): Unit = definedExternally
    open fun warn(): Boolean = definedExternally
    open fun warn(obj: Any, vararg params: Any): Unit = definedExternally
    open fun error(): Boolean = definedExternally
    open fun error(obj: Any, vararg params: Any): Unit = definedExternally
    open fun fatal(): Boolean = definedExternally
    open fun fatal(obj: Any, vararg params: Any): Unit = definedExternally

    object nameFromLevel {
        operator fun get(level: Number): String?
        operator fun set(level: Number, value: String)
    }

    interface Stream {
        var type: String? get() = definedExternally; set(value) = definedExternally
        var level: dynamic /* Number | String /* "trace" */ | String /* "debug" */ | String /* "info" */ | String /* "warn" */ | String /* "error" */ | String /* "fatal" */ */ get() = definedExternally; set(value) = definedExternally
        var path: String? get() = definedExternally; set(value) = definedExternally
        var stream: dynamic /* NodeJS.WritableStream | Stream */ get() = definedExternally; set(value) = definedExternally
        var closeOnExit: Boolean? get() = definedExternally; set(value) = definedExternally
        var period: String? get() = definedExternally; set(value) = definedExternally
        var count: Number? get() = definedExternally; set(value) = definedExternally
        var name: String? get() = definedExternally; set(value) = definedExternally
        var reemitErrorEvents: Boolean? get() = definedExternally; set(value) = definedExternally
    }

    interface LoggerOptions {
        var name: String
        var streams: Array<Stream>? get() = definedExternally; set(value) = definedExternally
        var level: dynamic /* Number | String /* "trace" */ | String /* "debug" */ | String /* "info" */ | String /* "warn" */ | String /* "error" */ | String /* "fatal" */ */ get() = definedExternally; set(value) = definedExternally
        var stream: dynamic get() = definedExternally; set(value) = definedExternally
        var serializers: Serializers? get() = definedExternally; set(value) = definedExternally
        var src: Boolean? get() = definedExternally; set(value) = definedExternally
        operator fun get(custom: String): Any?
        operator fun set(custom: String, value: Any)
    }

    interface Serializers {
        operator fun get(key: String): ((input: Any) -> Any)?
        operator fun set(key: String, value: (input: Any) -> Any)
    }

    interface StdSerializers : Serializers {
        var err: (input: Any) -> Any
        var res: (input: Any) -> Any
        var req: (input: Any) -> Any
    }

    interface RingBufferOptions {
        var limit: Number? get() = definedExternally; set(value) = definedExternally
    }

    open class RingBuffer(options: RingBufferOptions) : EventEmitter {
        open var writable: Boolean = definedExternally
        open var records: Array<Any> = definedExternally
        open fun write(record: Any): Boolean = definedExternally
        open fun end(record: Any? = definedExternally /* null */): Unit = definedExternally
        open fun destroy(): Unit = definedExternally
        open fun destroySoon(): Unit = definedExternally
    }

    interface RotatingFileStreamOptions {
        var path: String
        var count: Number? get() = definedExternally; set(value) = definedExternally
        var period: String? get() = definedExternally; set(value) = definedExternally
    }

    open class RotatingFileStream(options: RotatingFileStreamOptions) : EventEmitter {
        open var writable: Boolean = definedExternally
        open var periodNum: Number = definedExternally
        open var periodScope: String = definedExternally
        open var stream: Any = definedExternally
        open var rotQueue: Array<Any> = definedExternally
        open var rotating: Boolean = definedExternally
        open fun write(record: Any): Boolean = definedExternally
        open fun end(record: Any? = definedExternally /* null */): Unit = definedExternally
        open fun destroy(): Unit = definedExternally
        open fun destroySoon(): Unit = definedExternally
        open fun rotate(): Unit = definedExternally
    }

    companion object {
        var TRACE: Number = definedExternally
        var DEBUG: Number = definedExternally
        var INFO: Number = definedExternally
        var WARN: Number = definedExternally
        var ERROR: Number = definedExternally
        var FATAL: Number = definedExternally
        var levelFromName: Any? = definedExternally
        var stdSerializers: StdSerializers = definedExternally
        fun createLogger(options: LoggerOptions): Logger = definedExternally
        fun safeCycles(): (key: String, value: Any) -> Any = definedExternally
        fun resolveLevel(value: Number): Number = definedExternally
        fun resolveLevel(value: String /* "trace" */): Number = definedExternally
        fun resolveLevel(value: String /* "debug" */): Number = definedExternally
        fun resolveLevel(value: String /* "info" */): Number = definedExternally
        fun resolveLevel(value: String /* "warn" */): Number = definedExternally
        fun resolveLevel(value: String /* "error" */): Number = definedExternally
        fun resolveLevel(value: String /* "fatal" */): Number = definedExternally
    }
}
