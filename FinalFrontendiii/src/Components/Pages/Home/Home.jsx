import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext.provider'
import './Home.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Home = () => {
	const { state } = useContext(ThemeContext)
	return (
		<div className={state.isDark ? 'home home-dark' : 'home home-light'}>
			<h1>Bienvenido a nuestro portal</h1>
			<h3>Conoce a nuestros profesionales</h3>
			<Link to={'/dentists'} className='access-link'>
				<Button variant='contained' className='access-button'>Ingresar</Button>
			</Link>
		</div>
	)
}

export default Home
