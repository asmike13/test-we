import { IBook } from "src/types/book";

export const bookMock = {
	authors: ['string'],
	characters: ['https://anapioficeandfire.com/api/characters/1'],
	country: 'string',
	isbn: 'string',
	mediaType: 'string',
	name: 'string',
	numberOfPages: 1,
	povCharacters: ['https://anapioficeandfire.com/api/characters/1'],
	publisher: 'string',
	released: '1996-08-01T00:00:00',
	url: 'https://anapioficeandfire.com/api/books/1',
} as IBook

export const booksMock = [
	bookMock,
	{
		...bookMock,
		url: 'https://anapioficeandfire.com/api/books/2',
	},
]