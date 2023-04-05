import React from 'react'
import DetailsDentistContainer from '../DetailsDentist/DetailsDentist.container'
import DentistCard from '../../Common/DentistCard/DentistCard/DentistCard'

const Favs = ({favDentists}) => {
  return (
    <div>
    {favDentists && favDentists.map((dentist) => (
				<div key={dentist.id}>
          <p>{dentist.name}</p>
        </div>)) }
    </div>
    
  )
}

export default Favs