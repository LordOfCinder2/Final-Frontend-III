import React, { useState } from 'react'
import ContactForm from './ContactForm'
import Swal from 'sweetalert2'
import { validateEmail, validateName } from '../../../services/dataValidation'

const ContactFormContainer = () => {
	const [data, setData] = useState({
		name: '',
		email: '',
	})

	const handleChange = (e, prop) => {
		setData({ ...data, [prop]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
    if(validateName(data.name)&&validateEmail(data.email)){
      Swal.fire(
        'Gracias!',
        `${data.name}, te contactaremos cuando antes vía mail`,
        'success'
      )
    }else{
      Swal.fire(
        {
          icon:'error',
          text: 'Por favor verifique su información nuevamente'
        }
      )
    }
	}

	return <ContactForm handleChange={handleChange} handleSubmit={handleSubmit} />
}

export default ContactFormContainer
