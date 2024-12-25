// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./slices/notesSlice"
import authReducer from "./slices/authSlice"
export const store = configureStore({
    reducer: {
        notes: notesReducer,
        authSlice: authReducer,
    }
});
