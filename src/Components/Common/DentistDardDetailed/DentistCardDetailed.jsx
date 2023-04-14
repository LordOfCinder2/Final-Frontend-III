import React, { useContext } from 'react'
import './DentistCardDetailed.css'
import { ThemeContext } from '../../../context/ThemeContext.provider'
import { DataContext } from '../../../context/DataContext.provider'
import { IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const DentistCardDetailed = ({ dentist, addToFav }) => {
	const dataState = useContext(DataContext).state
	const { state } = useContext(ThemeContext)
	return (
		<div
			className={
				state.isDark
					? 'detailed-dentist-card detailed-dentist-card-dark'
					: 'detailed-dentist-card detailed-dentist-card-light'
			}
		>
			<div className='text-box'>
			<h1>{dentist.name}</h1>
			<h2>{dentist.phone}</h2>
			<h3>{dentist.email}</h3>
			<p>{dentist.website}</p>
			</div>
			<IconButton
				className="details-button"
				onClick={() => {
					addToFav(dentist)
				}}
			>
				{dataState.favDentists &&
				dataState.favDentists.some((item) => item.id === dentist.id) ? (
					<FavoriteIcon className="details-icon" />
				) : (
					<FavoriteBorderIcon className="details-icon" />
				)}
			</IconButton>
		</div>
	)
}

export default DentistCardDetailed
