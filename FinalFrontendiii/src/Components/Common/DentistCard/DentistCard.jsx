import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { IconButton } from '@mui/material'
import './DentistCard.css'
import { ThemeContext } from '../../../context/ThemeContext.provider'

const DentistCard = ({ dentist, addToFav }) => {
	const {state}=useContext(ThemeContext)
	return (
		<div className={state.isDark?'card card-dark':'card card-light'}>
			<Link to={`/dentist/${dentist.id}`}  className='card-link'>
				<p className='card-label'>{dentist.name}</p>
				</Link>
			<IconButton
			className='card-button'
			onClick={() => {
				addToFav(dentist)
			}}
			>
				<FavoriteIcon className='card-icon'/>
			</IconButton>
		</div>
	)
}

export default DentistCard
