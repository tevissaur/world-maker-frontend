import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../interfaces/IUser"

export interface UserState {
    userData: IUser;
}

const initialState: UserState = {
    userData: {
        username: '',
        worlds: []
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: ((state, action: PayloadAction<IUser>) => {
            state.userData = action.payload
        })
    },
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer