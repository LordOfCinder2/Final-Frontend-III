import React, { useContext } from 'react'
import './Favs.css'
import { ThemeContext } from '../../../context/ThemeContext.provider'
import DentistCardDetailed from '../../Common/DentistDardDetailed/DentistCardDetailed'

const Favs = ({ favDentists , addToFav}) => {
	const { state } = useContext(ThemeContext)
	return (
		<div className={state.isDark?'favs favs-dark':'favs favs-light'}>
			{favDentists &&
				favDentists.map((dentist) => (
					<DentistCardDetailed key={dentist.id} dentist={dentist} addToFav={addToFav}/>
				))}
		</div>
	)
}

export default Favs
