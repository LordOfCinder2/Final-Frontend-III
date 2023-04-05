import React from 'react'
import { Outlet } from 'react-router-dom'

const FooterLayout = () => {
	return (
		<div>
			<Outlet />
			<h3>Footer</h3>
		</div>
	)
}

export default FooterLayout
