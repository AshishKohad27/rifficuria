import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let access_token = "";
if (typeof window !== "undefined") {
    access_token = localStorage.getItem("access_token");
}

export const GetTrackProfile = createAsyncThunk(
    "get/track-profile",
    async ({ trackId }) => { // Accept trackId as an argument
        console.log("trackId:", trackId, access_token);
        try {
            const response = await axios.get(
                `https://riffcuria.achieveee.com/api/v1/track/${trackId}`,
                {
                    headers: {
                        // Authorization: `Bearer ${access_token}`, // Pass the token in the Authorization header
                        Accept: "application/json" // Set the Accept header
                    }
                }
            );
            console.log("GetTrackProfile response:", response);
            return response.data; // Return the response data for further use
        } catch (error) {
            console.log("GetArtistProfile Error", error.response.data);
            throw error; // Re-throw the error to be handled in the slice
        }
    }
);
