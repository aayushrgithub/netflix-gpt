import { createSlice } from "@reduxjs/toolkit";

const toggleMenu = createSlice({
    name: "toggle",
    initialState: {
        toggleTheMenu: false,
    },
    reducers: {
        toggleDown: (state) => {
            state.toggleTheMenu = !state.toggleTheMenu;
        }
    }
})

export const { toggleDown } = toggleMenu.actions;
export default toggleMenu.reducer;