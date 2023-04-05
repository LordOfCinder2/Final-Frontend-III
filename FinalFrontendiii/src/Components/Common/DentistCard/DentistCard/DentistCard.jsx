import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { IconButton } from '@mui/material'

const DentistCard = ({ dentist, addToFav }) => {
	return (
		<div style={{ border: '2px solid black', margin: '10px' }}>
			<Link to={`/dentist/${dentist.id}`}>
				<p>{dentist.name}</p>
			</Link>
			<IconButton
				onClick={() => {
					addToFav(dentist)
				}}
			>
				<FavoriteBorderIcon />
			</IconButton>
		</div>
	)
}

export default DentistCard
