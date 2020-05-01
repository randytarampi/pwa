@file:JsModule("events")
@file:Suppress("INTERFACE_WITH_SUPERCLASS", "OVERRIDING_FINAL_MEMBER", "RETURN_TYPE_MISMATCH_ON_OVERRIDE", "CONFLICTING_OVERLOADS", "EXTERNAL_DELEGATION", "NESTED_CLASS_IN_EXTERNAL_INTERFACE")

package ext.events

open external class EventEmitter {
    open fun eventNames(): Array<dynamic /* String | Number */> = definedExternally
    open fun setMaxListeners(n: Number): EventEmitter /* this */ = definedExternally
    open fun getMaxListeners(): Number = definedExternally
    open fun emit(type: String, vararg args: Any): Boolean = definedExternally
    open fun emit(type: Number, vararg args: Any): Boolean = definedExternally
    open fun addListener(type: String, listener: (args: Any) -> Unit): EventEmitter /* this */ = definedExternally
    open fun addListener(type: Number, listener: (args: Any) -> Unit): EventEmitter /* this */ = definedExternally
    open fun on(type: String, listener: (args: Any) -> Unit): EventEmitter /* this */ = definedExternally
    open fun on(type: Number, listener: (args: Any) -> Unit): EventEmitter /* this */ = definedExternally
    open fun once(type: String, listener: (args: Any) -> Unit): EventEmitter /* this */ = definedExternally
    open fun once(type: Number, listener: (args: Any) -> Unit): EventEmitter /* this */ = definedExternally
    open fun prependListener(type: String, listener: (args: Any) -> Unit): EventEmitter /* this */ = definedExternally
    open fun prependListener(type: Number, listener: (args: Any) -> Unit): EventEmitter /* this */ = definedExternally
    open fun prependOnceListener(type: String, listener: (args: Any) -> Unit): EventEmitter /* this */ = definedExternally
    open fun prependOnceListener(type: Number, listener: (args: Any) -> Unit): EventEmitter /* this */ = definedExternally
    open fun removeListener(type: String, listener: (args: Any) -> Unit): EventEmitter /* this */ = definedExternally
    open fun removeListener(type: Number, listener: (args: Any) -> Unit): EventEmitter /* this */ = definedExternally
    open fun off(type: String, listener: (args: Any) -> Unit): EventEmitter /* this */ = definedExternally
    open fun off(type: Number, listener: (args: Any) -> Unit): EventEmitter /* this */ = definedExternally
    open fun removeAllListeners(type: String? = definedExternally /* null */): EventEmitter /* this */ = definedExternally
    open fun removeAllListeners(type: Number? = definedExternally /* null */): EventEmitter /* this */ = definedExternally
    open fun listeners(type: String): Array<(args: Any) -> Unit> = definedExternally
    open fun listeners(type: Number): Array<(args: Any) -> Unit> = definedExternally
    open fun listenerCount(type: String): Number = definedExternally
    open fun listenerCount(type: Number): Number = definedExternally
    open fun rawListeners(type: String): Array<(args: Any) -> Unit> = definedExternally
    open fun rawListeners(type: Number): Array<(args: Any) -> Unit> = definedExternally

    companion object {
        fun listenerCount(emitter: EventEmitter, type: String): Number = definedExternally
        fun listenerCount(emitter: EventEmitter, type: Number): Number = definedExternally
        var defaultMaxListeners: Number = definedExternally
    }

    open fun removeAllListeners(): EventEmitter /* this */ = definedExternally
}
