import { createAsyncThunk } from '@reduxjs/toolkit'
import * as API from 'src/apis/book.axios'

export const fetchAllBooks = createAsyncThunk(
	'books/fetchAllBooks',
	async () => {
		const response = await API.fetchAllBooks()
		return response.data
	}
)

export const fetchBookById = createAsyncThunk(
	'books/fetchBookById',
	async (bookId: string) => {
		const response = await API.fetchBookById(bookId)
		return response.data
	}
)