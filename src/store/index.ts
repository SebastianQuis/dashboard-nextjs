import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";
import pokemonsSlice from "./pokemons/pokemonSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// TODO - STORE DE TODA LA APP

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    pokemons: pokemonsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
