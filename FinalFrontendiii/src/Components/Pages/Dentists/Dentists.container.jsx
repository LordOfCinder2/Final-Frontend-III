import React, { useContext, useEffect, useState } from 'react'
import Dentists from './Dentists'
import axios from 'axios'
import { DataContext } from '../../../context/DataContext.provider'

const DentistsContainer = () => {
	const { state, dispatch } = useContext(DataContext)
	const [hasChanged, setHasChanged] = useState(false)

	const addToFav = (item) => {
		dispatch({ type: 'ADD_TO_LOCAL_STORAGE', payload: item })
		setHasChanged(true)
	}

	useEffect(() => {
		setHasChanged(false)
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((res) => {
				dispatch({ type: 'GET_DENTISTS', payload: res.data })
			})
			.catch((err) => console.log(err))
		dispatch({ type: 'ADD_TO_FAV_DENTISTS' })
	}, [hasChanged])

	return <Dentists addToFav={addToFav} dataState={state} />
}

export default DentistsContainer
