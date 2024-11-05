"use client";

import { createSlice } from "@reduxjs/toolkit";
import { GetArtistProfile } from "@/redux/artist/artist-action";

const initialState = {
    artistProfileData: {},
    isArtistProfileLoading: true,
    isArtistProfileError: false,
    artistProfileSuccessMessage: "",
    artistProfileErrorMessage: ""
}

export const artistSlice = createSlice(
    {
        name: "artist",
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            // Get Artist Profile
            builder.addCase(GetArtistProfile.pending, (state) => {
                state.isArtistProfileLoading = true;
                state.isArtistProfileError = false;
            });
            builder.addCase(GetArtistProfile.fulfilled, (state, { payload }) => {
                state.artistProfileData = payload.data;
                state.isArtistProfileLoading = false;
                state.isArtistProfileError = false;
                state.artistProfileSuccessMessage = "Artist Profile Get Successfully";
            });
            builder.addCase(GetArtistProfile.rejected, (state) => {
                state.isArtistProfileLoading = false;
                state.isArtistProfileError = true;
            });
        }
    }
);

export default artistSlice.reducer;