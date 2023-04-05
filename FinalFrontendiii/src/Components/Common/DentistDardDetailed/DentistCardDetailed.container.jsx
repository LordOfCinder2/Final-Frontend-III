import React, { useContext } from 'react'
import DentistCardDetailed from './DentistCardDetailed'
import { DataContext } from '../../../context/DataContext.provider'

const DentistCardDetailedContainer = () => {
 const { state, dispatch } = useContext(DataContext)
  return (
    <DentistCardDetailed dentist={state.dentist}/>
  )
}

export default DentistCardDetailedContainer