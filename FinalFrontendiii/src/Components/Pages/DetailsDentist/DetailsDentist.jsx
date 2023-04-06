import React, { useContext } from 'react'
import './DetailsDentist.css'
import { ThemeContext } from '../../../context/ThemeContext.provider'
import DentistCardDetailed from '../../Common/DentistDardDetailed/DentistCardDetailed'

const DetailsDentist = ({dentist, addToFav}) => {
	const { state } = useContext(ThemeContext)
	return (
		<div className={state.isDark?'details-dentist details-dentist-dark': 'details-dentist details-dentist-light'}>
			<DentistCardDetailed dentist={dentist} addToFav={addToFav}/>
		</div>
	)
}

export default DetailsDentist
