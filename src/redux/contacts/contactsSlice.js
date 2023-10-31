import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { pendingReducer, fulfilledReducer, rejectedReducer } from './reducers';

const initialContactsState = {
  items: [],
  isLoading: false,
  error: null,
};

const extraActions = [fetchContacts, addContact, deleteContact];
const getActions = type =>
  isAnyOf(
    ...extraActions.map(action => {
      return action[type];
    })
  );

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addMatcher(getActions('pending'), pendingReducer)
      .addMatcher(getActions('fulfilled'), fulfilledReducer)
      .addMatcher(getActions('rejected'), rejectedReducer),
});

export const contactsReducer = contactsSlice.reducer;
