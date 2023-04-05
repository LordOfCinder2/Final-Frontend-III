
import React from 'react'
import DentistCard from '../../Common/DentistCard/DentistCard'

const DetailsDentist = ({dentist}) => {

  return (
    <div>
      <DentistCard dentist={dentist}/>
    </div>
  )
}

export default DetailsDentist