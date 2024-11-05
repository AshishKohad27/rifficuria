import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let access_token = "";
if (typeof window !== "undefined") {
    access_token = localStorage.getItem("access_token");
}

export const GetUser = createAsyncThunk("get/user", async () => {
    console.log("GetUser")
    try {
        const response = await axios.get(
            `https://riffcuria.achieveee.com/api/v1/user-profile`,
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    Accept: "application/json",
                },
            }
        );
        // console.log("GetUser response:", response.data);
        return response.data;
    } catch (error) {
        console.log("GetUser Error", error.response.data);
        throw error;
    }
});
