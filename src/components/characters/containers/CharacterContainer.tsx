import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { IRootState } from "src/store"
import { fetchCharacterById } from "src/reducers/characters/characterThunks"
import { characterSlice } from "src/reducers/characters/characterSlice"
import { Link, useParams } from "react-router-dom"
import { getBookId, getCharacterFromCharacterList, getCharacterId, getCharacterIds, getCharacterName } from "src/helpers/commonHelpers"
import Character from "../Character"

const CharacterContainer = () => {
	const dispatch = useDispatch()
	const { characterId } = useParams()

	const {
		currentCharacter,
		characterList,
		status,
	} = useSelector((store: IRootState) => store.characters)

	React.useEffect(() => {
		if (!characterId) { return }

		const character = getCharacterFromCharacterList(characterList, characterId)

		if (character) {
			dispatch(characterSlice.actions.setCurrentCharacter(character))
		} else {
			dispatch(fetchCharacterById(characterId) as any)
		}
	}, [dispatch, characterList, characterId])

	React.useEffect(() => {
		if (currentCharacter) {
			const urls = [
				currentCharacter.father,
				currentCharacter.mother,
				currentCharacter.spouse,
			]

			const charactersIds = getCharacterIds(urls)

			charactersIds.forEach((id) => {
				dispatch(fetchCharacterById(id) as any)
			})
		}
	}, [dispatch, currentCharacter])

	const getCharacterFromUrl = (url: string) => {
		const characterId = getCharacterId(url)
		const character = getCharacterFromCharacterList(characterList, characterId)

		return <Link to={`/character/${characterId}`}>{getCharacterName(character)}</Link>
	}

	const getBooksLink = (books: string[]) => (
		books.map((url) => {
			const id = getBookId(url)
			return <Link key={id} to={`/book/${id}`}>Book {id}</Link>
		})
	)

	const propsToPass = {
		characterList,
		currentCharacter,
		characterId,
		status,
		getCharacterFromUrl,
		getBooksLink,
	}

	return <Character {...propsToPass} />
}

export default CharacterContainer
