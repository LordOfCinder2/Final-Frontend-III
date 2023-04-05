import React from 'react'
import { Outlet } from 'react-router-dom'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const FooterLayout = () => {
	return (
		<div>
			<Outlet />
			<p>Design By Matias Di Lisa for DH</p>
		</div>
	)
}

export default FooterLayout
