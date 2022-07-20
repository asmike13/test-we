import React from 'react';
import { IRootState } from 'src/store'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBooks } from 'src/reducers/books/bookThunks';
import BookList from '../BookList';

const BookListContainer = () => {
	const dispatch = useDispatch()

	const {
		bookList,
		status,
	} = useSelector((store: IRootState) => store.books)

	React.useEffect(() => {
		if (bookList?.length === 0) {
			dispatch(fetchAllBooks() as any)
		}
	}, [dispatch, bookList, status])

	const propsToPass = {
		status,
		bookList,
	}

	return <BookList {...propsToPass} />
}
export default BookListContainer;