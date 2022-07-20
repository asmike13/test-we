/* eslint-disable testing-library/no-node-access */

import { store } from 'src/store'
import { render } from "@testing-library/react"
import { getRender, waitForData, waitForElement, waitForElementToEqual } from "src/helpers/testHelpers"
import BookList from 'src/components/books/containers/BookListContainer'

it('should follow the current process of fetching loading and display', async () => {
	const { container } = render(getRender(BookList))
	let data

	await waitForElementToEqual(container, '.navbar-title', 'Book list')

	// // loading
	data = await waitForData(store.getState().books.status, 'pending')
	expect(data).toBeTruthy()
	await waitForElement(container, '.loader')

	await waitForElement(container, '.book-card')
	expect(document.querySelectorAll('.book-card')?.length).toEqual(10)
})