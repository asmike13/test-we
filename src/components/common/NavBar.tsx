import { AppBar, Toolbar, Typography } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate } from "react-router-dom";

interface INavBar {
	title: string
}

const NavBar = ({ title }: INavBar) => {
	const navigate = useNavigate();

	return (
		<AppBar position="static">
			<Toolbar>
				<Link to="/"><HomeIcon /></Link>
				<Link to="" onClick={() => navigate(-1)} className="arrow-back"><ArrowBackIcon /></Link>
				<Typography className="navbar-title" variant="h1" sx={{ textAlign: 'center' }}>{title}</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default NavBar