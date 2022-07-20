import moment from "moment"
import { List } from "@mui/material"
import { IBook } from "src/types/book"
import ListItem from "../common/ListItem"
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Paper } from "@mui/material"

interface IBookInfosProps {
	book: IBook
	elevation?: number
}

const BookInfos = ({ book, elevation }: IBookInfosProps) => {
	return (
		<Paper elevation={elevation ?? 3} sx={{ position: 'relative' }} className="book-infos">
			<List sx={{ marginTop: '15px' }}>
				<ListItem icon={<NoteAltIcon />} text={`By ${book.authors}`} />
				<ListItem icon={<AutoStoriesIcon />} text={`${book.numberOfPages} pages`} />
				<ListItem icon={<LocalPrintshopIcon />} text={`Published by ${book.publisher}`} />
				<ListItem icon={<CalendarMonthIcon />} text={`Released on ${moment(book.released).format('DD/MM/YYYY')}`} />
			</List>
		</Paper>
	)
}

export default BookInfos
