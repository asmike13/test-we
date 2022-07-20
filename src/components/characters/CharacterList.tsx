import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { ListItemButton, ListItemText, ListItem, List, ListItemIcon, Paper } from "@mui/material";
import { getCharacterName } from 'src/helpers/commonHelpers';
import { ICharacter } from "src/types/character";

interface ICharacterListProps {
	status: string
	characterList: ICharacter[]
	onCharacterClick: (id?: string) => void
}

const CharacterList = ({
	status,
	characterList,
	onCharacterClick,
}: ICharacterListProps) => {
	return (
		<div className="character-list">
			<h2 className="section-title">Characters :</h2>
			<Paper elevation={3}>
				<List sx={{ maxHeight: 200, overflow: 'scroll' }} id="character-scroll-list">
					{characterList.map((character, index) => (
						<ListItem disablePadding key={index} onClick={() => onCharacterClick(character.id)}>
							<ListItemButton>
								<ListItemIcon>{character.gender === "Male" ? <MaleIcon /> : <FemaleIcon />}</ListItemIcon>
								<ListItemText primary={getCharacterName(character)} />
							</ListItemButton>
						</ListItem>
					))}
					{status === 'pending' &&
						<ListItem disablePadding>
							<ListItemButton>
								<span> Load more ...</span>
							</ListItemButton>
						</ListItem>
					}
				</List>
			</Paper>
		</div >
	)
}

export default CharacterList;
