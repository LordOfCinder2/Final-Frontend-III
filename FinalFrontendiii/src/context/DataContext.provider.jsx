import { createContext, useReducer } from 'react'

export const DataContext = createContext()

const initialState = {
	dentists: [],
	dentist: {},
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'GET_DENTISTS':
			return { ...state, dentists: action.payload }
		case 'GET_DENTIST':
			return { ...state, dentist: action.payload }
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
