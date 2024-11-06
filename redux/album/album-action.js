import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let access_token = "";
if (typeof window !== "undefined") {
    access_token = localStorage.getItem("access_token");
}

export const GetAlbum = createAsyncThunk(
    "get/album",
    async ({ albumId }) => { // Accept albumId as an argument
        console.log("albumId:", albumId, access_token);
        try {
            const response = await axios.get(
                `https://riffcuria.achieveee.com/api/v1/album/${albumId}`,
                {
                    headers: {
                        // Authorization: `Bearer ${access_token}`, // Pass the token in the Authorization header
                        Accept: "application/json" // Set the Accept header
                    }
                }
            );
            console.log("GetArtistProfile response:", response);
            return response.data;
        } catch (error) {
            console.log("GetArtistProfile Error", error.response.data);
            throw error; // Re-throw the error to be handled in the slice
        }
    }
);
