package com.example.common

import kotlin.js.ExperimentalJsExport

@ExperimentalJsExport
class Greeting {
    fun greeting(): String {
        return "Hello, ${Platform().platform}!"
    }
}