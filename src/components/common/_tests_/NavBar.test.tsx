/* eslint-disable testing-library/no-node-access */
import renderer from 'react-test-renderer';
import { getRender } from 'src/helpers/testHelpers';
import NavBar from '../NavBar';

it('should render as snapshot', async () => {
	const snapshot = renderer.create(getRender(() => <NavBar title="title" />))

	expect(snapshot).toMatchSnapshot()
})
