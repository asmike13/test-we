import renderer from 'react-test-renderer';
import { bookMock } from 'src/mock/book.mock';
import BookDetail from '../BookDetail';
import { getRender } from "src/helpers/testHelpers"

it('should render as snapshot with status idle', async () => {
	const snapshot = renderer.create(getRender(() => <BookDetail status='idle' title="title" />))

	expect(snapshot).toMatchSnapshot()
})

it('should render as snapshot with status rejected', async () => {
	const snapshot = renderer.create(getRender(() => <BookDetail status='rejected' title="title" />))

	expect(snapshot).toMatchSnapshot()
})

it('should render as snapshot with status pending', async () => {
	const snapshot = renderer.create(getRender(() => <BookDetail status='pending' title="title" />))

	expect(snapshot).toMatchSnapshot()
})

it('should render as snapshot with status fulfilled', async () => {
	const snapshot = renderer.create(getRender(() => <BookDetail status='fulfilled' title="title" currentBook={bookMock} />))

	expect(snapshot).toMatchSnapshot()
})
