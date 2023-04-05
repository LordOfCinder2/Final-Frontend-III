import React, { useContext, useEffect, useReducer, useState } from 'react'
import Dentists from './Dentists'
import axios from 'axios'
import { DataContext } from '../../../context/DataContext.provider'

const DentistsContainer = () => {
	const { state, dispatch } = useContext(DataContext)

	const addToFav = (item) => {
		dispatch({ type: 'ADD_TO_LOCAL_STORAGE', payload: item })
	}

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((res) => {
				dispatch({ type: 'GET_DENTISTS', payload: res.data })
			})
			.catch((err) => console.log(err))
	}, [])

	return <Dentists addToFav={addToFav} dentists={state.dentists} />
}

export default DentistsContainer
