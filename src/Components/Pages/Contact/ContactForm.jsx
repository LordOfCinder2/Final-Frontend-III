import { Button, TextField } from '@mui/material'
import React, { useContext } from 'react'

import './ContactForm.css'
import { ThemeContext } from '../../../context/ThemeContext.provider'

const ContactForm = ({ handleSubmit, handleChange }) => {
	const { state } = useContext(ThemeContext)

	return (
		<form
			action=""
			onSubmit={handleSubmit}
			className={
				state.isDark
					? 'contact-form contact-form-dark'
					: 'contact-form contact-form-light'
			}
		>
			<TextField
				InputProps={{
					className: 'text',
				}}
				InputLabelProps={{
					className: 'label-text'
				}}
				label="Nombre"
				variant="standard"
				onChange={(e) => handleChange(e, 'name')}
				className="text-field"
			/>
			<TextField
				InputProps={{
					className: 'text',
				}}
				InputLabelProps={{
					className: 'label-text'
				}}
				label="Email"
				variant="standard"
				onChange={(e) => handleChange(e, 'email')}
				className="text-field"
			/>
			<Button
				variant="contained"
				type="submit"
				className='submit-button'
			>
				Enviar
			</Button>
		</form>
	)
}

export default ContactForm
