import React from 'react'
import DentistCard from '../../Common/DentistCard/DentistCard'

const Dentists = ({ state }) => {
	return (
		<div>
			{state.dentists.map((dentist) => (
				<DentistCard key={dentist.id} dentist={dentist} />
			))}
		</div>
	)
}

export default Dentists
