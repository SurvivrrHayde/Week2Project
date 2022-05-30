import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { AppBar } from '@mui/material';
const Navbar = () => {
	return (
		<>
			<AppBar color='inherit' position='static' sx={{margin: '0px', padding: '5px'}}>
					<Typography variant="h3">Minotaur Messaging</Typography>
				<nav>
					<Button variant={useLocation().pathname==='/post' ? 'contained' : 'text'} component={Link} to="/post">Create Post</Button>
					<Button variant={useLocation().pathname==='/messaging' ? 'contained' : 'text'} component={Link} to="/messaging">Messages</Button>
				</nav>
			</AppBar>
			
		</>
	);
};

export default Navbar;