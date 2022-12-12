import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import charactersReducer from "./reducers/characters.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  characters: charactersReducer,
});

export type GlobalState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<GlobalState> = useReduxSelector;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
