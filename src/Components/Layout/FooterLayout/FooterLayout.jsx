import React, { useContext } from 'react'
import './FooterLayout.css'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { ThemeContext } from '../../../context/ThemeContext.provider'

const FooterLayout = () => {
	const { state } = useContext(ThemeContext)

	return (
		<div className="footer-layout">
			<div className={state.isDark ? 'footer footer-dark' : 'footer footer-light'}>
				Design By Matias Di Lisa for DH
			</div>
		</div>
	)
}

export default FooterLayout
