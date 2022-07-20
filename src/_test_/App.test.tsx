import App from "src/App"
import renderer from 'react-test-renderer';
import { getRender } from "src/helpers/testHelpers"

it('should render app as snapshot', async () => {
	const snapshot = renderer.create(getRender(() => <App />))

	expect(snapshot).toMatchSnapshot()
})