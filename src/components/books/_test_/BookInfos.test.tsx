import renderer from 'react-test-renderer';
import { bookMock } from 'src/mock/book.mock';
import BookInfos from '../BookInfos';

it('should render as snapshot with elevation', async () => {
	const snapshot = renderer.create(<BookInfos book={bookMock} elevation={1} />)

	expect(snapshot).toMatchSnapshot()
})

it('should render as snapshot without elevation', async () => {
	const snapshot = renderer.create(<BookInfos book={bookMock} />)

	expect(snapshot).toMatchSnapshot()
})
