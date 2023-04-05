import { createContext, useReducer } from 'react'

export const DataContext = createContext()

const initialState = {
	dentists: [],
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'GET_DENTISTS':
			return { ...state, dentists: action.payload }
		case 'GET_DENTIST':
			let dentist = state.dentists.filter((item) => {
				item.id === action.payload
			})
			return { dentist }
		default:
			return state
	}
}

const DataContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	return (
		<DataContext.Provider value={{ state, dispatch }}>
			{children}
		</DataContext.Provider>
	)
}

export default DataContextProvider
