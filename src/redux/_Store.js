import { configureStore } from "@reduxjs/toolkit";

// Reducer Imports:
import counterReducer from "./reducers/counter";

export default configureStore({
  reducer: {
    counter: counterReducer
  }
});
