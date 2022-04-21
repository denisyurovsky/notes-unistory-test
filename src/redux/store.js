import {configureStore} from "@reduxjs/toolkit";
import notesReducer from "./slices/notesReducer";

export const store = configureStore({
    reducer: {
        notes: notesReducer
    }
})