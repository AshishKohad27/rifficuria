"use client";

import { createSlice } from "@reduxjs/toolkit";

// Check if "isAuth" exists in localStorage to persist authentication state
const isAuthFromLocalStorage = typeof window !== "undefined" ? localStorage.getItem("isAuth") === "true" : false;

const initialState = {
    value: 0,
    loading: false,
    error: false,
    successMessage: '',
    errorMessage: '',
    data: [],
    isAuth: isAuthFromLocalStorage, // Initialize from localStorage if available
    AuthorizedUserDetails: []
}

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        clearState: (state) => {
            return {
                ...state,
                value: 0,
                loading: false,
                error: false,
                successMessage: '',
                errorMessage: '',
                AuthorizedUserDetails: []
            };
        },
        logout: (state) => {
            console.log("Logout!!");
            state.isAuth = false;
            localStorage.setItem("isAuth", "false"); // Update localStorage
        },
        login: (state, action) => {
            console.log("Login!!");
            state.loading = false;
            state.error = false;
            state.isAuth = true;
            localStorage.setItem("isAuth", "true"); // Store the authentication status
        },
    },
});

export const { increment, decrement, clearState, logout, login } = testSlice.actions;

export default testSlice.reducer;
