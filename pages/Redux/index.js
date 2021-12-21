// import {combineReducers, configureStore} from '@reduxjs/toolkit'
// import toolkitAuth from './AuthSlice'

// const rootReducer = combineReducers({
//   toolkitAuth
// })

// export const store = configureStore({
//   reducer: rootReducer
// })

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Reducers";

export default configureStore({
  reducer: {
    auth: counterReducer,
  },

  devTools: true,
});
