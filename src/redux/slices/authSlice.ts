import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store'

interface UserDetails {
    image: string;
    username: string;
    games_won: number
}

interface AuthState {
    authenticated: boolean,
    user_details: UserDetails,

}

const initialState: AuthState = {
    authenticated: false,
    user_details: {
        image: '',
        username: '',
        games_won: 0
    },
}

export const authSlice = createSlice({
    name: 'auth',

    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ user: UserDetails, token: string }>) => {
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("token", action.payload.token);
            state.authenticated = true;
            state.user_details = action.payload.user
        },
        logout: (state) => {
            localStorage.clear();
            state.authenticated = false;
            state.user_details = { image: '', username: '', games_won: 0 }
        }
    }
})

export const { login, logout } = authSlice.actions
export const authStatus = (state: RootState) => state.auth
export default authSlice.reducer