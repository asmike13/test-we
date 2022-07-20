import axios, { AxiosResponse } from 'axios';
import { IBook } from '../types/book';

export const fetchAllBooks = async (): Promise<AxiosResponse<IBook[]>> => {
	const response = await axios.get('https://anapioficeandfire.com/api/books')
	return response
}

export const fetchBookById = async (bookId: string): Promise<AxiosResponse<IBook>> => {
	const response = await axios.get(`https://anapioficeandfire.com/api/books/${bookId}`)
	return response
}
