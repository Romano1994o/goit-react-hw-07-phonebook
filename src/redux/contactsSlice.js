import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  contacts: [],
};


const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    
    deleteContact: (state, action) => {
      const indexOfContactToDelete = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(indexOfContactToDelete, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
