import { ReactElement } from "react"
import { ListItem, ListItemIcon } from "@mui/material"

interface ICustomListItem {
	icon?: ReactElement
	text?: string
	children?: ReactElement
}

const CustomListItem = ({ icon, text, children }: ICustomListItem) => {
	return (
		<>
			<ListItem disablePadding sx={{ position: 'relative', minHeight: '50px', paddingLeft: '15px' }}>
				{icon && <ListItemIcon>{icon}</ListItemIcon>}
				{text || children}
			</ListItem>
		</>
	)
}

export default CustomListItem