import React from 'react'
import { Outlet } from 'react-router-dom'

const NavbarLayout = () => {
	return (
		<div>
			<h3>Navbar</h3>
			<Outlet />
		</div>
	)
}

export default NavbarLayout
