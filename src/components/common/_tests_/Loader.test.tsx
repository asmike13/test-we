import renderer from 'react-test-renderer';
import Loader from '../Loader';

it('should render as snapshot', async () => {
	const snapshot = renderer.create(<Loader />)

	expect(snapshot).toMatchSnapshot()
})