import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Button, ButtonGroup, Switch } from '@mui/material'
import './NavbarLayout.css'

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const NavbarLayout = () => {
	return (
		<div className="navbar-layout">
			<div className="navbar">
				<ButtonGroup variant="text" aria-label="text button group">
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? 'active-page' : 'page')}
					>
						<Button className="botones">Ir al home</Button>
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
				<Switch {...label} defaultChecked/>
			</div>
			<Outlet />
		</div>
	)
}

export default NavbarLayout
