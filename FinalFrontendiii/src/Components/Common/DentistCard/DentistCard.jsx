import React from 'react'

const DentistCard = ({ dentist }) => {
	return (
		<div>
			<p>{dentist.name}</p>
			<p>{dentist.email}</p>
		</div>
	)
}

export default DentistCard
