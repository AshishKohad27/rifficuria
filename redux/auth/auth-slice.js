"use client";

import { createSlice } from "@reduxjs/toolkit";

// Check if "isAuth" exists in localStorage to persist authentication state
const isAuthFromLocalStorage = typeof window !== "undefined" ? localStorage.getItem("isAuth") === "true" : false;

const initialState = {
    loading: true,
    error: false,
    successMessage: '',
    errorMessage: '',
    isAuth: isAuthFromLocalStorage,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearState: (state) => {
            return state = {
                ...state,
                loading: false,
                error: false,
                successMessage: '',
                errorMessage: '',
                isAuth: false,
            };
        },
        logout: (state) => {
            localStorage.setItem("isAuth", "false");
            return state = {
                ...state,
                isAuth: false
            };
        },
        login: (state) => {
            localStorage.setItem("isAuth", "true");
            return state = {
                ...state,
                isAuth: true,
                loading: false,
                error: false,
            };
        },
        startLoading: (state) => {
            // console.log("startLoading");
            return state = {
                ...state,
                loading: true,
            };
        },
        stopLoading: (state) => {
            // console.log("stopLoading");
            return state = {
                ...state,
                loading: false
            };
        },
    },
});

// Export actions
export const { clearState, logout, login, startLoading, stopLoading } = authSlice.actions;

export const checkAuth = () => (dispatch) => {
    // console.log("checkAuth");
    dispatch(startLoading());
    setTimeout(() => {
        dispatch(stopLoading());
    }, 500);
};

export default authSlice.reducer;
