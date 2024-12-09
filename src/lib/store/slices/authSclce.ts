import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type IState  = {
    user: {
        name: string,
        email: string,
        admin: string,
        avatar: string,
        cart: object
    },

    isLoggedin: boolean,
    error: any
} 

const initialState: IState = {
    user: {
        name: '',
        email: '',
        admin: '',
        avatar: '',
        cart: {}
    },
    isLoggedin: false,
    error: null || ''
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(){
            initialState;
        },
    },
    
})

export const {logout} = authSlice.actions
export const authReducer =  authSlice.reducer