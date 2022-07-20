import renderer from 'react-test-renderer';
import { getRender } from 'src/helpers/testHelpers';
import { bookMock } from 'src/mock/book.mock';
import BookList from '../BookList';

it('should render as snapshot with status pending', async () => {
	const snapshot = renderer.create(getRender(() => <BookList bookList={[]} status="pending" />))

	expect(snapshot).toMatchSnapshot()
})

it('should render as snapshot with status rejected', async () => {
	const snapshot = renderer.create(getRender(() => <BookList bookList={[]} status="rejected" />))

	expect(snapshot).toMatchSnapshot()
})

it('should render as snapshot with status fulfilled', async () => {
	const snapshot = renderer.create(getRender(() => <BookList bookList={[bookMock, bookMock]} status="fulfilled" />))

	expect(snapshot).toMatchSnapshot()
})
