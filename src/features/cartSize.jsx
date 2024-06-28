import { createSlice } from "@reduxjs/toolkit"

const user = JSON.parse(localStorage.getItem("activeUser"));
let cartItems = JSON.parse(localStorage.getItem("cartProducts"));
cartItems = cartItems.filter((item) => (item?.userId === user?.id));
export const cartSlice = createSlice({
    name: "cartCount",
    initialState: {
        value: cartItems?.length,
    },

    reducers: {
        newSize: (state, action) => {
            state.value = action.payload.value;
        }
    }
})

export const { newSize } = cartSlice.actions;
export default cartSlice.reducer;