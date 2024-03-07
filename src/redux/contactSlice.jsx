import { createSlice, nanoid } from "@reduxjs/toolkit";
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from "redux-persist";

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    add(state, action) {
      const newContact = {
        id: nanoid(),
        contactName: action.payload.name,
        number: action.payload.number,
      }
      return state.push(newContact)
    },
    remove(state, action) {
      const newState = state.filter(contact => contact.id !== action.payload);
      return newState
    }
  }
})
  
// const persistConfig = {
//   key: 'contacts',
//   storage: storage,
// }

// export const contactReducer = persistReducer(persistConfig, contactSlice.reducer);

export const { add, remove } = contactSlice.actions;