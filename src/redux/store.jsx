import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./filterSlice";
// import { persistStore } from "redux-persist";
import { contactSlice } from "./contactSlice";
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) => 
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoreActions: [FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER]
  //     }
  //   })
})

// export const persistor = persistStore(store);