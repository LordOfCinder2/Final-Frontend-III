import React, { useContext, useEffect, useState } from 'react'
import DetailsDentist from './DetailsDentist'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { DataContext } from '../../../context/DataContext.provider'

const DetailsDentistContainer = () => {
	const { state, dispatch } = useContext(DataContext)
	const [hasChanged, setHasChanged] = useState(false)
	const { id } = useParams()

	const addToFav = (item) => {
		dispatch({ type: 'ADD_TO_LOCAL_STORAGE', payload: item })
		setHasChanged(true)
	}

	useEffect(() => {
		setHasChanged(false)
		axios
			.get(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => {
				dispatch({ type: 'GET_DENTIST', payload: res.data })
			})
			.catch((err) => console.log(err))
		dispatch({ type: 'ADD_TO_FAV_DENTISTS' })
	}, [hasChanged])

	return <DetailsDentist dentist={state.dentist} addToFav={addToFav} />
}

export default DetailsDentistContainer
