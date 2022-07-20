import { createSlice } from '@reduxjs/toolkit'
import { fetchAllBooks, fetchBookById } from './bookThunks'
import { IBook } from '../../types/book'

interface IInitialState {
	bookList: IBook[]
	currentBook?: IBook
	status: 'idle' | 'fulfilled' | 'pending' | 'rejected'
	error?: any
}

export const initialState: IInitialState = {
	bookList: [],
	status: 'idle',
}

export const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		setCurrentBook: (state, action: { payload: IBook }) => {
			state.currentBook = action.payload
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllBooks.pending, (state) => {
				state.status = 'pending'
			})
			.addCase(fetchAllBooks.rejected, (state, action) => {
				state.status = 'rejected'
			})
			.addCase(fetchAllBooks.fulfilled, (state, action) => {
				state.bookList = action.payload
				state.status = 'fulfilled'
			})
			.addCase(fetchBookById.pending, (state) => {
				state.status = 'pending'
			})
			.addCase(fetchBookById.rejected, (state) => {
				state.status = 'rejected'
			})
			.addCase(fetchBookById.fulfilled, (state, action) => {
				state.currentBook = action.payload
				state.status = 'fulfilled'
			})
	},
})
