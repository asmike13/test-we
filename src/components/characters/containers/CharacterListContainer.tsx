import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/store";
import { fetchCharacterById } from "src/reducers/characters/characterThunks";
import { useNavigate } from "react-router-dom";
import { characterSlice } from "src/reducers/characters/characterSlice";
import CharacterList from "../CharacterList";
import { getCharacterIds } from "src/helpers/commonHelpers";

const CharacterListContainer = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [counter, setCounter] = React.useState(0)

	const loadSize = 5

	const {
		currentBook
	} = useSelector((store: IRootState) => store.books)

	const {
		characterList,
		status,
	} = useSelector((store: IRootState) => store.characters)

	React.useEffect(() => {
		// reset before getting new list
		dispatch(characterSlice.actions.resetList())

		const el = document.querySelector('#character-scroll-list')

		// apply lazy load
		if (el) {
			el.addEventListener('scroll', () => {
				if (el.scrollTop >= el.scrollHeight - el.clientHeight) {
					setCounter(c => c + loadSize)
				}
			})
		}
	}, [dispatch])

	React.useEffect(() => {
		if (!currentBook) { return }

		const characters = currentBook.characters.slice(counter, counter + loadSize);

		const charactersIds = getCharacterIds(characters)

		charactersIds.forEach((id) => {
			dispatch(fetchCharacterById(id) as any)
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, counter])

	const onCharacterClick = (id?: string) => {
		navigate(`/character/${id}`)
	}

	const propsToPass = {
		status,
		characterList,
		onCharacterClick,
	}

	return <CharacterList {...propsToPass} />
}

export default CharacterListContainer;
