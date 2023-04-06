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
				InputLabelProps={{
					className: state.isDark
						? 'label-text label-text-dark'
						: 'label-text label-text-light',
				}}
				label="Nombre"
				variant="standard"
				onChange={(e) => handleChange(e, 'name')}
				className="name-field"
			/>
			<TextField
				InputLabelProps={{
					className: state.isDark
						? 'label-text label-text-dark'
						: 'label-text label-text-light',
				}}
				label="Email"
				variant="standard"
				onChange={(e) => handleChange(e, 'email')}
				className="email-field"
			/>
			<Button
				variant="contained"
				type="submit"
				className={
					state.isDark
						? 'submit-button submit-button-dark'
						: 'submit-button submit-button-light'
				}
			>
				Enviar
			</Button>
		</form>
	)
}

export default ContactForm
