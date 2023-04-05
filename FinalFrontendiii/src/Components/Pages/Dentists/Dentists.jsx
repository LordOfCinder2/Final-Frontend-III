import React, { useContext } from 'react'
import { DataContext } from '../../../context/DataContext.provider'
import DentistCardContainer from '../../Common/DentistCard/DentistCard/DentistCard.container'
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
