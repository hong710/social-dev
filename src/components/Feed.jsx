import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Avatar, CardHeader,CardActions, } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';

function Feed() {
	return (
		<Box  flex={4} p={0}>
			<Card>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
							R
						</Avatar>
					}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title="My Post"
					subheader="Apr 14, 2022"
				/>
				<CardMedia
					component="img"
					height="20%"
					image="https://images.unsplash.com/photo-1651169611357-7ded6b5eeda5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
					alt="Paella dish"
				/>
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						This impressive paella is a perfect party dish and a fun meal to cook
						together with your guests. Add 1 cup of frozen peas along with the mussels,
						if you like.
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites">
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label="share">
						<ShareIcon />
					</IconButton>
				</CardActions>
			</Card>

			<Card>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
							R
						</Avatar>
					}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title="My Post"
					subheader="Apr 14, 2022"
				/>
				<CardMedia
					component="img"
					height="20%"
					image="https://images.unsplash.com/photo-1651169611357-7ded6b5eeda5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
					alt="Paella dish"
				/>
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						This impressive paella is a perfect party dish and a fun meal to cook
						together with your guests. Add 1 cup of frozen peas along with the mussels,
						if you like.
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites">
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label="share">
						<ShareIcon />
					</IconButton>
				</CardActions>
			</Card>

			<Card>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
							R
						</Avatar>
					}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title="My Post"
					subheader="Apr 14, 2022"
				/>
				<CardMedia
					component="img"
					height="20%"
					image="https://images.unsplash.com/photo-1651169611357-7ded6b5eeda5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
					alt="Paella dish"
				/>
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						This impressive paella is a perfect party dish and a fun meal to cook
						together with your guests. Add 1 cup of frozen peas along with the mussels,
						if you like.
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites">
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label="share">
						<ShareIcon />
					</IconButton>
				</CardActions>
			</Card>
	
		</Box>
	)
}

export default Feed