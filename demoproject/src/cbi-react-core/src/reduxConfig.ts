import { configureStore } from "@reduxjs/toolkit"

export let store: ReturnType<typeof configureStore>

export const reduxConfig = (options: Parameters<typeof configureStore>) => {
    store = configureStore(...options)
}

export const getStore = () => store
