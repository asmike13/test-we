import { ICharacter } from "src/types/character";

export const characterMock = {
	id: '1',
	url: 'https://anapioficeandfire.com/api/characters/1',
	name: 'string',
	gender: 'Male',
	culture: 'string',
	born: 'string',
	died: 'string',
	titles: ['string'],
	aliases: ['string'],
	father: 'string',
	mother: 'string',
	spouse: 'string',
	allegiances: ['string'],
	books: ['https://anapioficeandfire.com/api/books/1'],
	povBooks: ['https://anapioficeandfire.com/api/books/1'],
	tvSeries: ['string'],
	playedBy: ['string'],
} as ICharacter

export const charactersMock = [
	characterMock,
	{
		...characterMock,
		gender: 'Female',
		url: 'https://anapioficeandfire.com/api/characters/2',
	}
]