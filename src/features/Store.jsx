
import { createStore } from "redux";
import bookReducer from "./BookReducer";

export const store = createStore(bookReducer);
