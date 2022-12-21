import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { sideDrawerLinks, SideDrawerLink } from "../../interfaces/SideBarLink"
import authenticationService from "../../services/authentication.service";

export interface UiState {
    drawerOpen: boolean;
    modalOpen: boolean;
    sideDrawerLinks: Array<SideDrawerLink>;
}

const initialState: UiState = {
    drawerOpen: authenticationService.loggedIn() ? true : false,
    modalOpen: false,
    sideDrawerLinks: []
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