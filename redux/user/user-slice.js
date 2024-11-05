"use client";

import { createSlice } from "@reduxjs/toolkit";
import { GetUser } from "@/redux/user/user-action";

const initialState = {
    userData: {},
    isUserLoading: true,
    isUserError: false,
    userSuccessMessage: "",
    userErrorMessage: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetUser.pending, (state) => {
            state.isUserLoading = true;
            state.isUserError = false;
        });
        builder.addCase(GetUser.fulfilled, (state, { payload }) => {
            state.userData = payload;
            state.isUserLoading = false;
            state.isUserError = false;
            state.userSuccessMessage = "User Get Successfully";
        });
        builder.addCase(GetUser.rejected, (state) => {
            state.isUserLoading = false;
            state.isUserError = true;
        });

        
    },
});

export default userSlice.reducer;
