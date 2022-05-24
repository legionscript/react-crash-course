import { createContext, useState } from 'react'

const Context = createContext()

export const ContextProvider = ({ children }) => {
	const [num, setNum] = useState(4)

	const saveNumber = number => {
		setNum(number)
	}


	return (
		<Context.Provider value={{ num, saveNumber }}>
			{children}
		</Context.Provider>
	)
}

export default Context