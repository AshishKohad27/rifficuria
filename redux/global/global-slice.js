"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profileTabs: 'top_reviews',
};

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setProfileTab: (state, action) => {
            return {
                ...state,
                profileTabs: action.payload
            }
        }
    }
});

export const { setProfileTab } = globalSlice.actions;
export default globalSlice.reducer;