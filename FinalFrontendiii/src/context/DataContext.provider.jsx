import { createContext, useReducer } from 'react'
import { addToLocalStorage } from '../services/dataServices'

export const DataContext = createContext()

const initialState = {
	dentists: [],
	dentist: {},
	favDentists: [],
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'GET_DENTISTS':
			return { ...state, dentists: action.payload }
		case 'GET_DENTIST':
			return { ...state, dentist: action.payload }
		case 'ADD_TO_FAV_DENTISTS':
			return {
				...state,
				favDentists: JSON.parse(localStorage.getItem('favDentists')),
			}
		case 'ADD_TO_LOCAL_STORAGE':
			addToLocalStorage(action.payload)
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
