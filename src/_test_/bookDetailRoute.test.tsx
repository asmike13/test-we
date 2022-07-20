import { store } from 'src/store'
import { render } from "@testing-library/react"
import { getRender, waitForData, waitForElement } from "src/helpers/testHelpers"
import BookDetail from 'src/components/books/containers/BookDetailContainer'

it('should follow the current process of fetching loading and display', async () => {
	const { container } = render(getRender(BookDetail, ['/book/1'], '/book/:bookId'))
	let data

	// empty booklist trigger fetch
	data = await waitForData(store.getState().books.bookList, [])
	expect(data).toBeTruthy()

	// loading
	data = await waitForData(store.getState().books.status, 'pending')
	expect(data).toBeTruthy()
	await waitForElement(container, '.loader')

	// display data
	await waitForElement(container, '.navbar-title')
	await waitForElement(container, '.section-title')
	await waitForElement(container, '.book-infos')
	await waitForElement(container, '.character-list')
})