import {createContext, useReducer} from 'react'

export const DataContext=createContext()

const initialState={
  dentists:[]
}

const DataContextProvider = () => {
  return (
    <div>DataContextProvider</div>
  )
}

export default DataContextProvider