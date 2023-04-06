import React, { useContext } from 'react'
import DentistCardDetailedContainer from '../../Common/DentistDardDetailed/DentistCardDetailed.container'
import './DetailsDentist.css'
import { ThemeContext } from '../../../context/ThemeContext.provider'
import DentistCardDetailed from '../../Common/DentistDardDetailed/DentistCardDetailed'

const DetailsDentist = ({dentist}) => {
	const { state } = useContext(ThemeContext)
	return (
		<div className={state.isDark?'details-dentist details-dentist-dark': 'details-dentist details-dentist-light'}>
			<DentistCardDetailed dentist={dentist}/>
		</div>
	)
}

export default DetailsDentist
