import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { sideDrawerLinks, ISideDrawerLink } from "../../interfaces/ISideBarLink"
import authenticationService from "../../utils/auth";

export interface UiState {
    drawerOpen: boolean;
    modalOpen: boolean;
    sideDrawerLinks: Array<ISideDrawerLink>;
    isDarkMode: boolean
}

const initialState: UiState = {
    drawerOpen: authenticationService.loggedIn() ? true : false,
    modalOpen: false,
    sideDrawerLinks: [],
    isDarkMode: false,
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleDrawer: ((state) => {
            state.drawerOpen = !state.drawerOpen
        }),
        toggleModal: ((state) => {
            state.modalOpen = !state.modalOpen
        })
    }
})


export const { toggleDrawer, toggleModal } = uiSlice.actions

export default uiSlice.reducer