import { configureStore } from "@reduxjs/toolkit";
import testSlice from "@/redux/test/test-slice";
import authSlice from "@/redux/auth/auth-slice";
import globalSlice from "@/redux/global/global-slice";
import artistSlice from "@/redux/artist/artist-slice";
import albumSlice from "@/redux/album/album-slice";
import userSlice from "@/redux/user/user-slice";
import trackSlice from "@/redux/track/track-slice";



export const store = configureStore({
    reducer: {
        test: testSlice,
        auth: authSlice,
        global: globalSlice,
        artist: artistSlice,
        album: albumSlice,
        user: userSlice,
        track: trackSlice,
    }
});

