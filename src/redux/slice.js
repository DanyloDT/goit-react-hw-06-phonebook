import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const addPrepareContacts = ({ name, number }) => {
  return { payload: { id: nanoid(), name, number } };
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.contacts.push(action.payload);
      },
      prepare: addPrepareContacts,
    },
    onDelete: (state, action) => {
      const index = state.contacts.findIndex(el => el.id === action.payload);
      state.contacts.splice(index, 1);
    },
    onFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { addContact, onDelete, onFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
