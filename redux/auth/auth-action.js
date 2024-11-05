import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const LoginAuth = createAsyncThunk("login/auth", async ({ payload }) => {
    try {
        const response = await axios.post(
            "https://riffcuria.achieveee.com/api/v1/login",
            payload
        );
        return response.data;
    } catch (error) {
        console.log("LoginAuth error:", error);
        throw error;
    }
});

export const RegisterAuth = createAsyncThunk(
    "register/auth",
    async ({ payload }) => {
        try {
            const response = await axios.post(
                "https://riffcuria.achieveee.com/api/v1/register",
                payload
            );
            return response.data;
        } catch (error) {
            const { email, password } = error.response.data;
            console.log({ email, password });
            console.log("RegisterAuth Error", error.response.data);
        }
    }
);
