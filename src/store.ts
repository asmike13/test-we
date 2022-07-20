import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { booksSlice, initialState as InitBooksState } from "./reducers/books/bookSlice"
import { characterSlice, initialState as InitCharactersState } from "./reducers/characters/characterSlice"

const reducer = combineReducers({
	books: booksSlice.reducer,
	characters: characterSlice.reducer,
})

export interface IRootState {
	books: typeof InitBooksState,
	characters: typeof InitCharactersState,
}

export const store = configureStore({ reducer })
