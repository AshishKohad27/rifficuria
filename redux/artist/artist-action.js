import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let access_token = "";
if (typeof window !== "undefined") {
    access_token = localStorage.getItem("access_token");
}

export const GetArtistProfile = createAsyncThunk(
    "get/artist-profile",
    async ({ artistId }) => { // Accept artistId as an argument
        console.log("artistId:", artistId, access_token);
        try {
            const response = await axios.get(
                `https://riffcuria.achieveee.com/api/v1/artist/${artistId}`,
                {
                    headers: {
                        // Authorization: `Bearer ${access_token}`, // Pass the token in the Authorization header
                        Accept: "application/json" // Set the Accept header
                    }
                }
            );
            console.log("GetArtistProfile response:", response);
            return response.data; // Return the response data for further use
        } catch (error) {
            console.log("GetArtistProfile Error", error.response.data);
            throw error; // Re-throw the error to be handled in the slice
        }
    }
);
