import { configureStore } from "@reduxjs/toolkit";
import testSlice from "@/redux/test/test-slice";
import authSlice from "@/redux/auth/auth-slice";
import globalSlice from "@/redux/global/global-slice";


export const store = configureStore({
    reducer: {
        test: testSlice,
        auth: authSlice,
        global: globalSlice,
    }
});

