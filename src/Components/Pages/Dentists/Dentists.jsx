import React, { useContext } from 'react'
import DentistCard from '../../Common/DentistCard/DentistCard'
import './Dentists.css'
import { ThemeContext } from '../../../context/ThemeContext.provider'

const Dentists = ({ dataState, addToFav }) => {
	const { state } = useContext(ThemeContext)

	return (
		<div
			className={
				state.isDark
					? 'dentists-list dentists-list-dark'
					: 'dentists-list dentists-list-light'
			}
		>
			{dataState.dentists.map((dentist) => (
				<DentistCard key={dentist.id} dentist={dentist} addToFav={addToFav} />
			))}
		</div>
	)
}

export default Dentists
