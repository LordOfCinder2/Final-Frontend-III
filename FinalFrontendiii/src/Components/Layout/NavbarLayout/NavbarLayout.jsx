import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Button, ButtonGroup, Switch } from '@mui/material'
import './NavbarLayout.css'
import { ThemeContext } from '../../../context/ThemeContext.provider'

const NavbarLayout = () => {
	const { state, dispatch } = useContext(ThemeContext)

	const handleChange = () => {
		dispatch({ type: 'CHANGE_THEME' })
	}

	return (
		<div className="navbar-layout">
			<div className={state.isDark ? 'navbar navbar-dark' : 'navbar navbar-light'}>
				<ButtonGroup
					variant="text"
					aria-label="text button group"
					className="button-container"
				>
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? 'active-page' : 'page')}
					>
						<Button className="botones">Home</Button>
					</NavLink>
					<NavLink
						to="/dentists"
						className={({ isActive }) => (isActive ? 'active-page' : 'page')}
					>
						<Button className="botones">Dentistas</Button>
					</NavLink>
					<NavLink
						to="/contact"
						className={({ isActive }) => (isActive ? 'active-page' : 'page')}
					>
						<Button className="botones">Contacto</Button>
					</NavLink>
					<NavLink
						to="/favs"
						className={({ isActive }) => (isActive ? 'active-page' : 'page')}
					>
						<Button className="botones">Destacados</Button>
					</NavLink>
				</ButtonGroup>
				<Switch
					inputProps={{ 'aria-label': 'controlled' }}
					onChange={handleChange}
					defaultChecked
				/>
			</div>
		</div>
	)
}

export default NavbarLayout
