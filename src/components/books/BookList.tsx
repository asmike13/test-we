import BookCard from './BookCard';
import { Grid } from '@mui/material';
import NavBar from '../common/NavBar';
import { IBook } from 'src/types/book';
import Loader from '../common/Loader';

interface IBookListProps {
	status: string
	bookList: IBook[]
}

const BookList = ({ status, bookList }: IBookListProps) => {
	return (
		<>
			<NavBar title="Book list" />
			{status === 'pending' && <Loader />}
			<Grid container spacing={5} sx={{ marginTop: 0 }}>
				{bookList?.map((book) => (
					<Grid item key={book.isbn} xs={12} md={6} lg={4}>
						<BookCard book={book} />
					</Grid>
				))}
			</Grid>
		</>
	);
}

export default BookList;