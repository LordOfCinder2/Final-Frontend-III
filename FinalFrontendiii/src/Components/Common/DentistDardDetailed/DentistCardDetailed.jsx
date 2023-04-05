import React from 'react'

const DentistCardDetailed = ({ dentist }) => {
	return (
		<div>
			<p>{dentist.name}</p>
			<p>{dentist.phone}</p>
			<p>{dentist.email}</p>
			<p>{dentist.website}</p>
		</div>
	)
}

export default DentistCardDetailed
