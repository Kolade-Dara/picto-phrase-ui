import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store'

interface UserDetails {
    image: string;
    username: string;
}

interface AuthState {
    authenticated: boolean,
    user_details: UserDetails
}

const initialState: AuthState = {
    authenticated: false,
    user_details: {
        image: '',
        username: ''
    }
}

export const authSlice = createSlice({
    name: 'auth',

    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserDetails>) => {
            localStorage.setItem("user", JSON.stringify(action.payload));
            state.authenticated = true,
            state.user_details = action.payload
        },
        logout: (state) => {
            localStorage.clear();
            state.authenticated = false,
            state.user_details = {image: '', username: ''}
        }
    }
})

export const { login, logout } = authSlice.actions
export const authStatus = (state: RootState) => state.auth
export default authSlice.reducer