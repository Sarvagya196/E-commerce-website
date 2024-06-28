import { configureStore } from '@reduxjs/toolkit'
import cartNum from "../features/cartSize"


const store = configureStore({
    reducer: {
        cartCount: cartNum,
    },
})

export default store;