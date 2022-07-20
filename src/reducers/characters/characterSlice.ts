import { createSlice } from '@reduxjs/toolkit'
import { ICharacter } from 'src/types/character'
import { fetchCharacterById } from './characterThunks'
// import { IBook } from '../../types/bookTypes'

interface IInitialState {
	show: boolean
	characterList: ICharacter[]
	status: 'idle' | 'fulfilled' | 'pending' | 'rejected'
	currentCharacter?: ICharacter
}

export const initialState: IInitialState = {
	show: false,
	status: 'idle',
	characterList: [],
}

export const characterSlice = createSlice({
	name: 'characters',
	initialState,
	reducers: {
		resetList: (state) => {
			state.characterList = []
		},
		setCurrentCharacter: (state, action) => {
			state.currentCharacter = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCharacterById.pending, (state, action) => {
			state.status = 'pending'
		})
		builder.addCase(fetchCharacterById.rejected, (state, action) => {
			state.status = 'rejected'
		})
		builder.addCase(fetchCharacterById.fulfilled, (state, action) => {
			action.payload && state.characterList.push(action.payload)
			state.status = 'fulfilled'
		})
	},
})
