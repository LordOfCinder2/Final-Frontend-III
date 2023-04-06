import { createContext, useReducer } from 'react'

export const ThemeContext = createContext()

const initialState = {
	isDark: true,
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_THEME':
			return { isDark: !state.isDark }
		default:
			return state
	}
}

const ThemeContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider
