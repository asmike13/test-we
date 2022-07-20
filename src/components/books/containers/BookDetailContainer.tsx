import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { IRootState } from "src/store"
import { getBookFromBookList } from "src/helpers/commonHelpers"
import { booksSlice } from "src/reducers/books/bookSlice"
import { fetchBookById } from "src/reducers/books/bookThunks"
import BookDetail from "../BookDetail"

const BookDetailContainer = () => {
	const dispatch = useDispatch()
	const { bookId } = useParams()

	const {
		bookList,
		currentBook,
		status,
	} = useSelector((store: IRootState) => store.books)

	React.useEffect(() => {
		if (!bookId) { return }

		if (bookList?.length > 0) {
			const currBook = getBookFromBookList(bookList, bookId)
			currBook && dispatch(booksSlice.actions.setCurrentBook(currBook))
		} else {
			dispatch(fetchBookById(bookId) as any)
		}
	}, [dispatch, bookList, bookId])

	const propsToPass = {
		status,
		currentBook,
		title: `Book ${bookId} - ${currentBook?.name}`,
	}

	return <BookDetail {...propsToPass} />
}

export default BookDetailContainer;
