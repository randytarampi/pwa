@file:JsModule("@randy.tarampi/pwa-asset-generator")

package ext._randytarampi.pwa_asset_generator

import kotlin.js.Promise

external interface Image {
    val size: String
    val width: Int
    val height: Int?
}

external interface Icon : Image
external interface Splash : Image {
    override val height: Int
}

external val icons: Array<Icon>
external val splashes: Array<Splash>
external val images: Array<Image>

external fun generateIcons(inputFile: dynamic, outputDirectory: String = definedExternally, format: String? = definedExternally, type: String? = definedExternally): Promise<Unit>
external fun generateSplashScreens(inputFile: dynamic, outputDirectory: String = definedExternally, format: String? = definedExternally, type: String? = definedExternally): Promise<Unit>
