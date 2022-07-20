// import renderer from 'react-test-renderer';
// import { getRender } from 'src/helpers/testHelpers';
// import { bookMock } from 'src/mock/book.mock';
// import { characterMock } from 'src/mock/character.mock';
// import Character from '../Character';

// const props = {
// 	characterList: [characterMock]
// 	currentCharacter?: characterMock
// 	characterId?: '1'
// 	getCharacterFromUrl: (url: string) => JSX.Element
// 	getBooksLink: (books: string[]) => JSX.Element[]
// }

// it('should render as snapshot', async () => {
// 	const snapshot = renderer.create(getRender('/', '/', () => <Character book={bookMock} />))

// 	expect(snapshot).toMatchSnapshot()
// })

import renderer from 'react-test-renderer';
import Loader from 'src/components/common/Loader';

it('should render as snapshot', async () => {
	const snapshot = renderer.create(<Loader />)

	expect(snapshot).toMatchSnapshot()
})