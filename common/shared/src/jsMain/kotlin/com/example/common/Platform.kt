package com.example.common

import kotlin.js.ExperimentalJsExport

@ExperimentalJsExport
actual class Platform actual constructor() {
    actual val platform: String = "Web Platform"
}