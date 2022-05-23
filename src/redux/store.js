import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./authurization/auth-reducers";

const store = configureStore({
    reducer: {
        auth: authReducers
    }
});

export default store;