import React, { useContext, useEffect, useState } from 'react'
import DetailsDentist from './DetailsDentist'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { DataContext } from '../../../context/DataContext.provider'

const DetailsDentistContainer = () => {
	const { state, dispatch } = useContext(DataContext)
	const { id } = useParams()

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => {
				dispatch({ type: 'GET_DENTIST', payload: res.data })
			})
			.catch((err) => console.log(err)),
			[]
	})

	return <DetailsDentist dentist={state.dentist} />
}

export default DetailsDentistContainer
