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
		<div className="card-container">
			<Link
				to={`/dentist/${dentist.id}`}
				className={state.isDark ? 'card card-dark' : 'card card-light'}
			>
				<p className="card-label">{dentist.name}</p>
			</Link>
			<IconButton
				className={state.isDark ? 'card-button card-button-dark' : 'card-button card-button-light'}
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
	)
}

export default DentistCard
