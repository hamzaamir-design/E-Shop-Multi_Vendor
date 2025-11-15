import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    loading: false,
    user: null,
    error: null,
};

export const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase("LoadUserRequest", (state) => {
            state.loading = true;
        })
        .addCase("LoadUserSuccess", (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        })
        .addCase("LoadUserFailure", (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.error = action.payload;
        })
        .addCase("ClearErrors", (state) => {
            state.error = null;
        });
});
