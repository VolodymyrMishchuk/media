import { configureStore } from "@reduxjs/toolkit";
import { usersReduser } from "./slices/usersSlice";

export const store = configureStore({
    reducer: {
        users: usersReduser
    }
});

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';