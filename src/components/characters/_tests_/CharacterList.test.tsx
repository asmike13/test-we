import renderer from 'react-test-renderer';
import Loader from 'src/components/common/Loader';

it('should render as snapshot', async () => {
	const snapshot = renderer.create(<Loader />)

	expect(snapshot).toMatchSnapshot()
})