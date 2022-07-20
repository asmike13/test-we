import { IBook } from "../types/book"
import { ICharacter } from "../types/character"

export const getBookId = (url: string) => url.split('books/')[1]

export const getCharacterId = (url: string) => url.split('characters/')[1]
export const getCharacterIds = (urls: string[]) => urls
	.map((url) => getCharacterId(url))
	// remove undefined ids
	.filter((url) => url)

export const getCharacterName = (character?: ICharacter) => character?.name || character?.aliases[0] || ''

export const getBookFromBookList = (bookList: IBook[], id: string) => bookList.find((book) => getBookId(book.url) === id)
export const getCharacterFromCharacterList = (characterList: ICharacter[], id?: string) => characterList.find((character) => getCharacterId(character.url) === id)
