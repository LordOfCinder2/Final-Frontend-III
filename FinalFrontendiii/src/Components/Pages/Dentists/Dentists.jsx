import React from 'react'
import DentistCard from '../../Common/DentistCard/DentistCard/DentistCard'

const Dentists = ({dentists,addToFav}) => {

	return (
		<div>
			{dentists.map((dentist) => (
				<DentistCard key={dentist.id} dentist={dentist} addToFav={addToFav}/>
			))}
		</div>
	)
}

export default Dentists
