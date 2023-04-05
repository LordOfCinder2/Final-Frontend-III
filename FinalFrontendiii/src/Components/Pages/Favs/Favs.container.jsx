import React, { useContext, useEffect } from 'react'
import Favs from './Favs'
import { DataContext } from '../../../context/DataContext.provider'

const FavsContainer = () => {
  const {state, dispatch} = useContext(DataContext)

  useEffect(() => {
    dispatch({type: 'ADD_TO_FAV_DENTISTS'})
  },[])


  return (
    <Favs favDentists={state.favDentists}/>
  )
}

export default FavsContainer