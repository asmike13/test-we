import renderer from 'react-test-renderer';
import ListItem from '../ListItem'
import HomeIcon from '@mui/icons-material/Home';

const props = {
	icon: <HomeIcon />,
	children: <div>toto</div>,
}

it('should render without props as snapshot', async () => {
	const snapshot = renderer.create(<ListItem />)

	expect(snapshot).toMatchSnapshot()
})

it('should render with children props as snapshot', async () => {
	const snapshot = renderer.create(<ListItem {...props} />)

	expect(snapshot).toMatchSnapshot()
})

it('should render with text props as snapshot', async () => {
	const snapshot = renderer.create(<ListItem {...props} text="text" />)

	expect(snapshot).toMatchSnapshot()
})
