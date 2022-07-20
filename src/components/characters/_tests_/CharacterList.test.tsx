import renderer from 'react-test-renderer';
import { getRender } from 'src/helpers/testHelpers';
import { charactersMock } from 'src/mock/character.mock';
import CharacterList from '../CharacterList';

const props = {
	characterList: charactersMock,
	onCharacterClick: jest.fn(),
}

it('should render as snapshot with status pending', async () => {
	const snapshot = renderer.create(getRender(() => <CharacterList status='pending' {...props} />))

	expect(snapshot).toMatchSnapshot()
})

it('should render as snapshot with status fulfilled', async () => {
	const snapshot = renderer.create(getRender(() => <CharacterList status='fulfilled' {...props} />))

	expect(snapshot).toMatchSnapshot()
})
