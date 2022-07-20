import { createAsyncThunk } from '@reduxjs/toolkit'
import * as API from 'src/apis/character.axios'

export const fetchCharacterById = createAsyncThunk(
	'character/fetch/id',
	async (id: string) => {
		const response = await API.fetchCharacterById(id)
		return { ...response.data, id: id }
	}
)
