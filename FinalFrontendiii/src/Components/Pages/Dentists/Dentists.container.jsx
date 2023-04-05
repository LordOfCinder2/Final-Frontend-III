import React, { useContext, useEffect, useReducer } from 'react'
import Dentists from './Dentists'
import axios from 'axios'
import { DataContext } from '../../../context/DataContext.provider'

const DentistsContainer = () => {
	const { state, dispatch } = useContext(DataContext)

	useEffect(()=>{
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((res) => {
				dispatch({ type: 'GET_DENTISTS', payload: res.data })
			})
			.catch((err)=>console.log(err)),
		[]}
	)

	return <Dentists state={state}/>
}

export default DentistsContainer
