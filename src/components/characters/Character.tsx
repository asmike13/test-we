import { List, Paper } from "@mui/material"
import NavBar from "../common/NavBar"
import ListItem from "../common/ListItem"
import { ICharacter } from "src/types/character"
import { getCharacterName } from "src/helpers/commonHelpers"
import Loader from "src/components/common/Loader"

interface ICharacterProps {
	characterList: ICharacter[]
	currentCharacter?: ICharacter
	characterId?: string
	status?: string
	getCharacterFromUrl: (url: string) => JSX.Element
	getBooksLink: (books: string[]) => JSX.Element[]
}

const Character = ({
	currentCharacter,
	characterId,
	status,
	getCharacterFromUrl,
	getBooksLink,
}: ICharacterProps) => {
	return (
		<>
			{status === 'pending' && <Loader />}
			{status === 'rejected' && <div className="section-title">Character not found</div>}
			{currentCharacter && currentCharacter.id === characterId &&
				<>
					<NavBar title={getCharacterName(currentCharacter)} />
					<span className="section-title">Infos :</span>
					<Paper elevation={3} sx={{ position: 'relative' }}>
						<List sx={{ marginTop: '15px', display: 'flex', flexWrap: 'wrap' }} className="character-infos-list">
							<ListItem text={`Gender: ${currentCharacter.gender}`} />
							<ListItem text={`Culture: ${currentCharacter.culture}`} />
							<ListItem text={`Born: ${currentCharacter.born}`} />
							<ListItem text={`Died: ${currentCharacter.died}`} />
							<ListItem text={`Titles: ${currentCharacter.titles}`} />
							<ListItem text={`Aliases: ${currentCharacter.aliases}`} />
							<ListItem><>Father: {getCharacterFromUrl(currentCharacter.father)}</></ListItem>
							<ListItem><>Mother: {getCharacterFromUrl(currentCharacter.mother)}</></ListItem>
							<ListItem><>Spouse: {getCharacterFromUrl(currentCharacter.spouse)}</></ListItem>
							<ListItem><>Books: {getBooksLink(currentCharacter.books)}</></ListItem>
							<ListItem><>PovBooks: {getBooksLink(currentCharacter.povBooks)}</></ListItem>
							<ListItem text={`TvSeries: ${currentCharacter.tvSeries}`} />
							<ListItem text={`PlayedBy: ${currentCharacter.playedBy}`} />
						</List>
					</Paper>
				</>
			}
		</>
	)
}

export default Character
