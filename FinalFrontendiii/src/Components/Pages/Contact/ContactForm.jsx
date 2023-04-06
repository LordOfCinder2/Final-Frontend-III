import { Button, TextField } from '@mui/material'
import React, { useContext } from 'react'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import './ContactForm.css'
import { ThemeContext } from '../../../context/ThemeContext.provider'



const ContactForm = ({ handleSubmit, handleChange }) => {

	const {state}=useContext(ThemeContext)

	return (
		<div className='contact'>
			<form action="" onSubmit={handleSubmit} className='contact-form'>
				<TextField
					label="Nombre"
					variant="standard"
					onChange={(e)=>handleChange(e, 'name')}
					className='name-field'
				/>
				<TextField
					label="Email"
					variant="standard"
					onChange={(e)=>handleChange(e, 'email')}
					className='email-field'
				/>
				<Button variant="contained" type='submit' className={state.isDark? 'submit-button submit-button-dark':'submit-button submit-button-light'}>Enviar</Button>
			</form>
		</div>
	)
}

export default ContactForm
