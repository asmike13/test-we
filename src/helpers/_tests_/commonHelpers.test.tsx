import { IBook } from 'src/types/book'
import { ICharacter } from 'src/types/character'
import {
	getBookId,
	getCharacterId,
	getCharacterIds,
	getCharacterName,
	getBookFromBookList,
	getCharacterFromCharacterList,
} from '../commonHelpers'

it('should get the book id from url', async () => {
	const id = getBookId('http://whatever.com/books/1')
	expect(id).toEqual('1')
})

it('should get the character id from url', async () => {
	const id = getCharacterId('http://whatever.com/characters/1')
	expect(id).toEqual('1')
})

it('should get the character ids from url array', async () => {
	const ids = getCharacterIds(['http://whatever.com/characters/1', 'http://whatever.com/characters/2'])
	expect(ids).toEqual(['1', '2'])
})

it('should get the character name from character name', async () => {
	const ids = getCharacterName({ name: 'name' } as ICharacter)
	expect(ids).toEqual('name')
})

it('should get the character name from first\'s character alias if no name', async () => {
	const ids = getCharacterName({ aliases: ['name1', 'name2'] } as ICharacter)
	expect(ids).toEqual('name1')
})

it('should get the book from book list by url id', async () => {
	const ids = getBookFromBookList([{ url: 'http://whatever.com/books/1' }, { url: 'http://whatever.com/books/2' }] as IBook[], '2')
	expect(ids).toEqual({ url: 'http://whatever.com/books/2' })
})

it('should get the character from character list by url id', async () => {
	const ids = getCharacterFromCharacterList([{ url: 'http://whatever.com/characters/1' }, { url: 'http://whatever.com/characters/2' }] as ICharacter[], '2')
	expect(ids).toEqual({ url: 'http://whatever.com/characters/2' })
})