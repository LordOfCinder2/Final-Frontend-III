import React, { useContext } from 'react'
import DentistCard from './DentistCard'
import { DataContext } from '../../../context/DataContext.provider'

const DentistCardContainer = ({ dentist }) => {
	const { state, dispatch } = useContext(DataContext)

	const addToFav = (item) => {
		dispatch({ type: 'ADD_TO_LOCAL_STORAGE', payload: item })
		dispatch({ type: 'ADD_TO_LOCAL_STORAGE' })
	}

	return <DentistCard dentist={dentist} addToFav={addToFav} />
}

export default DentistCardContainer
