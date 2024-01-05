import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import moviesReducer from "./movieSlice"
import toggleReducer from "./toggleMenu"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        toggle: toggleReducer,
    },
})

export default appStore;