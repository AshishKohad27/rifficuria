"use client";

import { createSlice } from "@reduxjs/toolkit";
import { GetTrackProfile } from "@/redux/track/track-action";

const initialState = {
    trackData: {},
    isTrackDataLoading: true,
    isTrackDataError: false,
    trackDataSuccessMessage: "",
    trackDataErrorMessage: ""
}

export const trackSlice = createSlice(
    {
        name: "track",
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            // Get Artist Profile
            builder.addCase(GetTrackProfile.pending, (state) => {
                state.isTrackDataLoading = true;
                state.isTrackDataError = false;
            });
            builder.addCase(GetTrackProfile.fulfilled, (state, { payload }) => {
                state.trackData = payload.data;
                state.isTrackDataLoading = false;
                state.isTrackDataError = false;
                state.trackDataSuccessMessage = "Artist Profile Get Successfully";
            });
            builder.addCase(GetTrackProfile.rejected, (state) => {
                state.isTrackDataLoading = false;
                state.isTrackDataError = true;
            });
        }
    }
);

export default trackSlice.reducer;