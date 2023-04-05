import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarLayout from './Components/Layout/NavbarLayout/NavbarLayout'
import FooterLayout from './Components/Layout/FooterLayout/FooterLayout'
import ThemeContextProvider from './context/ThemeContext.provider'
import DataContextProvider from './context/DataContext.provider'
import Home from './Components/Pages/Home/Home'
import DentistsContainer from './Components/Pages/Dentists/Dentists.container'
import DetailsDentistContainer from './Components/Pages/DetailsDentist/DetailsDentist.container'
import ContactFormContainer from './Components/Pages/Contact/ContactForm.container'
import FavsContainer from './Components/Pages/Favs/Favs.container'

function App() {
	return (
		<BrowserRouter>
			<ThemeContextProvider>
				<DataContextProvider>
					<Routes>
						<Route element={<NavbarLayout />}>
							<Route element={<FooterLayout />}>
								<Route path="/" element={<Home/>} />
								<Route path="/dentists" element={<DentistsContainer/>} />
								<Route path="/dentist/:id" element={<DetailsDentistContainer/>} />
								<Route path="/contact" element={<ContactFormContainer/>} />
								<Route path="/favs" element={<FavsContainer/>} />
							</Route>
						</Route>
					</Routes>
				</DataContextProvider>
			</ThemeContextProvider>
		</BrowserRouter>
	)
}

export default App
