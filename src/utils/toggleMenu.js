import { createSlice } from "@reduxjs/toolkit";

const toggleMenu = createSlice({
    name: "toggle",
    initialState: {
        toggleTheMenu: false,
        toggleThePage: false,
    },
    reducers: {
        toggleDown: (state) => {
            state.toggleTheMenu = !state.toggleTheMenu;
        },
        togglePage: (state) => {
            state.toggleThePage = !state.toggleThePage;
        }
    }
})

export const { toggleDown, togglePage } = toggleMenu.actions;
export default toggleMenu.reducer;