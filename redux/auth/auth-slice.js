"use client";

import { createSlice } from "@reduxjs/toolkit";
import { LoginAuth, RegisterAuth } from "@/redux/auth/auth-action";

let cookiesToken = "";
if (typeof window !== 'undefined') {
    cookiesToken = window.localStorage.getItem("access_token") || '';
}

const initialState = {
    loading: true,
    error: false,
    successMessage: "",
    errorMessage: "",
    token: "",
    isAuth: !!cookiesToken,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearState: (state) => {
            return (state = {
                ...state,
                loading: false,
                error: false,
                successMessage: "",
                errorMessage: "",
                isAuth: false,
            });
        },
        logout: (state) => {
            localStorage.removeItem('access_token');
            return (state = {
                ...state,
                isAuth: false,
            });
        },
        login: (state) => {
            return (state = {
                ...state,
                isAuth: true,
                loading: false,
                error: false,
            });
        },
        startLoading: (state) => {
            return (state = {
                ...state,
                loading: true,
            });
        },
        stopLoading: (state) => {
            return (state = {
                ...state,
                loading: false,
            });
        },
    },
    extraReducers: (builder) => {
        // Register
        builder.addCase(RegisterAuth.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        builder.addCase(RegisterAuth.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            state.successMessage = action.message;
        })
        builder.addCase(RegisterAuth.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });

        // Login
        builder.addCase(LoginAuth.pending, (state) => {
            state.loading = true;
            state.error = false;
            localStorage.removeItem('access_token');
        });
        builder.addCase(LoginAuth.fulfilled, (state, action) => {
            state.successMessage = "Login successfully";
            localStorage.setItem("access_token", action.payload.access_token);
            state.token = action.payload.access_token;
            state.loading = false;
            state.error = false;
            state.isAuth = true;
        });
        builder.addCase(LoginAuth.rejected, (state) => {
            state.loading = false;
            state.error = true;
            localStorage.removeItem('token_taza');
        });
    },
});

// Export actions
export const { clearState, logout, login, startLoading, stopLoading } =
    authSlice.actions;

export const checkAuth = () => (dispatch) => {
    dispatch(startLoading());
    setTimeout(() => {
        dispatch(stopLoading());
    }, 500);
};

export default authSlice.reducer;
