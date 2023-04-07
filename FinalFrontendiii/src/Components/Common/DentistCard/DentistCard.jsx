import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { IconButton } from '@mui/material'
import './DentistCard.css'
import { ThemeContext } from '../../../context/ThemeContext.provider'
import { DataContext } from '../../../context/DataContext.provider'

const DentistCard = ({ dentist, addToFav }) => {
	const dataState = useContext(DataContext).state
	const { state } = useContext(ThemeContext)
	return (
		<div className={state.isDark ? 'card card-dark' : 'card card-light'}>
			<div className='info-card'>
				<Link to={`/dentist/${dentist.id}`} className="card-link">
				<p className="card-label">{dentist.name}</p>
			</Link>
			<IconButton
				className="card-button"
				onClick={() => {
					addToFav(dentist)
				}}
			>
				{dataState.favDentists &&
				dataState.favDentists.some((item) => item.id === dentist.id) ? (
					<FavoriteIcon className="card-icon" />
				) : (
					<FavoriteBorderIcon className="card-icon" />
				)}
			</IconButton>
			</div>
			
		</div>
	)
}

export default DentistCard
