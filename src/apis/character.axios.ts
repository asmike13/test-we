import axios, { AxiosResponse } from 'axios';
import { ICharacter } from 'src/types/character';

export const fetchCharacterById = async (id: string): Promise<AxiosResponse<ICharacter>> => {
	const response = await axios.get(`https://anapioficeandfire.com/api/characters/${id}`)
	return response
}
