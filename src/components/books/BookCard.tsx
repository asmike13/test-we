import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getBookId } from 'src/helpers/commonHelpers';
import { IBook } from 'src/types/book';
import BookInfos from './BookInfos';

interface IBookCardProps {
	book: IBook
}

const BookCard = ({ book }: IBookCardProps) => {
	const navigate = useNavigate()

	const bookId = getBookId(book.url)
	const goToBook = () => navigate(`/book/${bookId}`)

	return (
		<Card className="book-card">
			<CardContent>
				<Typography variant="h2">{book.name}</Typography>
				<BookInfos book={book} elevation={0} />
			</CardContent>
			<CardActions>
				<Button onClick={goToBook}>See more</Button>
			</CardActions>
		</Card>
	);
}

export default BookCard;
