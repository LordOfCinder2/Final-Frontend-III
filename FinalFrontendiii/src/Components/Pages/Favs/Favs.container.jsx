import React, { useContext, useEffect, useState } from 'react'
import Favs from './Favs'
import { DataContext } from '../../../context/DataContext.provider'

const FavsContainer = () => {
  const {state, dispatch} = useContext(DataContext)
	const [hasChanged, setHasChanged] = useState(false)


  const addToFav = (item) => {
		dispatch({ type: 'ADD_TO_LOCAL_STORAGE', payload: item })
		setHasChanged(true)
	}

  useEffect(() => {
    setHasChanged(false)
    dispatch({type: 'ADD_TO_FAV_DENTISTS'})
  },[hasChanged])


  return (
    <Favs favDentists={state.favDentists} addToFav={addToFav}/>
  )
}

export default FavsContainer