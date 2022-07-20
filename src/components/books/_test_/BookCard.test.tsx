import renderer from 'react-test-renderer';
import { getRender } from 'src/helpers/testHelpers';
import { bookMock } from 'src/mock/book.mock';
import BookCard from '../BookCard';

it('should render as snapshot', async () => {
	const snapshot = renderer.create(getRender(() => <BookCard book={bookMock} />))

	expect(snapshot).toMatchSnapshot()
})
