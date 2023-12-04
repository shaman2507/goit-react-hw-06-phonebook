import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";


const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        createContacts: (state, actions) => ({
            ...state,
            contacts: [...state.contacts, actions.payload],
        }),
        deleteContacts: (state, actions) => ({
            ...state,
            contacts: actions.payload,
        })
    }
});

export const contactsReducer = contactsSlice.reducer;
export const {createContacts, deleteContacts} = contactsSlice.actions