import { Paper } from "@mui/material"
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const Loader = () => {
	return (
		<>
			<div className="overlay" />
			<Paper elevation={5} className="loader">
				<HourglassBottomIcon />
			</Paper>
		</>
	)
}

export default Loader
