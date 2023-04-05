import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarLayout from './Components/Layout/NavbarLayout'
import FooterLayout from './Components/Layout/FooterLayout'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<NavbarLayout />}>
					<Route element={<FooterLayout />}>
						<Route path="/" element={<h1>home</h1>} />
						<Route path="/dentists" element={<h1>Lista dentistas</h1>} />
						<Route path="/dentist/:id" element={<h1>Dentista</h1>} />
						<Route path="/contact" element={<h1>Contacto</h1>} />
						<Route path="/favs" element={<h1>Favoritos</h1>} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
