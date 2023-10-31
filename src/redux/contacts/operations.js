import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64aa7b5e0c6d844abede7caa.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get('/contacts');
  return response.data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const response = await axios.post('/contacts', contact);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
  }
);
