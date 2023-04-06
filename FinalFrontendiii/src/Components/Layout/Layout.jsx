import React from 'react'
import NavbarLayout from './NavbarLayout/NavbarLayout'
import { Outlet } from 'react-router-dom'
import FooterLayout from './FooterLayout/FooterLayout'
import './Layout.css'

const Layout = () => {
	return (
		<div className="layout">
			<NavbarLayout />
			<Outlet />
			<FooterLayout />
		</div>
	)
}

export default Layout
