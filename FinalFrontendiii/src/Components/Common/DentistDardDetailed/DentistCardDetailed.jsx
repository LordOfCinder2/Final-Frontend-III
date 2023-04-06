import React, { useContext } from 'react'
import './DentistCardDetailed.css'
import { ThemeContext } from '../../../context/ThemeContext.provider'

const DentistCardDetailed = ({ dentist }) => {
	const { state } = useContext(ThemeContext)
	return (
		<div
			className={
				state.isDark
					? 'detailed-dentist-card detailed-dentist-card-dark'
					: 'detailed-dentist-card detailed-dentist-card-light'
			}
		>
			<h1>{dentist.name}</h1>
			<h2>{dentist.phone}</h2>
			<h3>{dentist.email}</h3>
			<p>{dentist.website}</p>
		</div>
	)
}

export default DentistCardDetailed
