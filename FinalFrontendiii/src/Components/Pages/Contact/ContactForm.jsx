import { Button, TextField } from '@mui/material'
import React from 'react'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'



const ContactForm = ({ handleSubmit, handleChange }) => {
	return (
		<div>
			<form action="" onSubmit={handleSubmit}>
				<TextField
					label="Nombre"
					variant="standard"
					onChange={(e)=>handleChange(e, 'name')}
				/>
				<TextField
					label="Email"
					variant="standard"
					onChange={(e)=>handleChange(e, 'email')}
				/>
				<Button variant="outlined" type='submit'>Enviar</Button>
			</form>
		</div>
	)
}

export default ContactForm
