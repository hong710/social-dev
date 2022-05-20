import { Box, Container, Stack} from '@mui/material';
import { Navbar, Sidebar, Rightbar, Feed } from './components';


function App() {
	return (
		<Box>			
			<Navbar />
			<Container maxWidth="lg">
				<Stack direction='row' spacing={0} justifyContent='space-between'>
					<Sidebar />
					<Feed />
					<Rightbar />					
				</Stack>
			</Container>			
		</Box>
	);
}

export default App;
