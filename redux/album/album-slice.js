"use client";

import { createSlice } from "@reduxjs/toolkit";
import { GetAlbum } from "@/redux/album/album-action";

const initialState = {
    albumData: {},
    isAlbumLoading: true,
    isAlbumError: false,
    albumSuccessMessage: "",
    albumErrorMessage: "",
};

export const albumSlice = createSlice({
    name: "album",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Get album
        builder.addCase(GetAlbum.pending, (state) => {
            state.isAlbumLoading = true;
            state.isAlbumError = false;
        });
        builder.addCase(GetAlbum.fulfilled, (state, { payload }) => {
            console.log("aLBUM payload:", payload);
            state.albumData = payload.data;
            state.isAlbumLoading = false;
            state.isAlbumError = false;
            state.albumSuccessMessage = "album Get Successfully";
        });
        builder.addCase(GetAlbum.rejected, (state) => {
            state.isAlbumLoading = false;
            state.isAlbumError = true;
        });
    },
});

export default albumSlice.reducer;
