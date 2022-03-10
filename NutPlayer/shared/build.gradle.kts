import org.jetbrains.kotlin.gradle.plugin.mpp.apple.XCFramework

plugins {
    kotlin("multiplatform")
}

kotlin {

    js(IR) {
        browser {
        }
        binaries.executable()
    }
}