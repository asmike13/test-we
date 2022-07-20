import renderer from 'react-test-renderer';
import { getRender } from 'src/helpers/testHelpers';
import { characterMock } from 'src/mock/character.mock';
import Character from '../Character';

const props = {
	characterList: [characterMock],
	getCharacterFromUrl: jest.fn(),
	getBooksLink: jest.fn(),
}

const allProps = {
	...props,
	currentCharacter: characterMock,
	characterId: '1',
	status: 'fulfilled'
}

it('should render as snapshot with status pending', async () => {
	const snapshot = renderer.create(getRender(() => <Character status='pending' {...props} />))

	expect(snapshot).toMatchSnapshot()
})

it('should render as snapshot with status rejected', async () => {
	const snapshot = renderer.create(getRender(() => <Character status='rejected' {...props} />))

	expect(snapshot).toMatchSnapshot()
})

it('should render as snapshot with status fulfilled', async () => {
	const snapshot = renderer.create(getRender(() => <Character  {...allProps} />))

	expect(snapshot).toMatchSnapshot()
})
